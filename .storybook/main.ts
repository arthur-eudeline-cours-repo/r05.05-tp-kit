import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // Sert le registry shadcn de tp-kit (généré par `pnpm -C ../tp-kit run registry:build`) sous /r,
  // pour que `npx shadcn add http://.../r/button.json` fonctionne une fois le Storybook déployé.
  staticDirs: [{ from: "../../tp-kit/public/r", to: "/r" }],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    "@storybook/addon-styling-webpack"
  ],

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
