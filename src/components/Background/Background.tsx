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
            "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: ["1rlh 1rlh"],
          backgroundPosition: ["calc(0% - 0.5rlh) 0"],
          backgroundAttachment: "scroll",
          boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.04) inset, 0 -1px 0 0 var(--theme-ui-colors-background) inset",
        };
      case "dots":
        return {
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          backgroundPosition: "center 0",
        };
      case "lines":
        return {
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
          backgroundSize: "1rlh 1rlh, 2rlh 2rlh",
          backgroundPosition: "0 0",
          boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.04) inset, 0 -1px 0 0 var(--theme-ui-colors-background) inset",
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

        margin: "4rlh 0",
        // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.066) inset, 0 0 28px 0 rgba(0, 0, 0, 0.03) inset",
        padding: "4rlh 0",
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
