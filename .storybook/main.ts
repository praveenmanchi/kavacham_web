import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx",
     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    " . ./**/*_mdx" ,
"../**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-links"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "tag"
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  staticDirs: ['../public'],
  viteFinal: async (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.base = './';
    }
    return config;
  },
};
export default config;
