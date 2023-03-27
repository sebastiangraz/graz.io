/** @jsxImportSource theme-ui */

import * as React from "react";

export const List = ({
  children,
  noBullets,
  variant,
  ...rest
}: {
  children: React.ReactNode;
  noBullets?: boolean;
  variant?: string;
  rest?: any;
}) => {
  return (
    <ul {...rest} sx={{ p: 0 }}>
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
