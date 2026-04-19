import "../src/styles/globals.css";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
        color: /(background|color)$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;