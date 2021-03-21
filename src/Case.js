/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, transform } from "framer-motion";
import { jsx } from "theme-ui";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        background: `hsl(${props.index * 30}, 50, 50)`,
        position: "absolute",
        x: transform(props.caseScroll, [0, 1], ["-100%", "0%"]),
      }}
    >
      <h1 sx={{ fontSize: 80, lineHeight: 1.1 }}>
        {props.casedata.val.name}{" "}
        {props.caseScroll && props.caseScroll.toFixed(2)}
      </h1>
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
