/** @jsxImportSource theme-ui */

import { Box } from "theme-ui";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

export const CaseHero = ({ heroHeight, children }: { heroHeight: number; children: React.ReactNode }) => {
  const registerHeroHeight = () => heroHeight || 0;

  const MotionBox = motion(Box);
  return (
    <MotionBox
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      sx={{
        display: "grid",
        position: "relative",
        gridColumn: ["2/span 8", "2 / span 8"],
        width: ["130%", "100%"],
        left: ["-15%", "0"],
        aspectRatio: `1200 / ${heroHeight}`,
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            registerHeroHeight,
          } as { registerHeroHeight: () => number });
        }
        return child;
      })}
    </MotionBox>
  );
};

interface CaseHeroChildProps {
  childStyle?: {};
  children: ReactElement;
  registerHeroHeight?: () => number;
}

export const CaseHeroChild = ({ childStyle, children, registerHeroHeight = () => 0 }: CaseHeroChildProps) => {
  const heroHeight = registerHeroHeight();

  const isImage = children.props?.src ? true : false;

  let width = 0;
  let height = 0;

  if (isImage) {
    width = children.props.src.width || 0;
    height = children.props.src.height || 0;
  }

  const MotionBox = motion(Box);

  return (
    <MotionBox
      variants={staggerChildren}
      sx={{
        gridArea: "1 / 1",
        width: `calc(100% * ${width} / 1200)`,
        aspectRatio: `${width}/${height}`,
        height: `calc(100% * ${height} / ${heroHeight})`,
        position: "relative",
        ...childStyle,
      }}
    >
      {children}
    </MotionBox>
  );
};

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};
