import type { Meta, StoryObj } from "@storybook/react";
import { ProductCardLayout } from "#tp-kit/components/products/product-card-layout";
import { PRODUCTS_CATEGORY_DATA } from "#tp-kit/data";
import { Button } from "#tp-kit/components/button";
import { Card } from "#tp-kit/components/card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Products/ProductCardLayout",
  component: ProductCardLayout,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "slate"
    }
  },
  tags: ["autodocs"],
  args: {
    product: PRODUCTS_CATEGORY_DATA[0].products[0],
    button: "Un bouton irait bien par ici",
  },
  decorators: [
    (Story) => {
      return (
        <Card className="max-w-[300px]">
          <Story />
        </Card>
      );
    },
  ],
} satisfies Meta<typeof ProductCardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithButton: Story = {
  args: {
    button: (
      <Button variant={"primary"} fullWidth>
        Click me
      </Button>
    ),
  },
};
