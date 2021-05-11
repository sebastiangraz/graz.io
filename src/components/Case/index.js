/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  m,
  useSpring,
  transform,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {
  top: `100vh`,
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
  let { childHeight, childPosition } = useCaseWrapperContext();
  const { scrollY } = useViewportScroll();
  const responsiveOffset = useResponsiveValue([50, 75, 100, 150]);
  const Render = data.component;
  const height = (pos) => childHeight[pos ? index - pos : index] || [];
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const homeCase = childHeight[0] || 0;
  const offset = (responsiveOffset / index) * 1;
  const staggeredOffset = -childPosition.length * offset + index * offset;

  const updatePos = (v, pos) => {
    const progress = v - position(pos) + height(pos) + homeCase;
    return transform(
      progress,
      [0, height(pos)],
      pos === 1 ? [staggeredOffset + 300, 0] : [0, -height(pos)]
    );
  };

  const y = useSpring(
    useTransform(scrollY, (v) => updatePos(v, 0)),
    { damping: 7, mass: 0.06 }
  );

  const yNext = useSpring(
    useTransform(scrollY, (v) => updatePos(v, 1)),
    { damping: 7, mass: 0.06 }
  );

  const handleClick = () => {
    window.scrollTo(0, position(0) - height(0) - 300);
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
          ref={ref}
          onClick={handleClick}
          // animate={{ opacity: isComplete ? 1 : 0.1 }}
          transition={{ duration: 0 }}
          style={{
            // opacity: inView,
            y: y,
          }}
          sx={{
            ...caseParent,
            color: data?.color,
            zIndex: index,
            width: ["100%", `calc(min(100%, 1495px) - ${index * 2.5}%)`],
            "&:nth-of-type(odd)": {
              left: 0,
            },
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

          <div sx={{ my: "100vh" }}>
            <Render />
          </div>
        </m.div>
      )}
    </>
  );
});
