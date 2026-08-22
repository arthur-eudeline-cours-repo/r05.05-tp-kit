import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "#tp-kit/components/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    registryItem: "button",
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Click Me",
  },
  decorators: [
    (Story) => (
      <div className="max-w-lg w-screen flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const White: Story = {
  args: {
    variant: "white",
  },
  globals: {
    backgrounds: {
      value: "starbucks"
    }
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};
