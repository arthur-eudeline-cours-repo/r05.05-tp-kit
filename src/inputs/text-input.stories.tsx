import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextInput } from "#tp-kit/components/inputs/text-input";
import { AtSign, Eye } from "lucide-react";
import { Button } from "#tp-kit/components/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Inputs/TextInput",
  component: TextInput,
  parameters: {
    registryItem: "text-input",
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Nom",
    placeholder: "Lin Guini..."
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    required: true
  }
}


export const WithIcons: Story = {
  args: {
    className: "kit-relative kit-px-14",

    before: <Button variant="ghost" size={"sm"} className="kit-absolute kit-z-10 kit-inset-y-0 kit-left-0 kit-rounded-r-none hover:kit-text-brand">
      <AtSign />
    </Button>,

    after: <Button variant="ghost" size={"sm"} className="kit-absolute kit-z-10 kit-inset-y-0 kit-right-0 kit-rounded-l-none hover:kit-text-brand">
      <Eye />
    </Button>,
  }
}

export const WithError: Story = {
  args: {
    error: "Ce nom est déjà utilisé"
  }
}

