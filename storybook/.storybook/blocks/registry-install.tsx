import React from "react";
import { Markdown, useOf } from "@storybook/addon-docs/blocks";

/**
 * Racine publique sous laquelle le registry shadcn de tp-kit est servi.
 *
 * Le dépôt public https://github.com/arthur-eudeline-cours-repo/r05.05-tp-kit
 * publie ce Storybook sur GitHub Pages, et `staticDirs` y expose
 * `tooling/tp-kit/public/r` sous `/r`.
 *
 * C'est la même base que celle utilisée par les `registryDependencies` de
 * `tooling/tp-kit/registry.json` : les deux doivent rester synchronisées, sinon
 * `shadcn add` téléchargerait le composant depuis une origine et ses
 * dépendances depuis une autre.
 */
export const REGISTRY_BASE_URL =
  "https://arthur-eudeline-cours-repo.github.io/r05.05-tp-kit";

export function registryItemUrl(item: string): string {
  return `${REGISTRY_BASE_URL}/r/${item}.json`;
}

/**
 * Espace de nom sous lequel le registry tp-kit est déclaré dans le
 * `components.json` d'un projet consommateur (voir la page d'accueil du
 * Storybook) :
 *
 * ```json
 * { "registries": { "@tp-kit": "https://.../r/{name}.json" } }
 * ```
 *
 * Une fois ce mapping ajouté, `shadcn add @tp-kit/<item>` résout vers le même
 * item que l'URL complète renvoyée par `registryItemUrl`.
 */
export const REGISTRY_NAMESPACE = "@tp-kit";

export function registryItemRef(item: string): string {
  return `${REGISTRY_NAMESPACE}/${item}`;
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
    .map((item) => `npx shadcn@latest add ${registryItemRef(item)}`)
    .join("\n");

  return (
    <Markdown>
      {[
        `## Installation`,
        ``,
        `Le registry \`${REGISTRY_NAMESPACE}\` doit être déclaré dans le \`components.json\` de votre projet (voir la page d'accueil du Storybook). Depuis la racine du projet :`,
        ``,
        "```bash",
        commands,
        "```",
        ``,
        `Les dépendances internes du kit (\`cn()\`, types, composants réutilisés) sont installées automatiquement.`,
        `Le thème (couleurs de marque) ne s'installe qu'une seule fois, avec \`npx shadcn@latest add ${registryItemRef("theme")}\`.`,
      ].join("\n")}
    </Markdown>
  );
}
