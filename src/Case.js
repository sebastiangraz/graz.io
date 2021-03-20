/** @jsxRuntime classic */
/** @jsx jsx */

import { motion } from "framer-motion";
import React from "react";
import { jsx } from "theme-ui";

export const Case = ({ casedata, scroll }) => {
  const Render = casedata.val.component;
  const y = { y: scroll };

  return (
    <motion.div
      style={y}
      sx={{
        width: "100%",
        p: 4,
        background: `hsl(${casedata.index * 50 + 200}, 80%, 75%)`,
      }}
    >
      <h1 sx={{ fontSize: 80, lineHeight: 1.1 }}>{casedata.val.name}</h1>
      <Render />
    </motion.div>
  );
};
