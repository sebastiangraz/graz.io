/** @jsxImportSource theme-ui */

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { m, motion, useAnimation } from "framer-motion";

export const ScrollFade = ({
  children,
  style,
  delay,
  effect,
  duration,
  ...rest
}) => {
  const delayVal = delay ? delay : 0.3;
  const effectVal = effect ? effect : [{ opacity: 0 }, { opacity: 1 }];
  const durationVal = duration ? duration : 0.6;

  const squareVariants = {
    hidden: { ...effectVal[0] },
    visible: (custom) => ({
      ...effectVal[1],
      transition: {
        duration: durationVal,
        delay: delayVal + custom * 0.1,
      },
    }),
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
      {...rest}
      sx={{ ...style, willChange: "transform" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <m.div key={i} custom={i} variants={squareVariants}>
            {child}
          </m.div>
        );
      })}
    </motion.div>
  );
};
