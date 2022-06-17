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
    50: "#badff9",
    100: "#a0d4f8",
    200: "#8bc8f3",
    300: "#76c1f6",
    400: "#65baf7",
    500: "#54b3f7",
    600: "#42B0FE",
    700: "#2ca1f5",
    800: "#158be0",
    900: "#0463a6",
  },
};

// extend the theme
export const theme = extendTheme({ config, colors });
