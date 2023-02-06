import { extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light", // light, dark
};

// Define the colors
export const colors = {
  // Add new color
  primary: {
    50: "#e0f2ef",
    100: "#b2ded5",
    200: "#80cabb",
    300: "#4eb5a0",
    400: "#29a48d",
    500: "#07947a",
    600: "#05876e",
    700: "#02775f",
    800: "#006751",
    900: "#004b36",
  },
};

// extend the theme
export const theme = extendTheme({ config, colors });
