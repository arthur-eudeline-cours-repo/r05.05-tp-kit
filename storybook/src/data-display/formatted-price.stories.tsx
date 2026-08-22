import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormattedPrice } from "#tp-kit/components/data-display/formatted-price";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Data Display/FormattedPrice",
  component: FormattedPrice,
  parameters: {
    registryItem: "formatted-price",
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    price: 42.9911,
  },
} satisfies Meta<typeof FormattedPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Ceil: Story = {
  args: {
    price: 99.9999,
  },
};
