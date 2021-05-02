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
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

export const Case = React.forwardRef(({ index, data }, ref) => {
  const { scrollY } = useViewportScroll();
  let { childHeight, childPosition } = useCaseWrapperContext();
  const height = childHeight[index] || [];
  const position = childPosition[index] || [];
  const homeCase = childHeight[0] || [];

  // const responsiveOffset = useResponsiveValue([32, 60, 80, 160]);
  // const offset = (responsiveOffset / index) * 0.75;
  // const staggeredOffset = -childPosition.length * offset + index * offset;

  // const skipFirstIndex = index === 0 || index === 1;
  // const firstCase = index === 0;
  // const scroll = useMotionValue(scrollProgress);
  // const nextScroll = useMotionValue(!skipFirstIndex && 50);

  const Render = data.component;
  console.log(homeCase);
  const updatePos = (v) =>
    transform(v - position + height + homeCase, [0, height], [0, -height]);

  const y = useSpring(
    useTransform(scrollY, (v) => updatePos(v)),
    {
      damping: 7,
      mass: 0.07,
    }
  );

  const handleClick = () => {
    window.scrollTo(0, position - height - 300);
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
        <>
          <m.div
            onClick={handleClick}
            style={{
              y: y,
            }}
            sx={{
              // mt: staggeredOffset,
              ...caseParent,
              color: data?.color,
              zIndex: index,
              width: `calc(100% - ${index * 6}%)`,
            }}
          >
            {console.log("render child :(")}

            <m.div
              // style={{ y: secondary, willChange: "transform" }}
              sx={{
                ...caseBg,
                height: "100%",
                backgroundColor: data?.bg,
              }}
            >
              <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
            </m.div>

            <div ref={ref} sx={{ display: "block" }}>
              <Render />
            </div>
          </m.div>
        </>
      )}
    </>
  );
});
