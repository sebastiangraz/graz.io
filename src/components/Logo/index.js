/** @jsxImportSource theme-ui */

import { m } from "framer-motion";

export const Logo = ({ ...rest }) => {
  return (
    <m.div {...rest} sx={{ display: "inline-flex", position: "relative" }}>
      <h1
        className="logo"
        sx={{
          // hax iOS14 clips variable fonts
          minWidth: 100,
          // endhax
          display: "inline-block",
          fontFamily: "G",
          fontSize: "inherit",
          lineHeight: 0.5,
          userSelect: "none",
          textRendering: "optimizeLegibility",
          fontWeight: "normal",
          margin: 0,
        }}
      >
        G
      </h1>
    </m.div>
  );
};
