/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  transform,
} from "framer-motion";
import { jsx } from "theme-ui";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCaseWrapperContext, CaseHero } from "../";
import { debounce, clamp } from "lodash";

export const Case = React.forwardRef((props, ref) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childHeight, setChildHeight] = React.useState(0);
  const [inactive, setInActive] = React.useState(0);
  const childData = useCaseWrapperContext();

  React.useLayoutEffect(() => {
    const handleResize = debounce(
      () => setBrowserHeight(window.innerHeight),
      100
    );
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
      window.removeEventListener("load", handleResize, { passive: true });
    };
  });

  React.useLayoutEffect(() => {
    setChildHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  const staggeredOffset = -props.size * 80 + props.index * 80;

  const ratio = useMotionValue(0);
  const pixel = useMotionValue(0);

  useScrollPosition(({ currPos }) => {
    const childpos = childData?.heightArr || [];
    const pixelpos = childpos.map((v) => {
      return currPos.y + v - browserHeight;
    });
    const ratiopos = childpos.map((v) => {
      return transform(currPos.y + v - browserHeight, [childHeight, 0], [0, 1]);
    });
    pixel.set(pixelpos[props.index]);
    console.log(ratiopos);
  });

  const y = useSpring(
    useTransform(
      pixel,
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
        left: inactive ? 50 : 0,
      }}
      sx={{
        position: "fixed",
        willChange: "transform",
        color: props.data?.color,
        zIndex: props.index,
        width: `calc(100% - ${props.index * 80}px)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {console.log("render child :(")}
      <div
        sx={{
          background: props.data?.bg,
          width: "100%",
          height: `100%`,
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <CaseHero
          text={props.data?.name}
          sx={{
            display: "none",
            textTransform: "uppercase",
            fontWeight: 600,
            width: "100%",
            position: "absolute",
            bottom: "100%",
            letterSpacing: "-0.075em",
            fontSize: "8.5vw",
            color: props.data?.bg,
          }}
        />
      </div>
      <Render />
    </motion.div>
  );
});
