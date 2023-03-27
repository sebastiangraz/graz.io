/** @jsxImportSource theme-ui */

import * as React from "react";
import { Box } from "theme-ui";
import { GridParent } from "..";

export const TypographyBlock = ({ children, ...rest }) => {
  const childCount = React.Children.toArray(children).length;
  return (
    <GridParent sx={rest}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: ["block", "grid"],
          gridTemplateColumns: "repeat(8, 1fr)",
          gridAutoFlow: "column",
          gridTemplateRows: ["auto auto"],
          mb: 9,
          rowGap: childCount >= 4 ? 7 : 0,
          columnGap: 9,
          gridColumn: ["2/span 8", "2/ span 8"],
        }}
      >
        {React.Children.map(children || null, (child, i) => {
          return (
            <Box
              sx={{
                gridColumnEnd: "span 4",
                gridColumnStart: "5",
                "&:nth-of-type(odd)": {
                  gridColumnEnd:
                    childCount === 1
                      ? "span 8"
                      : childCount > 2 && childCount < 4 && i === 0
                      ? "span 8"
                      : "span 4",
                  gridColumnStart: ["1"],
                },
              }}
            >
              {child}
            </Box>
          );
        })}
      </Box>
    </GridParent>
  );
};
