import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoadingIndicator } from "#tp-kit/components/loading-indicator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

/**
 * Il suffit de changer la taille du texte de l'input, par exemple avec la classe `text-2xl` de TailwindCSS
 */
export const ModifiyingTheSize: Story = {
  args: {
    className: "kit-text-2xl"
  }
}

/**
 * La couleur de l'indicateur dépends directement de la couleur du texte du parent le plus proche. 
 * Vous pouvez aussi la définir directement sur l'indicateur lui-même avec des classes telles que `text-brand` ou `text-red-600` par exemple.
 */
export const ModifiyingTheColor: Story = {
  args: {
    className: "kit-text-brand"
  }
}
