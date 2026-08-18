import type { Preview } from "@storybook/react";
import { stGreen } from "@arthur.eudeline/starbucks-tp-kit/tailwind/colors";
import "./tailwind.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "fullscreen",
    backgrounds: {
      default: "white",
      values: [
        {
          name: "starbucks",
          value: stGreen.DEFAULT,
        },
        {
          name: "white",
          value: "#ffffff",
        },
        {
          name: "slate",
          value: "#f8fafc"
        }
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
