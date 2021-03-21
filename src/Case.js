/** @jsxRuntime classic */
/** @jsx jsx */

import { motion } from "framer-motion";
import { jsx } from "theme-ui";

export const Case = ({ casedata, caseScroll }) => {
  const Render = casedata.val.component;

  return (
    <motion.div
      sx={{
        width: "100%",
        // p: 4,
        background: `hsl(${casedata.index * 50 + 200}, 80%, 75%)`,
      }}
    >
      {/* <h1 sx={{ fontSize: 80, lineHeight: 1.1 }}>
        {casedata.val.name} {caseScroll && caseScroll.toFixed(2)}
      </h1> */}
      <Render />
    </motion.div>
  );
};
