import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "#tp-kit/components/heading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Heading",
  component: Heading,
  parameters: {
    registryItem: "heading",
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    as: "h1",
    size: "md",
    variant: "black",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  args: {
    as: "h1",
    size: "lg",
    children: "My large heading",
  },
  render: () => {
    return <div>
      <Heading as="h2" size="display">Display</Heading>
      <Heading as="h2" size="xl">XL Heading</Heading>
      <Heading as="h2" size="lg">LG Heading</Heading>
      <Heading as="h2" size="md">MD Heading</Heading>
      <Heading as="h2" size="sm">SM Heading</Heading>
    </div>;
  }
};

/**
 * Vous pouvez changer la couleur du titre via la propriété 
 */
export const Colors: Story = {
  render: () => {
    return <div>
      <Heading as="h2" variant={"black"} size="display">Variant Black</Heading>
      <Heading as="h2" variant={"brand"} size="display">Variant Brand</Heading>
    </div>;
  }
};
