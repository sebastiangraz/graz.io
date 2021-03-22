/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { jsx } from "theme-ui";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;
  const caseRef = React.useRef(null);

  React.useImperativeHandle(ref, () => caseRef.current);
  const [caseHeight, setCaseHeight] = React.useState(0);

  React.useEffect(() => {
    setCaseHeight(caseRef.current.scrollHeight);
  }, []);

  const animationValue = useMotionValue(0);
  animationValue.set(props.caseScroll?.pixels);
  React.useEffect(
    () =>
      animationValue.onChange((latest) => {
        return latest;
      }),
    [animationValue]
  );

  const y = useSpring(animationValue, { damping: 20 });

  return (
    <motion.div
      ref={caseRef}
      style={{
        zIndex: -props.casedata.index,
        y: y,
        position: "fixed",
        width: `calc(100% - ${props.casedata.index * 40}px)`,
        background: `hsl(${props.casedata.index * 60}, 50%, 50%`,
      }}
    >
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
