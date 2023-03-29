/** @jsxImportSource theme-ui */

import * as React from "react";
import { ThemeUICSSObject } from "theme-ui";

export const List = ({
  children,
  noBullets,
  variant,
  ...sx
}: {
  children: React.ReactNode;
  noBullets?: boolean;
  variant?: string;
  sx?: ThemeUICSSObject;
}) => {
  return (
    <ul {...sx} sx={{ p: 0 }}>
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              mb: [3],
              "&:last-child": {
                mb: 0,
              },
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
