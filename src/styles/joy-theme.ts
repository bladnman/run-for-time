// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         // affects all Joy components that has `color="primary"` prop.
//         primary: {
//           50: '#fffbeb',
//           100: '#fef3c7',
//           200: '#fde68a',
//           // 300, 400, ..., 800,
//           900: '#78350f',
//         },
//       },
//     },
//   },
//   fontFamily: {
//     display: 'Inter, var(--joy-fontFamily-fallback)',
//     body: 'Inter, var(--joy-fontFamily-fallback)',
//   },
// });

import { extendTheme } from "@mui/joy";
import { BREAKPOINTS } from "@/hooks/useBreakSize.ts";

const theme = extendTheme({
  breakpoints: {
    values: BREAKPOINTS,
  },
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          // Credit:
          // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          // Adjust the global variant tokens as you'd like.
          // The tokens should be the same for all color schemes.
          solidBg: "var(--joy-palette-secondary-400)",
          solidActiveBg: "var(--joy-palette-secondary-500)",
          outlinedBorder: "var(--joy-palette-secondary-500)",
          outlinedColor: "var(--joy-palette-secondary-700)",
          outlinedActiveBg: "var(--joy-palette-secondary-100)",
          softColor: "var(--joy-palette-secondary-800)",
          softBg: "var(--joy-palette-secondary-200)",
          softActiveBg: "var(--joy-palette-secondary-300)",
          plainColor: "var(--joy-palette-secondary-700)",
          plainActiveBg: "var(--joy-palette-secondary-100)",
        },
      },
    },
    // dark: {
    //   palette: {
    //     secondary: {
    //       // Credit:
    //       // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
    //       50: "#fdf2f8",
    //       100: "#fce7f3",
    //       200: "#fbcfe8",
    //       300: "#f9a8d4",
    //       400: "#f472b6",
    //       500: "#ec4899",
    //       600: "#db2777",
    //       700: "#be185d",
    //       800: "#9d174d",
    //       900: "#831843",
    //       // Adjust the global variant tokens as you'd like.
    //       // The tokens should be the same for all color schemes.
    //       solidBg: "var(--joy-palette-secondary-400)",
    //       solidActiveBg: "var(--joy-palette-secondary-500)",
    //       outlinedBorder: "var(--joy-palette-secondary-700)",
    //       outlinedColor: "var(--joy-palette-secondary-600)",
    //       outlinedActiveBg: "var(--joy-palette-secondary-900)",
    //       softColor: "var(--joy-palette-secondary-500)",
    //       softBg: "var(--joy-palette-secondary-900)",
    //       softActiveBg: "var(--joy-palette-secondary-800)",
    //       plainColor: "var(--joy-palette-secondary-500)",
    //       plainActiveBg: "var(--joy-palette-secondary-900)",
    //     },
    //   },
    // },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.

export default theme;
