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

  const pixels = useSpring(pixelDistance, { stiffness: 700, damping: 70 });
  const ratio = useSpring(ratioDistance, { stiffness: 700, damping: 70 });

  console.log(caseHeight);

  const trans = useTransform(ratio, [0, 1], [caseHeight, 0]);

  return (
    <motion.div
      ref={caseRef}
      style={{
        zIndex: -props.casedata.index,
        y: pixels,
        // opacity: ratio,
        position: "fixed",
        width: `calc(100% - ${props.casedata.index * 100}px)`,
        background: `hsl(${props.casedata.index * 60}, 50%, 50%`,
      }}
    >
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
