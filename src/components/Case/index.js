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
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useCaseWrapperContext } from "../CaseWrapper";
import { debounce, clamp } from "lodash";

export const Case = React.forwardRef((props, ref) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childHeight, setChildHeight] = React.useState(0);
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
    console.log("Child is rendered");
  }, [ref]);

  const y = useSpring(
    useTransform(ratio, [0, 1], [browserHeight, -childHeight + browserHeight]),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  useScrollPosition(({ currPos }) => {
    ratio.set(
      transform(
        clamp(props.index, currPos.y - browserHeight + childPos, 0),
        [childHeight, 0],
        [0, 1]
      )
    );
  });

  return (
    <motion.div
      ref={ref}
      initial={props.index === 0 && { y: 0 }}
      style={{
        y: y,
        background: `linear-gradient(hsl(${props.index}00, 100%, 80%), #000)`,
        height: `${props.index + 2}00vh`,
        zIndex: props.index,
        width: `calc(100% - ${props.index * 20}px)`,
        position: "fixed",
        top: 0,
      }}
    >
      {props.data.title} – {ratio.current}
    </motion.div>
  );
});
