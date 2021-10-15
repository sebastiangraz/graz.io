/** @jsxImportSource theme-ui */

import * as React from "react";

export const List = ({ children, noBullets, variant, ...rest }) => {
  return (
    <ul {...rest} sx={{ p: 0 }}>
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              mb: 2,
              listStyle: "none",
              ...(!noBullets && {
                "&::marker": {
                  content: `"·  "`,
                  textRendering: "geometricPrecision",
                },
              }),
            }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
