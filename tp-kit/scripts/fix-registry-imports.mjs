// Réécrit, dans le registry *généré* (public/r/*.json) uniquement, les imports relatifs des
// sources du tp-kit en imports basés sur l'alias `@/` du projet cible.
//
// Pourquoi : les sources du tp-kit doivent rester en imports relatifs (le paquet n'a pas d'étape
// de build, apps/fil-rouge/web et tooling/storybook compilent le TSX brut — un alias `@/` dans les
// sources entrerait en collision avec le `@/*` de l'app qui les consomme). Mais `shadcn add`
// installe le kit sous `src/tp-kit/`, à une profondeur différente de l'arborescence du paquet, donc
// les chemins relatifs ne pointeraient plus au bon endroit chez l'étudiant. On convertit donc chaque
// import relatif en alias au moment du build.
//
// Le mapping est dérivé des `target` de registry.json, ce qui garantit que les imports générés et
// l'emplacement réel des fichiers installés ne peuvent pas diverger. `shadcn add` réécrit ensuite
// ces `@/...` vers les alias déclarés dans le components.json du projet cible.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const packageDir = path.join(import.meta.dirname, "..");
const registryDir = path.join(packageDir, "public", "r");

const SOURCE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];
// Les préfixes de `target` que shadcn résout via les alias du components.json cible : `@components/…`,
// `@lib/…`, `@ui/…`, `@hooks/…` (sans slash après le `@`). registry.json n'en utilise aucun — tout le
// kit s'installe sous le target nu `tp-kit/…` — mais on les gère au cas où.
const TARGET_ALIAS_ROOTS = {
  components: "@/components",
  ui: "@/components/ui",
  lib: "@/lib",
  hooks: "@/hooks",
};

const stripExtension = (specifier) =>
  SOURCE_EXTENSIONS.reduce(
    (acc, ext) => (acc.endsWith(ext) ? acc.slice(0, -ext.length) : acc),
    specifier,
  );

/**
 * Traduit le `target` d'un fichier de registry en spécificateur d'import aliasé.
 * `tp-kit/components/button.tsx` -> `@/tp-kit/components/button`
 * `tp-kit/lib/utils.ts`          -> `@/tp-kit/lib/utils`
 * `@lib/utils.ts`                -> `@/lib/utils`       (targets aliasés shadcn, inutilisés ici)
 * `@components/x.tsx`            -> `@/components/x`
 */
function targetToAlias(target) {
  const withoutExtension = stripExtension(target);

  // `~/` = racine du projet, hors de portée de l'alias `@/`.
  if (withoutExtension.startsWith("~/")) return null;

  const aliased = withoutExtension.match(/^@([^/]+)\/(.+)$/);
  if (aliased) {
    const [, root, rest] = aliased;
    return `${TARGET_ALIAS_ROOTS[root] ?? `@/${root}`}/${rest}`;
  }

  return `@/${withoutExtension.replace(/^src\//, "")}`;
}

/** Chemin source (relatif au paquet, sans extension) -> import aliasé. */
async function buildAliasMap() {
  const registry = JSON.parse(
    await readFile(path.join(packageDir, "registry.json"), "utf8"),
  );

  const aliases = new Map();
  for (const item of registry.items ?? []) {
    for (const file of item.files ?? []) {
      if (!file.target) continue;
      const alias = targetToAlias(file.target);
      if (alias) aliases.set(stripExtension(file.path), alias);
    }
  }
  return aliases;
}

const IMPORT_SPECIFIER = /(from\s*|import\s*\(?\s*)(["'])(\.\.?\/[^"']*)\2/g;

function rewriteImports(content, filePath, aliases, unresolved) {
  return content.replace(IMPORT_SPECIFIER, (match, prefix, quote, specifier) => {
    const resolved = stripExtension(
      path.posix.join(path.posix.dirname(filePath), specifier),
    );
    const alias = aliases.get(resolved) ?? aliases.get(`${resolved}/index`);

    if (!alias) {
      unresolved.push(`${filePath}: ${specifier}`);
      return match;
    }
    return `${prefix}${quote}${alias}${quote}`;
  });
}

const aliases = await buildAliasMap();
const unresolved = [];
const files = await readdir(registryDir).catch(() => []);

for (const file of files) {
  if (!file.endsWith(".json")) continue;

  const filePath = path.join(registryDir, file);
  const item = JSON.parse(await readFile(filePath, "utf8"));

  let changed = false;
  for (const registryFile of item.files ?? []) {
    if (typeof registryFile.content !== "string") continue;

    const rewritten = rewriteImports(
      registryFile.content,
      registryFile.path,
      aliases,
      unresolved,
    );
    if (rewritten !== registryFile.content) {
      registryFile.content = rewritten;
      changed = true;
    }
  }

  if (changed) {
    await writeFile(filePath, JSON.stringify(item, null, 2), "utf8");
  }
}

if (unresolved.length) {
  console.error(
    "fix-registry-imports: imports relatifs sans `target` correspondant dans registry.json —\n" +
      unresolved.map((entry) => `  - ${entry}`).join("\n") +
      "\nAjoutez le fichier manquant au registry (ou un `target`) : tel quel, il casserait " +
      "l'installation via `shadcn add`.",
  );
  process.exit(1);
}
