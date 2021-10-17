import { transparentize } from "@theme-ui/color";
const colors = {
  text: "#111",
};
// const space = [0, 4, 8, 12, 16, 20, 28, 36, 48, 72, 128];
const space = [0, 2, 6, 12, 14, 16, 20, 32, 48, 72, 128];
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
  shadows: {
    capchase: `0px 138px 114px rgba(61, 32, 12, 0.15), 0px 75.716px 53.8638px rgba(61, 32, 12, 0.11405), 0px 45.1107px 33.2312px rgba(61, 32, 12, 0.0977383), 0px 26.7192px 20.7632px rgba(61, 32, 12, 0.0856342), 0px 15.0125px 12.5357px rgba(61, 32, 12, 0.075), 0px 7.55637px 7.00841px rgba(61, 32, 12, 0.0643658), 0px 3.04666px 3.37883px rgba(61, 32, 12, 0.0522617), 0px 0.698188px 1.15603px rgba(61, 32, 12, 0.0359501)`,
  },
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
    body: "-0.01em",
    lead: "-0.033em",
    heading: "-0.11em",
    caps: "0.011em",
  },
  fontSizes: space,
  colors: colors,
  text: {
    default: {
      fontSize: [5, 5, 5, 6],
      fontWeight: 400,
      fontFamily: "body",
      lineHeight: "body",
      letterSpacing: "body",
      display: "block",
      mb: ["0.75em"],
    },
    label: {
      variant: "text.default",
      lineHeight: "lead",
      fontSize: [4, 4, 4, 5],
    },
    caps: {
      display: "block",
      ...capsStyle,
      mb: [3],
    },
    lead: {
      variant: "text.default",
      fontSize: [6, 6, 7, 7],
      letterSpacing: "lead",
      lineHeight: "lead",
      mb: ["1.5em"],
    },
    heading: {
      ...capsStyle,
      variant: "text.lead",
    },
  },
  styles: {
    root: {
      ...scroll,
      // overflowY: "auto",
      // overflowX: "hidden",
      background: "#FFF5DD",
      webkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      variant: "text.default",
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
