/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";

export const GridParent = ({
  children,
  gridCountOverride,
  noOfColumns,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      sx={{
        // 6px scrollbar width included in the calc
        "--calcWrapper": [
          "calc(calc(((100 / 12) * 10vw)) - 6px)",
          null,
          `calc(calc((var(--gridCount) - ${
            gridCountOverride ?? 2
          }) / 12 * min(100vw, 2400px)) - 0px)`,
          null,
        ],

        "--gutter": "0px",
        "--noOfColumns": noOfColumns ?? 8,
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
      }}
    >
      {children}
    </Box>
  );
};
