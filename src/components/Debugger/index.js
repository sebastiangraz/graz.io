/** @jsxImportSource theme-ui */

import React from "react";
import { useTransform } from "framer-motion";

export const Debugger = ({
  data,
  index,
  height,
  position,
  scrollY,
  updatePos,
}) => {
  const isActive = useTransform(scrollY, (v) => updatePos(v));
  const [isActiveState, setIsActiveState] = React.useState(false);

  React.useEffect(
    () =>
      isActive.onChange((e) => {
        setIsActiveState(e > -height(0) && e < 0);
      }),
    [isActive, height]
  );

  return (
    <p
      sx={{
        mt: "-10px",
        fontFamily: "monospace",
        fontSize: 3,
        position: "fixed",
        top: (index + 1) * 17,
        left: 0,
        zIndex: 10000,
        px: 3,
      }}
    >
      <span
        sx={{
          bg: data?.bg,
          px: 3,
          color: data?.color,
          width: 210,
          mr: 20,
          display: "inline-block",
        }}
      >
        {data?.slug} — active: {isActiveState ? "[TRUE]" : "false"}{" "}
      </span>
      height: {Math.trunc(height(0))} pos: {Math.trunc(position(0))}px
    </p>
  );
};
