import type { Meta, StoryObj } from "@storybook/react";
import { BreadCrumbs } from "#tp-kit/components/breadcrumbs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "BreadCrumbs",
  component: BreadCrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **Exemple d'utilisation** 
 * 
 * ```tsx
 * <BreadCrumbs
 *  items={[
 *    {
 *        label: 'Accueil',
 *        url: '#1'
 *     },
 *     {
 *        label: 'Latte',
 *        url: '#2',
 *      },
 *     {
 *        label: "Latte machiato",
 *        url: "#3"
 *      }
 *    ]}
 * />
 * ```
 */
export const Default: Story = {
  args: {
    items: [
      {
        label: "Accueil",
        url: "#1",
      },
      {
        label: "Latte",
        url: "#2",
      },
      {
        label: "Latte machiato",
        url: "#3"
      }
    ],
  },
};
