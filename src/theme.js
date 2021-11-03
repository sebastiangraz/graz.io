import { transparentize } from "@theme-ui/color";
import { cases } from "./components/App";

const colors = {
  text: "#111",
};
// const space = [0, 4, 8, 12, 16, 20, 28, 36, 48, 72, 128];
const space = [0, 2, 6, 12, 14, 16, 20, 32, 48, 72, 144, 256];
const capsStyle = {
  textTransform: "uppercase",
  fontFeatureSettings: `"c2sc"`,
  letterSpacing: "caps",
};
export const scroll = {
  "&::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
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
    capchase: `0px 109px 80px rgba(0, 0, 0, 0.07), 0px 50.394px 36.9864px rgba(0, 0, 0, 0.0519173), 0px 28.8343px 21.1628px rgba(0, 0, 0, 0.0438747), 0px 17.5022px 12.8457px rgba(0, 0, 0, 0.0377964), 0px 10.5459px 7.74008px rgba(0, 0, 0, 0.0322036), 0px 5.87261px 4.31018px rgba(0, 0, 0, 0.0261253), 0px 2.52577px 1.85378px rgba(0, 0, 0, 0.0180827)`,
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
    lead: ["-0.033em"],
    heading: "-0.11em",
    caps: "0.0025em",
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
      fontSize: [5, 5, 6, 7],
      letterSpacing: ["body", null, "lead"],
      lineHeight: ["body", null, "lead"],
      mb: ["1.5em"],
    },
    heading: {
      ...capsStyle,
      variant: "text.lead",
      fontSize: [6, 6, 7, 7],
    },
  },
  styles: {
    root: {
      ...scroll,
      overflowY: "auto",
      overflowX: "hidden",
      background: cases.get("home").bg,
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
