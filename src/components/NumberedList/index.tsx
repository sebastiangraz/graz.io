/** @jsxImportSource theme-ui */

import { Text, ThemeUICSSObject } from "theme-ui";
import * as React from "react";

export const NumberedList = ({
  small,
  horizontal,
  children,
  ...sx
}: {
  small?: boolean;
  horizontal?: boolean;
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
}) => {
  return (
    <ul
      sx={{
        ...(horizontal && {
          gridTemplateColumns: [
            "1fr",
            "repeat(auto-fit, minmax(min(240px, 100%), auto))",
          ],
          columnGap: 8,
        }),
        p: 0,
        display: "grid",
        rowGap: small ? 5 : 7,
        mb: 4,
      }}
      {...sx}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              fontWeight: small ? "bold" : "initial",
              fontSize: small ? 4 : "initial",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              alignItems: "center",
              maxWidth: 340,
              columnGap: small ? 4 : 7,
              mt: 2,
              listStyle: "none",
            }}
          >
            <span
              sx={{
                width: small ? "2.4em" : "3.2em",
                height: small ? "2.4em" : "3.2em",
                borderRadius: "pill",
                display: "inline-grid",
                alignItems: "center",
                justifyContent: "center",
                bg: "var(--caseForeground)",
                color: "var(--caseBackground)",
              }}
            >
              {i + 1}
            </span>
            <Text variant="label" m={0}>
              {child}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};
