import React from "react";
import { Box, BoxProps } from "theme-ui";
import style from "@/routes/articles/articles.module.css";
interface BackgroundProps extends BoxProps {
  variant?: "grid" | "dots" | "lines" | "none";
  children: React.ReactNode;
}

export const Background = ({ variant = "none", children, ...props }: BackgroundProps) => {
  // Define background patterns based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case "grid":
        return {
          backgroundImage:
            "linear-gradient(to right, rgba(127, 127, 127, 0.06) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(127, 127, 127, 0.06) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        };
      case "dots":
        return {
          backgroundImage: "radial-gradient(rgba(127, 127, 127, 0.12) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        };
      case "lines":
        return {
          backgroundImage: "linear-gradient(to bottom, rgba(127, 127, 127, 0.1) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        };
      default:
        return {};
    }
  };

  return (
    <Box
      className={`${style.prose}`}
      sx={{
        gridColumn: "inherit",
        // display: "grid",
        // gridTemplateColumns: "subgrid",
        // gridColumn: "2 / 14",
        // gap: "1.5rem 0",
        // padding: "1.5rem",

        margin: "4rem 0",
        // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.066) inset, 0 0 28px 0 rgba(0, 0, 0, 0.03) inset",
        padding: "4rem 0",
        backgroundColor: "background",
        ...getBackgroundStyle(),
        ...props.sx,
        // "& > *": {
        //   gridColumn: "4/10",
        // },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
