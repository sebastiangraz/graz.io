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
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [inview, setInview] = React.useState(0);
  let { childHeight, childpos, browserHeight } = useCaseWrapperContext();
  const zeroToOne = useMotionValue(0);
  childHeight = childHeight[index];
  let offset = useResponsiveValue([32, 60, 80, 120]);
  offset = (offset / index) * 0.8;

  const staggeredOffset = -childpos.length * offset + index * offset;
  const distance = useMotionValue(0);
  const distanceNext = useMotionValue(0);

  const y = useSpring(
    useTransform(
      distance,
      [0, childHeight],
      [browserHeight, -childHeight + browserHeight]
    ),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  const yNext = useSpring(distanceNext, {
    damping: 10,
    mass: 0.1,
  });

  React.useEffect(() => {
    scrollY.onChange((v) => {
      distance.set(v + browserHeight - childpos[index] + childHeight);
    });
    scrollY.onChange((v) => {
      distanceNext.set(-(v - childpos[index] + childHeight) / 30);
    });
  }, [
    browserHeight,
    childHeight,
    childpos,
    distance,
    distanceNext,
    index,
    scrollY,
  ]);

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
      initial={
        data.hideCaseHero || false ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
      }
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      }}
      style={{
        y: y,
      }}
      sx={{
        top: 0,
        position: "fixed",
        willChange: "transform",
        color: data?.color,
        zIndex: index,
        right: 0,
        height: childHeight,
        width:
          data.hideCaseHero || false
            ? "100%"
            : `calc(${100 - (childpos.length - 1) * 10}% + ${index * 10}%)`,
      }}
    >
      {console.log("render child :(")}

      <m.div
        style={{ y: yNext }}
        sx={{
          borderBottom: "10px solid",
          backgroundColor: data?.bg,
          width: "100%",
          transition: "height .3s cubic-bezier(0,.2,0,.96)",
          height:
            data.hideCaseHero || false
              ? `100%`
              : `calc(100% + ${-staggeredOffset - 300}px)`,
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
            display: data.hideCaseHero || false ? "none" : "block",
            textTransform: "uppercase",
            fontWeight: 600,
            width: "100%",
            height: 300,
            letterSpacing: "-0.075em",
            fontSize: "min(12vw, 140px)",
            color: data?.bg,
          }}
        />
      </m.div>
      <div
        sx={{
          mt: data.hideCaseHero || false ? 0 : staggeredOffset + 300,
        }}
      >
        <Render />
      </div>
    </m.div>
  );
});
