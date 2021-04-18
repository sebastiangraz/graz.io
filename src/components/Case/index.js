/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

export const Case = React.forwardRef(({ index, data }, ref) => {
  const [inview, setInview] = React.useState(0);
  let {
    childHeight,
    childpos,
    browserHeight,
    scrollProgress,
  } = useCaseWrapperContext();
  const zeroToOne = useMotionValue(0);
  childHeight = childHeight[index];
  let offset = useResponsiveValue([32, 60, 80, 120]);
  const staggeredOffset = -childpos.length * offset + index * offset;
  const distance = useMotionValue(0);
  const childposition = childpos[index] || 0 ? childpos[index] : 0;

  const y = useSpring(
    useTransform(scrollProgress, (v) => -(v - childpos[index] + childHeight)),
    {
      damping: 7,
      mass: 0.07,
    }
  );

  // React.useEffect(() => {
  //   scrollProgress.onChange((v) => {
  //     distance.set(v + browserHeight - childpos[index] + childHeight);
  //   });
  // });

  React.useEffect(() => {
    // zeroToOne.onChange((v) => {
    //   const sensitivity = 0.005;
    //   const isInview =
    //     v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
    //   setInview(isInview);
    // });
  });

  // offset = (offset / index) * 0.8;

  const handleClick = () => {
    !inview &&
      window.scrollTo(0, staggeredOffset + childpos[index] - childHeight + 1);
  };

  const Render = data.component;
  const isHome = data.hideCaseHero || false;
  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      initial={isHome ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      }}
      style={{
        height: childHeight,
        y: isHome ? 0 : y,
      }}
      sx={{
        top: 0,
        position: "fixed",
        willChange: "transform",
        color: data?.color,
        zIndex: index,
        right: 0,
        width: isHome
          ? "100%"
          : `calc(${100 - (childpos.length - 1) * 10}% + ${index * 10}%)`,
      }}
    >
      {console.log("render child :(")}

      <div
        sx={{
          opacity: 0.9,
          borderBottom: "10px solid",
          backgroundColor: data?.bg,
          width: "100%",
          transition: "height .3s cubic-bezier(0,.2,0,.96)",
          height: isHome ? `100%` : `calc(100% + ${-300}px)`,
          // height: isHome ? `100%` : `calc(100% + ${-staggeredOffset - 300}px)`,
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
            top: -299,
            display: isHome ? "none" : "block",
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
        sx={
          {
            // mt: isHome ? 0 : staggeredOffset + 300,
          }
        }
      >
        <Render />
      </div>
    </m.div>
  );
});
