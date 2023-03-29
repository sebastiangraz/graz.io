/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";

export const GridParent = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.ComponentProps<typeof Box>) => {
  return (
    <Box
      {...rest}
      sx={{
        width: "100%",
        gridColumn: `1 / span 12`,
        // 5px scrollbar width included in the calc
        "--calcWrapper": [
          `calc(var(--gridCount) / 12 * min(calc(100vw - 5px), 2400px))`,
          null,
          `calc(var(--gridCount) / 12 * min(calc(100vw - 5px), 2400px))`,
        ],
        // 5px scrollbar width EXCLUDED in the calc for mobile and touch devices
        "@media (hover: none) and (pointer: coarse)": {
          "--calcWrapper": [
            `calc(var(--gridCount) / 12 * min(100vw, 2400px))`,
            null,
            `calc(var(--gridCount) / 12 * min(100vw, 2400px))`,
          ],
        },
        "--gutter": "0px",
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
        gridGap: "var(--gutter)",
        margin: "var(--gutter) auto",
      }}
    >
      {children}
    </Box>
  );
};
