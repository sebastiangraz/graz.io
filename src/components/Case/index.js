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

const caseParent = {
  top: `calc(100vh + ${0}px)`,
  position: "fixed",
  willChange: "transform",
  right: 0,
};
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
  const { scrollY } = useViewportScroll();
  let { childHeight, childPosition } = useCaseWrapperContext();
  const height = (pos) => childHeight[pos ? index - pos : index] || [];
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const homeCase = childHeight[0] || 0;

  const responsiveOffset = useResponsiveValue([32, 60, 80, 120]);
  const offset = (responsiveOffset / index) * 0.4;
  const staggeredOffset = -childPosition.length * offset + index * offset;

  // const skipFirstIndex = index === 0 || index === 1;
  // const firstCase = index === 0;
  // const scroll = useMotionValue(scrollProgress);
  // const nextScroll = useMotionValue(!skipFirstIndex && 50);

  const Render = data.component;

  const updatePos = (v, pos) =>
    transform(
      v - position(pos) + height(pos) + homeCase,
      [0, height(pos)],
      pos === 1 ? [100, 0] : [staggeredOffset + 200, -height(pos)]
    );

  const y = useSpring(
    useTransform(scrollY, (v) => updatePos(v, 0)),
    { damping: 7, mass: 0.07 }
  );

  const yNext = useSpring(
    useTransform(scrollY, (v) => updatePos(v, 1)),
    { damping: 7, mass: 0.07 }
  );

  const handleClick = () => {
    window.scrollTo(0, position() - height());
  };

  return (
    <>
      {index === 0 ? (
        <div
          onClick={handleClick}
          ref={ref}
          sx={{
            color: data?.color,
            backgroundColor: data?.bg,
            height: "100vh",
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <Render />
        </div>
      ) : (
        <m.div
          onClick={handleClick}
          style={{
            y: y,
          }}
          sx={{
            ...caseParent,
            color: data?.color,
            zIndex: index,
            width: `calc(100% - ${index * 6}%)`,
          }}
        >
          {console.log("render child :(")}

          <m.div
            style={{ y: yNext, willChange: "transform" }}
            sx={{
              ...caseBg,
              backgroundColor: data?.bg,
            }}
          >
            <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
          </m.div>

          <div ref={ref} sx={{ display: "block" }}>
            <Render />
          </div>
        </m.div>
      )}
    </>
  );
});
