import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#F3FDFF",
      100: "#D0F5FE",
      200: "#B0EBF9",
      300: "#94DFF2",
      400: "#7AD1E7",
      500: "#63C2D9",
      600: "#50B0C8",
      700: "#2E8196",
      800: "#154D5B",
      900: "#041418",
    },
    muted: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    button: {
      600: "#F5F5F5",
      800: "#E5E5E5",
    }
  },

  fontConfig: {

  },

  fonts: {
    
  }
});

export default theme;