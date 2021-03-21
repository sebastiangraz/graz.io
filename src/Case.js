/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, transform } from "framer-motion";
import { jsx } from "theme-ui";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;
  // console.log(caseScroll);
  return (
    <motion.div ref={ref} sx={{ width: "100%" }}>
      <h1 sx={{ fontSize: 80, lineHeight: 1.1 }}>
        {props.casedata.val.name}{" "}
        {props.caseScroll && props.caseScroll.toFixed(2)}
      </h1>
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
