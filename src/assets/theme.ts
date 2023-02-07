import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "20em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const Theme = extendTheme({
  breakpoints: breakpoints,
  colors: {
    primary: {
      900: "#201c37",
    },
    secondary: {
      500: "#9e1dc5",
      // 900: "#9e1dc5",
    },
    dark: {
      100: "#EEEEFF",
      200: "#E3c5BB",
      500: "#a0939d",
      900: "#252627",
    },

    green: {
      700: "#1a6640",
    },

    error: {
      700: "#a62b2b",
      200: "#f08686",
    },

    // white: {
    //   full: Colors.white.full,
    // },
  },
});
