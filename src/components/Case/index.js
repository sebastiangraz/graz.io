/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, useMotionValue, transform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {
  top: `calc(100vh + ${250}px)`,
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
  let { childHeight, childPosition, scrollProgress } = useCaseWrapperContext();
  childHeight = childHeight[index];
  const responsiveOffset = useResponsiveValue([32, 60, 80, 160]);
  const offset = (responsiveOffset / index) * 0.75;
  const staggeredOffset = -childPosition.length * offset + index * offset;

  const skipFirstIndex = index === 0 || index === 1;
  const firstCase = index === 0;
  const scroll = useMotionValue(scrollProgress);
  const nextScroll = useMotionValue(!skipFirstIndex && 50);

  const Render = data.component;

  // console.log(scrollProgress);

  // React.useEffect(() => {
  //   scrollProgress.onChange((v) => {
  //     scroll.set(
  //       transform(v[index], [0, 1], [0, -childHeight - staggeredOffset - 250])
  //     );
  //     nextScroll.set(transform(v[index - 1], [0, 1], [50, 0])); //[50, 0]
  //   });
  // }, [childHeight, index, nextScroll, scroll, scrollProgress, staggeredOffset]);

  const y = useSpring(scrollProgress, {
    damping: 7,
    mass: 0.07,
  });

  // const secondary = useSpring(scrollProgress, {
  //   damping: 7,
  //   mass: 0.07,
  // });

  // zeroToOne.onChange((v) => {
  //   const sensitivity = 0.005;
  //   const isInview = v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
  //   setInview(isInview);
  // });

  const handleClick = () => {
    window.scrollTo(0, childPosition[index] - childHeight);
  };

  return (
    <m.div
      ref={ref}
      onClick={handleClick}
      style={{
        y: firstCase ? 0 : y,
      }}
      sx={
        firstCase
          ? { position: "fixed", width: "100%" }
          : {
              // mt: staggeredOffset,
              ...caseParent,
              color: data?.color,
              zIndex: index,
              width: `calc(100% - ${index * 6}%)`,
            }
      }
    >
      {console.log("render child :(")}

      <m.div
        // style={{ y: secondary, willChange: "transform" }}
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

      <div sx={{ display: "block" }}>
        <Render />
      </div>
    </m.div>
  );
});
