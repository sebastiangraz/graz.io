/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";

export const GridParent = ({ children, ...rest }) => {
  return (
    <Box
      {...rest}
      sx={{
        width: "100%",
        gridColumn: `1 / span 12`,
        // 6px scrollbar width included in the calc
        "--calcWrapper": [
          `calc(calc((var(--gridCount)) / 12 * min(100vw, 2400px)) - 0px)`,
          null,
          `calc(calc((var(--gridCount)) / 12 * min(100vw, 2400px)) - 0px)`,
        ],
        "--gutter": "0",
        "--noOfColumns": "10",
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
        // gridGap: "var(--gutter)",
        margin: 0, //"var(--gutter) auto",
        // "& > *": {
        //   gridColumnStart: "2",
        // },
      }}
    >
      {children}
    </Box>
  );
};
