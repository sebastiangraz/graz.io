/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, transform, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {
  position: "fixed",
  willChange: "transform",
  right: 0,
};
const caseBg = {
  borderBottom: "5px solid ",
  width: "100%",
  height: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition, windowHeight, scrollProgress } =
    useCaseWrapperContext();

  const responsiveOffset = useResponsiveValue([50, 75, 100, 150]);
  const Render = data.component;
  const homeCase = childHeight[0] || 0;
  const offset = (responsiveOffset / (index + 1)) * 0.5;
  const staggeredOffset = -childPosition.length * offset + index * offset;

  const [scrollToHash, setScrollToHash] = React.useState(0);

  const height = childHeight[index] || [];
  const position = childPosition[index] || [];
  const updatePos = (v) => {
    const progress = v - position + height + windowHeight;
    console.log(
      offset,
      data.slug,
      // progress,
      // "height:",
      // height,
      // "position:",
      // position - height,
      // "staggeredoffset + 300:",
      // staggeredOffset + 300
      transform(
        progress,
        [0, height],
        [staggeredOffset + 300, -height]
        // pos === 1 ? [0, -0] : [0, -height(pos) + 0]
      )
    );
    return transform(
      progress,
      [0, height],
      [staggeredOffset + 300, -height]
      // pos === 1 ? [0, -0] : [0, -height(pos) + 0]
    );
  };

  const y = useSpring(
    useTransform(scrollProgress, (v) => updatePos(v)),
    { damping: 7, mass: 0.06 }
  );

  // const yNext = useSpring(
  //   useTransform(scrollProgress, (v) => updatePos(v, 1)),
  //   { damping: 7, mass: 0.06 }
  // );

  const handleClick = () => {
    if (index !== 0) {
      window.location.hash = data.slug;
    } else {
      window.history.replaceState(null, null, " ");
    }

    window.scrollTo(0, position - height - 300);
  };

  // React.useEffect(() => {
  //   if (window.location.hash.replace(/^#/, "") === data.slug) {
  //     setScrollToHash(position(0) - height(0) - 300);
  //   }
  //   document.fonts.ready.then(function () {
  //     window.scrollTo(0, scrollToHash);
  //   });
  // }, [data.slug, height, position, scrollToHash]);

  return (
    <>
      {index === 0 ? (
        //Home
        <m.div
          onClick={handleClick}
          ref={ref}
          style={{
            y: y,
          }}
          sx={{
            color: data?.color,
            backgroundColor: data?.bg,
            width: "100%",
            minHeight: "100%",
            position: "fixed",
            left: 0,
            top: `calc(100vh)`,
          }}
        >
          <Render />
        </m.div>
      ) : (
        <m.div
          id={`#${data.slug}`}
          ref={ref}
          onClick={handleClick}
          style={{
            y: y,
          }}
          sx={{
            ...caseParent,
            top: `calc(100vh)`,
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
            style={{
              // y: yNext,
              willChange: "transform",
            }}
            sx={{
              ...caseBg,
              // mt: -(staggeredOffset + 600),
              backgroundColor: data?.bg,
            }}
          >
            <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
          </m.div>

          <div
            className="render"
            sx={
              {
                // my: "100vh"
              }
            }
          >
            <Render />
          </div>
        </m.div>
      )}
    </>
  );
});
