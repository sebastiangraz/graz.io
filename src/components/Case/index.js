/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  m,
  useSpring,
  useMotionValue,
  useTransform,
  transform,
  useViewportScroll,
} from "framer-motion";
// import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childpos } = useCaseWrapperContext();
  let offset = useResponsiveValue([32, 60, 80, 120]);

  const { scrollY, scrollYProgress } = useViewportScroll();
  const [inview, setInview] = React.useState(0);
  const zeroToOne = useMotionValue(0);
  const staggeredOffset = -childpos.length * offset + index * offset;
  const distance = useMotionValue(scrollY.get());

  // offset = (offset / index) * 0.8;

  childHeight = childHeight[index];

  React.useEffect(() => {
    scrollY.onChange((v) => {
      distance.set(v - childpos[index] + childHeight);
    });
  }, [distance, childHeight, childpos, index, scrollY]);

  const y = useSpring(
    useTransform(distance, [0, childHeight], [0, -childHeight]),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  React.useEffect(() => {
    // zeroToOne.onChange((v) => {
    //   const sensitivity = 0.005;
    //   const isInview =
    //     v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
    //   setInview(isInview);
    // });
  });

  const handleClick = () => {
    !inview &&
      window.scrollTo(0, staggeredOffset + childpos[index] - childHeight + 1);
  };

  const Render = data.component;

  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      initial={{ opacity: 1, y: 0 }}
      style={{
        y: y,
      }}
      sx={{
        top: "1000px",
        position: "fixed",
        willChange: "transform",
        color: data?.color,
        zIndex: index,
        right: 0,
        // height: childHeight,
        width: `calc(${100 - (childpos.length - 1) * 10}% + ${index * 10}%)`,
      }}
    >
      {console.log("render child :(")}

      <div
        sx={{
          opacity: 0.8,
          borderBottom: "10px solid",
          backgroundColor: data?.bg,
          width: "100%",
          transition: "height .3s cubic-bezier(0,.2,0,.96)",
          height: `calc(100% + ${-staggeredOffset - 300}px)`,
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <CaseHero
          offset={offset}
          text={data?.name}
          style={{
            position: "absolute",
            top: -300,
            textTransform: "uppercase",
            fontWeight: 600,
            width: "100%",
            height: 300,
            letterSpacing: "-0.075em",
            fontSize: "min(12vw, 140px)",
            color: data?.bg,
          }}
        />
      </div>
      <div
        sx={{
          mt: staggeredOffset + 300,
        }}
      >
        <Render />
      </div>
    </m.div>
  );
});
