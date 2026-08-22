import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionContainer } from "#tp-kit/components/section-container";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "SectionContainer",
  component: SectionContainer,
  parameters: {
    registryItem: "section-container",
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: "Mon contenu",
  },
} satisfies Meta<typeof SectionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const FullWidth: Story = {
  args: {
    children: <p>Full width</p>,
    background: "brand",
    fullWidth: true,
    className: "text-white",
  },
};
