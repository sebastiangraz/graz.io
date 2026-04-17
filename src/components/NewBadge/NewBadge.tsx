/** @jsxImportSource theme-ui */

import { ThemeUICSSObject } from "theme-ui";

type NewBadgeProps = {
  sx?: ThemeUICSSObject;
};

export const NewBadge = ({ sx: sxProp }: NewBadgeProps) => (
  <span
    sx={{
      position: "relative",
      fontSize: "0.5rlh",
      letterSpacing: "0.025em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "color-mix(in srgb, currentColor, transparent 40%)",
      borderRadius: "0.25em",
      textBox: "trim-both cap alphabetic",
      my: "0.4em",
      bottom: "0.025rlh",
      lineHeight: 1,
      flexShrink: 0,
      userSelect: "none",
      ...sxProp,
    }}
  >
    New
  </span>
);
