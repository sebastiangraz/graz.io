/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";

export const GridParent = ({ children, ...rest }) => {
  return (
    <Box
      {...rest}
      sx={{
        // 6px scrollbar width included in the calc
        "@media (hover: hover)": {
          "--calcWrapper": [
            "calc((var(--gridCount) / 7 * 100vw) - 5px)",
            null,
            "calc((var(--gridCount) / 12 * 100vw) - 5px)",
            null,
          ],
        },
        "@media (hover: none)": {
          "--calcWrapper": [
            "var(--gridCount) / 7 * 100vw",
            null,
            "var(--gridCount) / 12 * 100vw",
            null,
          ],
        },
        "--gutter": "0px",
        "--noOfColumns": "8",
        "--noOfGutters": "calc(var(--noOfColumns) - 1)",
        "--ratioA": "1",
        "--ratioB": "1",
        "--factor": "calc(var(--ratioB) / var(--ratioA))",
        "--rh": `calc(
        (
            (var(--calcWrapper) - (var(--noOfGutters) * var(--gutter))) /
              var(--noOfColumns)
          ) * var(--factor)
      )`,

        maxWidth: "var(--calcWrapper)",
        display: "grid",
        gridTemplateColumns: "repeat(var(--noOfColumns), minmax(0, 1fr))",
        gridAutoFlow: "dense",
        gridAutoRows: "minmax(var(--rh), auto)",
        gridGap: "var(--gutter)",
        margin: "var(--gutter) auto",

        "& > *": {
          gridColumn: "span 4",
          gridRow: "span 4",
        },
      }}
    >
      {children}
    </Box>
  );
};
