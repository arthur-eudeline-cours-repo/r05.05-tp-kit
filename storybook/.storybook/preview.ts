import type { Preview } from "@storybook/nextjs-vite";
import colors from "@arthur.eudeline/starbucks-tp-kit/tailwind/colors";
import { DocsPage } from "./docs-page";
import "./tailwind.css";

const { stGreen } = colors;

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "fullscreen",
    docs: {
      page: DocsPage,
    },
    backgrounds: {
      options: {
        starbucks: {
          name: "starbucks",
          value: stGreen.DEFAULT,
        },

        white: {
          name: "white",
          value: "#ffffff",
        },

        slate: {
          name: "slate",
          value: "#f8fafc"
        }
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "white"
    }
  }
};

export default preview;
