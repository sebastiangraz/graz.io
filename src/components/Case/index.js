/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  m,
  useSpring,
  useMotionValue,
  transform,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseBg = {
  borderBottom: "3px solid #000",
  width: "100%",
  height: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition } = useCaseWrapperContext();
  const { scrollY } = useViewportScroll();
  const responsiveOffset = useResponsiveValue([32, 60, 80, 120]);
  const Render = data.component;
  const height = (pos) => childHeight[pos ? index - pos : index] || [];
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const homeCase = childHeight[0] || 0;
  const offset = (responsiveOffset / index) * 0.4;
  const staggeredOffset = -childPosition.length * offset + index * offset;

  return (
    <>
      {index === 0 ? (
        // HOME
        <div
          ref={ref}
          sx={{
            position: "sticky",
            color: data?.color,
            backgroundColor: data?.bg,
            height: "100vh",
            width: "100%",
            left: 0,
            top: 0,
          }}
        >
          <Render />
        </div>
      ) : (
        // CASE
        <m.div
          sx={{
            willChange: "transform",
            marginLeft: "auto",
            position: "sticky",
            top: `calc(${homeCase}px - ${height(0)}px)`,
            color: data?.color,
            zIndex: index,
            width: `calc(100% - ${index * 6}%)`,
          }}
        >
          {console.log("render child :(")}

          <m.div
            sx={{
              ...caseBg,
              backgroundColor: data?.bg,
            }}
          >
            {/* <CaseHero bg={data?.bg}>{data?.name}</CaseHero> */}
          </m.div>

          <div ref={ref} sx={{ display: "block" }}>
            <Render />
          </div>
        </m.div>
      )}
    </>
  );
});
