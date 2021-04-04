/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { jsx } from "theme-ui";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCaseWrapperContext, CaseHero } from "../";
import { debounce } from "lodash";

export const Case = React.forwardRef((props, ref) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childHeight, setChildHeight] = React.useState(0);
  // const [inactive, setInActive] = React.useState(0);
  const childData = useCaseWrapperContext();

  React.useLayoutEffect(() => {
    const handleResize = debounce(
      () => setBrowserHeight(window.innerHeight),
      100
    );
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  });

  React.useLayoutEffect(() => {
    setChildHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  const staggeredOffset = -props.size * 120 + props.index * 120;

  const ratio = useMotionValue(0);

  useScrollPosition(({ currPos }) => {
    const childpos = childData?.heightArr || [];
    const pixelpos = childpos.map((v) => {
      return currPos.y + v - browserHeight;
    });
    // const ratiopos = childpos.map((v) => {
    //   return transform(currPos.y + v - browserHeight, [childHeight, 0], [0, 1]);
    // });
    ratio.set(pixelpos[props.index]);
  });

  const y = useSpring(
    useTransform(
      ratio,
      [childHeight, 0],
      [browserHeight, -childHeight + browserHeight]
    ),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  const Render = props.data.component;

  return (
    <motion.div
      ref={ref}
      style={{
        y: y,
        // opacity: inactive ? 1 : 1,
      }}
      sx={{
        top: 0,
        position: "fixed",
        willChange: "transform",
        color: props.data?.color,
        zIndex: props.index,
        width: `calc(100% - ${props.index * 120}px)`,
      }}
    >
      {console.log("render child :(")}
      <CaseHero
        text={props.data?.name}
        sx={{
          display: props.data.hideCaseHero || false ? "none" : "block",
          textTransform: "uppercase",
          fontWeight: 600,
          width: "100%",
          height: "max-content",
          letterSpacing: "-0.075em",
          fontSize: "8.5vw",
          color: props.data?.bg,
        }}
      />
      <div
        sx={{
          backgroundColor: props.data?.bg,
          width: "100%",
          height: `calc(100% + ${-staggeredOffset}px)`,
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <Render />
    </motion.div>
  );
});
