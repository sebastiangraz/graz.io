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
} from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

export const Case = React.forwardRef(({ index, data }, ref) => {
  const [inview, setInview] = React.useState(0);
  let { childHeight, childpos, browserHeight } = useCaseWrapperContext();
  const zeroToOne = useMotionValue(0);
  childHeight = childHeight[index];

  useScrollPosition(({ currPos }) => {
    const ratio = childpos.map((v, i) => {
      return transform(currPos.y + v - browserHeight, [childHeight, 0], [0, 1]);
    });
    zeroToOne.set(ratio[index]);
  });

  const y = useSpring(
    useTransform(
      zeroToOne,
      [0, 1],
      [browserHeight, -childHeight + browserHeight]
    ),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  React.useEffect(() => {
    zeroToOne.onChange((v) => {
      const sensitivity = 0.005;
      const isInview =
        v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
      setInview(isInview);
    });
  });

  let offset = useResponsiveValue([32, 60, 80, 120]);
  // offset = (offset / index) * 0.8;

  const staggeredOffset = -childpos.length * offset + index * offset;
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
        y: data.hideCaseHero || false ? 0 : y,
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

      <div
        sx={{
          boxShadow: "0 -10px 0 0 inset #000",
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
      </div>
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
