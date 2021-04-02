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
  const { ...childData } = useCaseWrapperContext();
  const childPos = childData.heightArr ? childData.heightArr[props.index] : 0;
  const ratio = useMotionValue(0);

  React.useEffect(() => {
    const handleResize = debounce(
      () => setBrowserHeight(window.innerHeight),
      100
    );
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  });

  React.useEffect(() => {
    setChildHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  useScrollPosition(({ currPos }) => {
    ratio.set(
      transform(
        clamp(props.index, currPos.y - browserHeight + childPos, 0),
        [childHeight, 0],
        [0, 1]
      )
    );
  });

  const staggeredOffset = -props.size * 80 + props.index * 80;

  const y = useSpring(
    useTransform(ratio, [0, 1], [browserHeight, -childHeight + browserHeight]),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  ratio.onChange((v) => {
    setInActive(v <= 0 || v >= 1);
  });

  const handleClick = () => {
    return inactive && window.scrollTo(0, childPos - childHeight + 1);
  };

  const Render = props.data.component;
  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      style={{
        y: y,
      }}
      sx={{
        willChange: "transform",
        color: props.data?.color,
        zIndex: props.index,
        width: `calc(100% - ${props.index * 120}px)`,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        "&:first-child": {
          marginTop: "100vh",
          paddingBottom: "100vh",
        },
      }}
    >
      <CaseHero
        ratio={props.caseScroll?.ratio}
        text={props.data?.name}
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          width: "100%",
          letterSpacing: "-0.075em",
          fontSize: "8.5vw",
          color: props.data?.bg,
        }}
      />
      <div
        sx={{
          pt: 8,
          pb: "50vh",
          background: props.data?.bg,
          width: "100%",
        }}
      >
        <Render />
      </div>
    </motion.div>
  );
});
