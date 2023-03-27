/** @jsxImportSource theme-ui */

import React from "react";
import { useTransform } from "framer-motion";

export const Debugger = ({
  index,
  height,
  position,
  scrollY,
  updatePos,
  slug,
}: {
  index?: number;
  height?: number;
  position?: number;
  scrollY?: any;
  updatePos?: number;
  slug?: string;
}) => {
  // const isActive = useTransform(scrollY, (v) => updatePos(v));
  // const [isActiveState, setIsActiveState] = React.useState(false);

  // React.useEffect(
  //   () =>
  //     isActive.onChange((e) => {
  //       setIsActiveState(e > -height(0) && e < 0);
  //     }),
  //   [isActive, height]
  // );

  return (
    <p
      sx={{
        mt: "-10px",
        fontFamily: "monospace",
        fontSize: 3,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        px: 3,
      }}
    >
      <span
        sx={{
          px: 3,
          width: 210,
          mr: 20,
          display: "inline-block",
        }}
      >
        {slug}
        {/* {slug} — active: {isActiveState ? "[TRUE]" : "false"}{" "} */}
      </span>
      height: {Math.trunc(height)} pos: {Math.trunc(position)}px
    </p>
  );
};
