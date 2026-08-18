import type { Meta, StoryObj } from "@storybook/react";
import { PRODUCTS_CATEGORY_DATA } from "#tp-kit/data";
import { ProductCartLine } from "#tp-kit/components/products/product-cart-line";
import { Card } from "#tp-kit/components/card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Products/ProductCartLine",
  component: ProductCartLine,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "slate"
    }
  },
  tags: ["autodocs"],
  args: {
    product: PRODUCTS_CATEGORY_DATA[0].products[0],
    qty: 1,
    onDelete: () => {},
    onQtyChange: (qty) => {},
  },
  decorators: [
    (Story) => {
      return (
        <Card>
          <Story />
        </Card>
      );
    },
  ],
} satisfies Meta<typeof ProductCartLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
