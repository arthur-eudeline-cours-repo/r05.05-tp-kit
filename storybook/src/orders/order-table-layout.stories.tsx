import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OrderTableLayout } from "#tp-kit/components/orders/order-table-layout";
import { PRODUCTS_CATEGORY_DATA } from "#tp-kit/data";
import { OrderData } from "#tp-kit/types";
import { Card } from "#tp-kit/components/card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Orders/OrderTableLayout",
  component: OrderTableLayout,
  parameters: {
    registryItem: "order-table-layout",
    layout: "centered",
    backgrounds: {
      default: "slate"
    }
  },
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => <Card>
      <Story />
    </Card>
  ]
} satisfies Meta<typeof OrderTableLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOrder = {
  id: 42,
  total:
    PRODUCTS_CATEGORY_DATA[0].products[0].price * 2 +
    PRODUCTS_CATEGORY_DATA[0].products[1].price * 1,
  createdAt: new Date(),
  completedAt: null,
  status: "IN_PROGRESS",
  lines: [
    {
      id: 1,
      product: PRODUCTS_CATEGORY_DATA[0].products[0],
      qty: 2,
      subtotal: PRODUCTS_CATEGORY_DATA[0].products[0].price * 2,
    },
    {
      id: 2,
      product: PRODUCTS_CATEGORY_DATA[0].products[1],
      qty: 1,
      subtotal: PRODUCTS_CATEGORY_DATA[0].products[1].price * 1,
    },
  ],
} satisfies OrderData;

export const Default: Story = {
  args: {
    onRowClick: () => {},
    orders: [
      defaultOrder,
      {
        ...defaultOrder,
        id: 84,
        status: "COMPLETED",
      },
    ],
  },
};
