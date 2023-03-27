/** @jsxImportSource theme-ui */

import { motion } from "framer-motion";
import React, { useRef } from "react";

export const Slideshow = ({ children, gap }) => {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      sx={{
        overflow: "hidden",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        sx={{
          display: "inline-flex",
        }}
      >
        {React.Children.map(children || null, (child, i) => {
          return (
            <div
              sx={{
                height: "100%",
                pointerEvents: "none",
                marginRight: gap ? gap : ["8vw", "4vw"],
                width: ["80vw", "80vw", "60vw", "30vw"],
                "&:last-of-type": {
                  marginRight: "0",
                },
              }}
              key={i}
            >
              {child}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
