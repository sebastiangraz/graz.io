/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  transform,
  useSpring,
  useTransform,
  onChange,
  animate,
  useViewportScroll,
  useMotionValue,
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

  return (
    <motion.div
      ref={caseRef}
      style={{
        position: "fixed",
      }}
    >
      <motion.div
        style={{
          color: "#fff",
          width: "100vw",
          background: `#${props.casedata.index}${props.casedata.index}${props.casedata.index}5`,
        }}
      >
        <Render />
      </motion.div>
    </motion.div>
  );
};

export default React.forwardRef(Case);
