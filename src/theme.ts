const colors = {
  text: "#05010c",
  textDim: "#05010c99",
  background: "#F7F1E8",
  metaview: {
    foreground: "#0f1922",
    foregroundDim: "#0f19227d",
    background: "#E7EFE8",
  },
  loupe: {
    foreground: "#1A0319",
    foregroundDim: "#1A0319a3",
    background: "#E6CFE5",
  },
  capchase: {
    foreground: "#0F0F14",
    foregroundDim: "#0F0F147A",
    background: "#FCFBF8",
  },
  loctax: {
    foreground: "#E1AEE3",
    foregroundDim: "#E1AEE3a3",
    background: "#221223",
  },
  gitbook: {
    foreground: "#181D1F",
    foregroundDim: "#181D1Fa3",
    background: "#d8dfdf",
  },
  end: {
    foreground: "#000",
    foregroundDim: "#000",
    background: "transparent",
  },
};
const space = [0, 4, 6, 12, 14, 16, 20, 24, 32, 56, 72, 112, 156];
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
    backgroundColor: "color-mix(in srgb, var(--theme-ui-colors-text), transparent 50%)",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    cursor: "pointer",
    backgroundColor: "color-mix(in srgb, var(--theme-ui-colors-text), transparent 40%)",
  },
};

export default {
  space: space,
  sizes: space,
  config: {
    useColorSchemeMediaQuery: "system",
  },
  shadows: {
    capchase: `0px 38px 56px rgba(61, 27, 9, 0.02), 0px 17.5686px 25.8905px rgba(61, 27, 9, 0.0148335), 0px 10.0523px 14.814px rgba(61, 27, 9, 0.0125356), 0px 6.10169px 8.99196px rgba(61, 27, 9, 0.010799), 0px 3.67654px 5.41805px rgba(61, 27, 9, 0.00920104), 0px 2.04733px 3.01712px rgba(61, 27, 9, 0.00746438), 0px 0.880544px 1.29764px rgba(61, 27, 9, 0.00516649)`,
    // capchase: `0px 109px 80px rgba(0, 0, 0, 0.07), 0px 50.394px 36.9864px rgba(0, 0, 0, 0.0519173), 0px 28.8343px 21.1628px rgba(0, 0, 0, 0.0438747), 0px 17.5022px 12.8457px rgba(0, 0, 0, 0.0377964), 0px 10.5459px 7.74008px rgba(0, 0, 0, 0.0322036), 0px 5.87261px 4.31018px rgba(0, 0, 0, 0.0261253), 0px 2.52577px 1.85378px rgba(0, 0, 0, 0.0180827)`,
  },
  radii: { ...space.slice(0, 5), pill: "99em" },
  fonts: {
    body: 'Styrene, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  breakpoints: ["38em", "68em", "90em"],
  lineHeights: {
    body: 1.8,
    lead: 1.45,
    heading: 1.1,
  },
  letterSpacings: {
    body: "-0.012em",
    lead: ["-0.033em"],
    heading: "-0.06em",
    caps: "0.0025em",
  },
  fontSizes: space,
  colors: colors,
  text: {
    default: {
      fontSize: [5, 5, 5, 5],
      fontWeight: 400,
      fontFamily: "body",
      lineHeight: "body",
      letterSpacing: "body",
      display: "block",
    },
    label: {
      variant: "text.default",
      lineHeight: ["body"],
      fontSize: [4, 5, 5, 5],
    },
    caps: {
      display: "block",
      ...capsStyle,
      mb: [3],
      fontSize: [5],
    },
    lead: {
      variant: "text.default",
      fontSize: [5, 5, 6, 7],
      letterSpacing: ["body", null, "lead"],
      lineHeight: ["body", null, null, "lead"],
      mb: ["1.5em"],
    },
    heading: {
      ...capsStyle,
      variant: "text.lead",
      lineHeight: ["lead"],
      fontSize: [6, 6, 7, 7],
    },
  },
  styles: {
    root: {
      ...scroll,
      overflowY: "auto",
      overflowX: "hidden",
      background: "background",
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
