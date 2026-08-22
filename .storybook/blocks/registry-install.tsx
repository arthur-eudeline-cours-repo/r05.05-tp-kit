import React from "react";
import { Markdown, useOf } from "@storybook/addon-docs/blocks";

/**
 * URL utilisée quand on n'arrive pas à déduire celle du Storybook courant
 * (rendu côté serveur, tests, ...).
 */
const FALLBACK_REGISTRY_ORIGIN = "http://localhost:6006";

/**
 * Déduit la racine sous laquelle le registry shadcn de tp-kit est servi.
 *
 * Les docs sont rendues depuis `<base>/iframe.html` ; en retirant le nom de
 * fichier on retombe sur la base du Storybook, sous laquelle `staticDirs`
 * expose `tooling/tp-kit/public/r` en `/r`. Ça marche donc aussi bien en local
 * (`http://localhost:6006`) qu'une fois déployé dans un sous-chemin
 * (GitHub Pages, par exemple).
 */
function registryBaseUrl(): string {
  if (typeof window === "undefined") {
    return FALLBACK_REGISTRY_ORIGIN;
  }

  const { origin, pathname } = window.location;
  const base = pathname.replace(/[^/]*$/, "").replace(/\/$/, "");

  return `${origin}${base}`;
}

export function registryItemUrl(item: string): string {
  return `${registryBaseUrl()}/r/${item}.json`;
}

/**
 * Affiche la commande `shadcn add` permettant d'installer le composant courant
 * dans un projet externe.
 *
 * Le ou les noms d'items du registry sont lus depuis le paramètre
 * `registryItem` déclaré dans le `meta` de la story :
 *
 * ```tsx
 * const meta = {
 *   parameters: { registryItem: "button" },
 * } satisfies Meta<typeof Button>;
 * ```
 */
export function RegistryInstall() {
  const resolvedOf = useOf("meta", ["meta"]);
  const { registryItem } = resolvedOf.preparedMeta.parameters as {
    registryItem?: string | string[];
  };

  if (!registryItem) {
    return null;
  }

  const items = Array.isArray(registryItem) ? registryItem : [registryItem];
  const commands = items
    .map((item) => `npx shadcn@latest add ${registryItemUrl(item)}`)
    .join("\n");

  return (
    <Markdown>
      {[
        `## Installation`,
        ``,
        `Depuis la racine de votre projet :`,
        ``,
        "```bash",
        commands,
        "```",
        ``,
        `Les dépendances internes du kit (\`cn()\`, types, composants réutilisés) sont installées automatiquement.`,
        `Le thème (couleurs de marque) ne s'installe qu'une seule fois, avec \`npx shadcn@latest add ${registryItemUrl("theme")}\`.`,
      ].join("\n")}
    </Markdown>
  );
}
