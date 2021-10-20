/** @jsxImportSource theme-ui */

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { m, motion, useAnimation } from "framer-motion";

export const ScrollFade = ({ children, style, delay }) => {
  const squareVariants = {
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: custom * 0.4,
      },
    }),
    hidden: { opacity: 0.5, scale: 1.01, transition: { staggerChildren: 1 } },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      sx={{ ...style, willChange: "transform" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <m.div custom={i * 1} variants={squareVariants}>
            {child}
          </m.div>
        );
      })}
    </motion.div>
  );
};
