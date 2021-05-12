/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import { m, useSpring, transform, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {
  top: `100vh`,
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

function ScrollToTopOnMount(props) {
  const { position, height, datavar } = props;
  React.useEffect(() => {
    document.fonts.ready.then(function () {
      if (window.location.hash === `#${datavar}`) {
        window.scrollTo(0, position - height - 300);
      }
    });
  }, [datavar, height, position]);
  return null;
}

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition, windowHeight, scrollProgress } =
    useCaseWrapperContext();

  const responsiveOffset = useResponsiveValue([50, 75, 100, 150]);
  const Render = data.component;
  const height = (pos) => childHeight[pos ? index - pos : index] || [];
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const offset = (responsiveOffset / (index + 1)) * 1;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  // -----POSITION-----

  const updatePos = (v) => {
    const progress =
      v - position(0) + height(0) + windowHeight + staggeredOffset;
    return transform(
      progress,
      [0, height(0) + staggeredOffset],
      [0, -height(0) - staggeredOffset]
    );
  };

  const updatePosNext = (v) => {
    const progress = v - position(1) + height(0);
    return transform(
      progress,
      [-windowHeight, height(0) - windowHeight],
      [staggeredOffset, staggeredOffset]
    );
  };

  const y = useSpring(
    useTransform(scrollProgress, (v) => updatePos(v)),
    { damping: 7, mass: 0.06 }
  );

  const yNext = useSpring(
    useTransform(scrollProgress, (v) => updatePosNext(v)),
    { damping: 7, mass: 0.06 }
  );

  // -----CLICK TO SCROLLTO CASE-----
  const handleClick = () => {
    if (index !== 0) {
      window.history.replaceState(null, null, `#${data.slug}`);
    } else {
      window.history.replaceState(null, null, " ");
    }
    window.scrollTo(0, position(0) - height(0) - 100);
  };
  return (
    <>
      {index === 0 ? (
        // -----HOME-----
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
            top: `calc(100vh - ${0}px)`,
          }}
        >
          <Render />
        </m.div>
      ) : (
        // -----CASES-----
        <m.div
          id={`#${data.slug}`}
          ref={ref}
          onClick={handleClick}
          style={{
            y: y,
          }}
          sx={{
            ...caseParent,
            // opacity: 0.7,
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
              y: yNext,
              willChange: "transform",
            }}
            sx={{
              ...caseBg,
              backgroundColor: data?.bg,
            }}
          >
            <CaseHero bg={data?.bg}>{data?.name}</CaseHero>
          </m.div>

          <div sx={{ my: "100vh" }}>
            <Render />
          </div>
        </m.div>
      )}
      <ScrollToTopOnMount
        position={position(0)}
        height={height(0)}
        datavar={data.slug}
      />
    </>
  );
});
