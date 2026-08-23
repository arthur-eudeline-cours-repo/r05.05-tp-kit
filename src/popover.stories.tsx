import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover } from '#tp-kit/components/popover';
import { Button } from "@arthur.eudeline/starbucks-tp-kit";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    registryItem: "popover",
    layout: "fullscreen",
    docs: {
      source: {
        code: `<Popover
  trigger={(props, state) => (
    <Button {...props} size="md" type="button" variant="ghost">
      {state.open ? "Fermer" : "Ouvrir"}
    </Button>
  )}
>
  <p className="p-16">Contenu de la popover</p>
</Popover>`,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    trigger: (props, state) => <Button {...props} size={"md"} type="button" variant={"ghost"}>
      {state.open ? "Fermer" : "Ouvrir"}
    </Button>,
    children: <p className="p-16">Contenu de la popover</p>,
    alignOffset: 8
  },
  decorators: [
    (Story) => (
      <div className="min-h-125 flex items-start justify-center h-full pt-24">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: (props, state) => <Button {...props} size={"md"} type="button" variant={"ghost"}>
      {state.open ? "Fermer" : "Ouvrir"}
    </Button>,
    children: <p className="p-16">Contenu de la popover</p>,
    alignOffset: 8
  },
};