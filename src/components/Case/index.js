/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, useMotionValue, transform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {
  top: `calc(100vh)`,
  position: "fixed",
  willChange: "transform",
  right: 0,
};
const caseBg = {
  opacity: 0.75,
  borderBottom: "3px solid #000",
  width: "100%",
  transition: "height .3s cubic-bezier(0,.2,0,.96)",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childpos, scrollProgress } = useCaseWrapperContext();
  childHeight = childHeight[index];
  let offset = useResponsiveValue([32, 60, 80, 160]);
  offset = (offset / index) * 0.5;
  const skipFirstIndex = index === 0 || index === 1;
  const firstCase = index === 0;
  const scroll = useMotionValue(0);
  const inview = useMotionValue(0);
  const staggeredOffset = -childpos.length * offset + index * offset;
  const Render = data.component;

  React.useEffect(() => {
    scrollProgress.onChange((v) => {
      scroll.set(
        transform(v[index], [0, 1], [staggeredOffset + 250, -childHeight])
      );
      inview.set(transform(v[index - 1], [0, 1], [50, 0]));
    });
  }, [childHeight, index, inview, scroll, scrollProgress, staggeredOffset]);

  const y = useSpring(scroll, {
    damping: 7,
    mass: 0.07,
  });

  const secondary = useSpring(inview, {
    damping: 7,
    mass: 0.07,
  });

  // zeroToOne.onChange((v) => {
  //   const sensitivity = 0.005;
  //   const isInview = v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
  //   setInview(isInview);
  // });

  const handleClick = () => {
    window.scrollTo(0, childpos[index] - childHeight);
  };

  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      style={{
        height: childHeight,
        y: firstCase ? 0 : y,
      }}
      sx={
        firstCase
          ? { position: "fixed", width: "100%" }
          : {
              ...caseParent,
              color: data?.color,
              zIndex: index,
              width: `calc(100% - ${index * 6}%)`,
            }
      }
    >
      {console.log("render child :(")}

      <m.div
        style={{ y: secondary, willChange: "transform" }}
        sx={
          firstCase
            ? null
            : {
                ...caseBg,
                height: "100%",
                backgroundColor: data?.bg,
              }
        }
      >
        <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
      </m.div>
      <div>
        <Render />
      </div>
    </m.div>
  );
});
