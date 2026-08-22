import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MenuBar } from "#tp-kit/components/menu-bar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "MenuBar",
  component: MenuBar,
  parameters: {
    registryItem: "menu-bar",
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => (
      <div className="pb-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLeadingAndTrailing: Story = {
  args: {
    leading: (
      <section className="kit-flex kit-items-center kit-uppercase kit-text-sm kit-tracking-wide">
        Leading
      </section>
    ),
    trailing: (
      <div className="kit-flex kit-justify-end kit-items-center kit-uppercase kit-text-sm kit-tracking-wide">
        Trailing
      </div>
    ),
  },
};
