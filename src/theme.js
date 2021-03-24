import { transparentize } from "@theme-ui/color";

const colors = {
  text: "#000",
  bg: "#eee",
  primary: "#09f",
};

const shadow = [
  `1px 2px 4px 0 ${transparentize(
    colors.text,
    0.96
  )()} inset, 0px 1px 1px 0 ${transparentize(colors.text, 0.98)()} inset`,
];

const space = [0, 4, 8, 16, 24, 32, 40, 48, 56, 72, 152];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  space: space,
  sizes: space,
  radii: { ...space.slice(0, 5), pill: "99em" },
  fonts: {
    body:
      'Styrene, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },

  lineHeights: {
    body: 1.8,
    heading: 1.32,
  },
  fontSizes: [10, 12, 14, 16, 21, 27, 41, 46],
  colors: { ...colors },
  shadows: { ...shadow },
  grids: {
    hero: {
      width: "100%",
      px: [3, 5, 7],
      py: [4, 6, 10],
      gridTemplateColumns: "1fr 1.2fr",
    },
  },
  text: {
    heading: {
      fontSize: [3, 5, 5, 6],
      fontWeight: 400,
      letterSpacing: "-0.066em",
      fontFamily: "body",
      lineHeight: "heading",
    },
  },
  styles: {
    root: {
      fontFeatureSettings: `"liga", "case"`,
      fontWeight: 400,
      bg: "bg",
      fontSize: 3,
      fontFamily: "body",
      lineHeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
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
