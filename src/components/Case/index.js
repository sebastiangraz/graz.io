/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

export const Case = React.forwardRef(({ index, data }, ref) => {
  // const [inview, setInview] = React.useState(0);
  let { childHeight, childpos, scrollProgress } = useCaseWrapperContext();
  // const zeroToOne = useMotionValue(0);
  childHeight = childHeight[index];
  let offset = useResponsiveValue([32, 60, 80, 120]);
  // offset = (offset / index) * 0.8;

  const staggeredOffset = -childpos.length * offset + index * offset;
  const variable = useMotionValue(0);

  React.useEffect(() => {
    scrollProgress.onChange((v) => {
      variable.set(v[index]);
    });
  }, [index, scrollProgress, variable]);

  const y = useSpring(variable, {
    damping: 7,
    mass: 0.07,
  });

  // zeroToOne.onChange((v) => {
  //   const sensitivity = 0.005;
  //   const isInview = v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
  //   setInview(isInview);
  // });

  const handleClick = () => {
    window.scrollTo(0, childpos[index] - childHeight + staggeredOffset);
  };

  const Render = data.component;

  const caseParent = {
    color: data?.color,
    zIndex: index,
    width: `calc(${100 - (childpos.length - 1) * 10}% + ${index * 10}%)`,
    top: "100vh",
    position: "fixed",
    willChange: "transform",
    right: 0,
  };
  const caseBg = {
    height: `calc(100% + ${-staggeredOffset - 300}px)`,
    backgroundColor: data?.bg,
    borderBottom: "10px solid",
    width: "100%",
    transition: "height .3s cubic-bezier(0,.2,0,.96)",
    zIndex: -1,
    position: "absolute",
    bottom: 0,
    left: 0,
  };

  const firstCase = index !== 0;

  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      style={{
        height: childHeight,
        y: firstCase && y,
      }}
      sx={firstCase ? caseParent : { position: "fixed" }}
    >
      {console.log("render child :(")}

      <div sx={firstCase && caseBg}>
        <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
      </div>
      <div sx={{ mt: firstCase && staggeredOffset + 300 }}>
        <Render />
      </div>
    </m.div>
  );
});
