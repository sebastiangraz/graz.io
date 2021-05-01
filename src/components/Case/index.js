/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  m,
  useSpring,
  useViewportScroll,
  useTransform,
  transform,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const clamp = ({ value, min, max }) => Math.max(Math.min(value, max), min);

export const Case = React.forwardRef(({ index, data }, ref) => {
  // const [inview, setInview] = React.useState(0);
  const { scrollY } = useViewportScroll();
  let { childHeight, childpos, browserHeight } = useCaseWrapperContext();
  // const zeroToOne = useMotionValue(0);
  childHeight = childHeight[index];
  let offset = useResponsiveValue([32, 60, 80, 120]);
  // offset = (offset / index) * 0.8;

  const staggeredOffset = -childpos.length * offset + index * offset;
  const skipFirstIndex = index === 0 || index === 1;
  const firstCase = index === 0;
  const scroll = (v) => {
    //clamp our corresponding scroll distances
    return clamp({
      value: -(v - childpos[index] + childHeight),
      min: -childHeight - 300 - staggeredOffset,
      max: 0,
    });
  };

  const y = useSpring(
    useTransform(scrollY, (v) => scroll(v)),
    {
      damping: 7,
      mass: 0.07,
    }
  );

  // zeroToOne.onChange((v) => {
  //   const sensitivity = 0.005;
  //   const isInview = v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
  //   setInview(isInview);
  // });

  const handleClick = () => {
    //Checks if its first item in list and apply browserHeight to comp
    index === 0
      ? window.scrollTo(0, browserHeight + childpos[index] - childHeight)
      : window.scrollTo(0, childpos[index] - childHeight);
  };

  const Render = data.component;

  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      }}
      style={{
        y,
      }}
      sx={{
        color: data?.color,
        zIndex: index,
        width: `calc(${100 - (childpos.length - 1) * 10}% + ${index * 10}%)`,
        top: `calc(100vh + ${300}px)`,
        mt: staggeredOffset,
        position: "fixed",
        willChange: "transform",
        right: 0,
        // Breaks first item
        // "&:first-of-type": {
        //   top: "100vh",
        // },
      }}
    >
      {console.log("render child :(")}

      <div
        sx={{
          opacity: 0.4,
          height: `calc(100%)`,
          backgroundColor: data?.bg,
          borderBottom: "10px solid #f00",
          width: "100%",
          transition: "height .3s cubic-bezier(0,.2,0,.96)",
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
      </div>
      <div sx={{ display: "grid" }}>
        <Render />
      </div>
    </m.div>
  );
});
