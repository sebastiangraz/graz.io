/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  m,
  useSpring,
  useMotionValue,
  transform,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const caseParent = {};
const caseBg = {};

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition, progress } = useCaseWrapperContext();

  const Render = data.component;

  // const height = (pos) => childHeight[pos ? index - pos : index] || [];
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const homeCase = childHeight[0] || 0;

  const responsiveOffset = useResponsiveValue([32, 60, 80, 120]);
  const offset = (responsiveOffset / index) * 0.4;
  const staggeredOffset = -childPosition.length * offset + index * offset;
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  const updatePos = (v, pos) =>
    transform(
      v - position(pos) + height + homeCase,
      [0, height],
      pos === 1 ? [100, 0] : [staggeredOffset, -height]
    );

  const y = useTransform(progress, (v) => updatePos(v, 0));

  const handleClick = () => {
    window.scrollTo(0, position(0) - height);
  };

  return (
    <>
      {index === 0 ? (
        <div
          onClick={handleClick}
          ref={ref}
          sx={{
            color: data?.color,
            backgroundColor: data?.bg,
            height: "100vh",
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <Render />
        </div>
      ) : (
        <m.div
          onClick={handleClick}
          style={{
            y: y,
            position: "fixed",
            willChange: "transform",
            right: 0,
            top: homeCase,
            color: data?.color,
            zIndex: index,
            width: 1700,
          }}
        >
          {console.log("render child :(")}

          <m.div
            // style={{ y: yNext }}
            style={{
              borderBottom: "3px solid #000",
              width: "100%",
              height: "100%",
              zIndex: -1,
              willChange: "transform",
              position: "absolute",
              bottom: 0,
              left: 0,
              backgroundColor: data?.bg,
            }}
          >
            {/* <CaseHero bg={data?.bg}>{data?.name}</CaseHero> */}
          </m.div>

          <div ref={ref} sx={{ display: "block" }}>
            <Render />
          </div>
        </m.div>
      )}
    </>
  );
});
