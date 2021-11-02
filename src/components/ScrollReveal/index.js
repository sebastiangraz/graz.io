/** @jsxImportSource theme-ui */

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { m, motion, useAnimation } from "framer-motion";
export const ScrollReveal = ({
  children,
  delay,
  effect,
  parentEffect,
  duration,
  parentDuration,
  ignoreParentFade,
  repeat,
  repeatParent,
  repeatTypeLoop,
  ...rest
}) => {
  const delayVal = delay ? delay : 0.05;
  const effectVal = effect ? effect : [{ opacity: 0 }, { opacity: 1 }];
  const parentEffectVal = parentEffect
    ? parentEffect
    : [{ opacity: 0 }, { opacity: 1 }];
  const durationVal = duration ? duration : 1;

  const parentVariant = {
    hidden: parentEffectVal[0],
    visible: {
      ...parentEffectVal[1],
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: parentDuration ? parentDuration : durationVal,
        delay: delayVal,
        ...(repeatParent && {
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
        }),
      },
    },
  };

  const squareVariants = {
    hidden: effectVal[0],
    visible: (custom) => ({
      ...effectVal[1],
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: durationVal,
        delay: delayVal + custom * 0.1,
        ...(repeat && {
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: repeatTypeLoop ? "loop" : "reverse",
        }),
      },
    }),
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      {...rest}
      sx={{ willChange: "transform" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={!ignoreParentFade && parentVariant}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <m.div
            style={{ originX: 0.5, originY: 0.5 }}
            sx={{ display: "grid" }}
            key={i}
            custom={i}
            variants={squareVariants}
          >
            {child}
          </m.div>
        );
      })}
    </motion.div>
  );
};
