/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";

export const Logo = ({ weight, ...rest }) => {
  return (
    <div {...rest} sx={{ display: "inline-flex", position: "relative" }}>
      <h1
        className="logo"
        sx={{
          // hax iOS14 clips variable fonts
          minWidth: 100,
          // endhax
          display: "inline-block",
          fontFamily: "G",
          fontSize: "inherit",
          lineHeight: 1.2,
          textRendering: "optimizeLegibility",
          fontWeight: "normal",
          margin: 0,
          fontVariationSettings: `"wght" ${weight ? weight : 50}`,
          transition: `font-variation-settings cubic-bezier(0.5,0,0,1) 0.4s`,
          "&:hover": {
            cursor: "pointer",
            fontVariationSettings: `"wght" 80`,
          },
        }}
      >
        G
      </h1>
    </div>
  );
};
