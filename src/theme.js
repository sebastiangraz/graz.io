import { transparentize } from "@theme-ui/color";
const colors = {
  text: "#111",
};
// const space = [0, 4, 8, 12, 16, 20, 28, 36, 48, 72, 128];
const space = [0, 3, 6, 11, 13, 16, 20, 32, 40, 72, 128];
const capsStyle = {
  textTransform: "uppercase",
  fontFeatureSettings: `"c2sc"`,
  letterSpacing: "caps",
};
export const scroll = {
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: (t) => `${transparentize("text", 0)(t)}`,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    cursor: "pointer",
    backgroundColor: (t) => `${transparentize("text", 0.1)(t)}`,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  space: space,
  sizes: space,
  radii: { ...space.slice(0, 5), pill: "99em" },
  fonts: {
    body: 'Styrene, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  breakpoints: ["40em", "64em", "98em", "120em"],
  lineHeights: {
    body: 1.6,
    lead: 1.4,
    heading: 1.1,
  },
  letterSpacings: {
    body: "0em",
    lead: "-0.033em",
    heading: "-0.11em",
    caps: "0.011em",
    // body: "-0.033em",
    // lead: "-0.066em",
    // heading: "-0.11em",
    // caps: "0.011em",
  },
  fontSizes: space,
  colors: colors,
  text: {
    default: {
      fontSize: [4, 4, 4, 5],
      fontWeight: 400,
      fontFamily: "body",
      lineHeight: "body",
      letterSpacing: "body",
      display: "block",
    },
    caps: {
      ...capsStyle,
    },
    lead: {
      variant: "text.default",
      fontSize: space.slice(5, 8),
      letterSpacing: "lead",
      lineHeight: "lead",
    },
    heading: {
      ...capsStyle,
      variant: "text.lead",
    },
  },
  styles: {
    root: {
      ...scroll,
      background: "#FFF5DD",
      webkitFontSmoothing: "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      variant: "text.default",
      fontVariationSettings: `'wght' 66`,
      fontFeatureSettings: `"liga"`,
    },
    a: { color: "inherit", "&:hover": { textDecoration: "none" } },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
