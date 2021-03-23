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

const Case = (props, ref) => {
  const Render = props.casedata.val.component;
  const caseRef = React.useRef(null);

  React.useImperativeHandle(ref, () => caseRef.current);
  const [caseHeight, setCaseHeight] = React.useState(0);

  React.useEffect(() => {
    setCaseHeight(caseRef.current.scrollHeight);
  }, []);

  const pixelDistance = useMotionValue(0);
  const ratioDistance = useMotionValue(0);
  pixelDistance.set(props.caseScroll?.pixels);
  ratioDistance.set(props.caseScroll?.ratio);
  React.useEffect(() => {
    pixelDistance.onChange((latest) => {
      return latest;
    });
    ratioDistance.onChange((latest) => {
      return latest;
    });
  }, [pixelDistance, ratioDistance]);

  const springOption = {
    type: "spring",
    bounce: 0.25,
  };
  const pixels = useSpring(pixelDistance, { springOption });
  const ratio = useSpring(ratioDistance, { springOption });

  const trans = useTransform(
    pixels,
    [0, -caseHeight],
    [0, -caseHeight + (1 + props.casedata.index) * 20]
  );

  return (
    <motion.div
      ref={caseRef}
      style={{
        zIndex: -props.casedata.index,
        y: trans,
        padding: 90,
        overflow: "hidden",
        position: "fixed",
        width: `calc(100% - ${props.casedata.index * 60}px)`,
        background: props.casedata?.val?.bg,
        color: props.casedata?.val?.color,
      }}
    >
      <motion.h1
        style={{
          opacity: ratio * 1.3,
          fontSize: 180,
          letterSpacing: -9,
          textTransform: "uppercase",
          position: "absolute",
        }}
      >
        {props.casedata?.val?.name}
      </motion.h1>
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
