// Rewrites relative `../lib/utils` imports (correct for tp-kit's own source tree, see
// registry.json's "Internal imports must stay relative" note in CLAUDE.md) into the canonical
// `@/lib/utils` alias inside the *built* registry JSON only. `shadcn add` rewrites `@/lib/utils`
// to the consuming project's own configured utils alias; it does not rewrite relative imports,
// and the extra `tp-kit/` nesting the CLI adds to installed UI files would otherwise resolve
// `../lib/utils` to the wrong directory in the target project.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const registryDir = path.join(import.meta.dirname, "..", "public", "r");
const relativeUtilsImport = /from\s+(["'])(?:\.\.\/)+lib\/utils\1/g;

const files = await readdir(registryDir).catch(() => []);

for (const file of files) {
  if (!file.endsWith(".json")) continue;

  const filePath = path.join(registryDir, file);
  const item = JSON.parse(await readFile(filePath, "utf8"));

  let changed = false;
  for (const registryFile of item.files ?? []) {
    if (typeof registryFile.content !== "string") continue;
    const fixed = registryFile.content.replace(relativeUtilsImport, 'from "@/lib/utils"');
    if (fixed !== registryFile.content) {
      registryFile.content = fixed;
      changed = true;
    }
  }

  if (changed) {
    await writeFile(filePath, JSON.stringify(item, null, 2), "utf8");
  }
}
