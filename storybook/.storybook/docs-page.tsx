import React from "react";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from "@storybook/addon-docs/blocks";
import { RegistryInstall } from "./blocks/registry-install";

/**
 * Reprend la page autodocs par défaut de Storybook, en insérant la commande
 * d'installation du composant (`shadcn add`) juste après sa description.
 */
export function DocsPage() {
  const resolvedOf = useOf("meta", ["meta"]);
  const isSingleStory = Object.keys(resolvedOf.csfFile.stories).length === 1;

  return (
    <>
      <Title />
      <Subtitle />
      <Description of="meta" />
      {isSingleStory ? <Description of="story" /> : null}
      <RegistryInstall />
      <Primary />
      <Controls />
      {isSingleStory ? null : <Stories />}
    </>
  );
}
