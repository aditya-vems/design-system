import "../src/globals.css";
import * as React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ThemeProvider } from "next-themes";
import { Toaster } from "../src/components/feedback/sonner";

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
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Story />
        <Toaster />
      </ThemeProvider>
    ),
  ],
};

export default preview;