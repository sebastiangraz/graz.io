/** @jsxImportSource theme-ui */

import * as React from "react";

export const List = ({ children, noBullets, variant }) => {
  return (
    <ul sx={{ p: 0 }}>
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              mt: 2,
              "&::marker": {
                content: `"·  "`,
                fontSize: "100%",
                textRendering: "geometricPrecision",
              },
            }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
