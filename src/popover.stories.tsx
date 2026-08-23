import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MenuBar } from "#tp-kit/components/menu-bar";
import {Popover} from '#tp-kit/components/popover';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    registryItem: "popover",
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    trigger: (open: boolean) => null
  },
  decorators: [
    (Story) => (
      <div className="pb-125">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};