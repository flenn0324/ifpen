import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#cce2ef",
        200: "#99c5df",
        300: "#67a8cf",
        400: "#348bbf",
        500: "#016eaf",
        600: "#01588c",
        700: "#014269",
        800: "#002c46",
        900: "#001623"
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e5eef8",
        200: "#cbdef1",
        300: "#b0cdea",
        400: "#96bde3",
        500: "#7cacdc",
        600: "#638ab0",
        700: "#4a6784",
        800: "#324558",
        900: "#19222c"
      },
      indigo: {
        100: "#e0e8ee",
        200: "#c1d0dd",
        300: "#a2b9cd",
        400: "#83a1bc",
        500: "#648aab",
        600: "#506e89",
        700: "#3c5367",
        800: "#283744",
        900: "#141c22"
      },
    }
    : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      //         indigo: {
      //           100: "#cce2ef",
      //           200: "#99c5df",
      //           300: "#67a8cf",
      //           400: "#348bbf",
      //           500: "#016eaf",
      //           600: "#01588c",
      //           700: "#014269",
      //           800: "#002c46",
      //           900: "#001623"
      // },
      primary: {
        100: "#001623",
        200: "#002c46",
        300: "#014269",
        400: "#01588c",
        500: "#016eaf",
        600: "#348bbf",
        700: "#67a8cf",
        800: "#99c5df",
        900: "#cce2ef",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#19222c",
        200: "#324558",
        300: "#4a6784",
        400: "#638ab0",
        500: "#7cacdc",
        600: "#96bde3",
        700: "#b0cdea",
        800: "#cbdef1",
        900: "#e5eef8",
      },
      indigo: {
        100: "#141c22",
        200: "#283744",
        300: "#3c5367",
        400: "#506e89",
        500: "#648aab",
        600: "#83a1bc",
        700: "#a2b9cd",
        800: "#c1d0dd",
        900: "#e0e8ee",
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[900],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: "#fcfcfc",
          },
        }),
    },
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};