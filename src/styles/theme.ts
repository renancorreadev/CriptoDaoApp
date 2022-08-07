import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: "'Press Start 2P', cursive; ",
    body: "'Roboto', sans-serif; ",
    pageTitle: "'Rubik Mono One', sans-serif",
    confortaa: "'Comfortaa', sans-serif",
  },
  styles: {
    colors: {
      purple: {
        title: "#181B23",
        "800": "#1F2029",
        "700": "#353646",
        "600": "#4B4D63",
        "500": "#616480",
        "400": "#797D9A",
        "300": "H9699B0",
        "200": "#B3B5C6",
        "100": "#D1D2DC",
        "50": "#EEEEF2",
      },
    },
  },
});
