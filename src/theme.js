const colors = {
  text: "#000",
  bg: "#FAF7Ea",
};

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const body = {
  fontSize: [2], //   fontSize: [5, 6, 6, 7],
  fontWeight: 400,
  letterSpacing: "-0.066em",
  fontFamily: "body",
  lineHeight: "heading",
};
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
  breakpoints: ["40em", "64em", "98em", "120em"],
  lineHeights: {
    body: 1.8,
    heading: 1.32,
  },
  fontSizes: [10, 12, 14, 16, 21, 27, 41, 46],
  colors: { ...colors },
  grids: {
    hero: {
      width: "100%",
      px: [3, 5, 7],
      py: [4, 6, 7],
      gridTemplateColumns: "1fr 1.2fr",
    },
  },
  text: {
    default: {
      fontWeight: 400,
      fontSize: [4],
      letterSpacing: "-0.02em",
    },
    body: {
      ...body,
    },
    heading: {
      ...body,
      fontSize: [6],
      letterSpacing: "0em",
      textTransform: "uppercase",
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
      color: "text",
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
