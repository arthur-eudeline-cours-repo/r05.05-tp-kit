import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarbucksLogo } from "#tp-kit/components/starbucks-logo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "StarbucksLogo",
  component: StarbucksLogo,
  parameters: {
    registryItem: "starbucks-logo",
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof StarbucksLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "100px"
  },
};

/**
 * Vous pouvez définir la taille du logo via le paramètre `size`.
 * Par défaut, celui-ci a une valeur de `1em`, ce qui veut dire qu'il a une taille relative à la taille du texte du parent le plus proche.
 */
export const Sizing: Story = {
  args: {
    size: "50px"
  }
};

/**
 * Pour rendre le logo monochrome, vous pouvez définir la propriété `monochrome` à `true` et ensuite appliquer une classe de coloration telle que `text-white` sur le logo lui-même ou sur un parent.
 */
export const Monochrome: Story = {
  args: {
    className: "kit-text-white kit-opacity-50",
    monochrome: true,
    size: "100px"
  },
  globals: {
    backgrounds: {
      value: "starbucks"
    }
  }
}