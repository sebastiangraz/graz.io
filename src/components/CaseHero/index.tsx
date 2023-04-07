/** @jsxImportSource theme-ui */

import { Img } from "../../components";
import { Box } from "theme-ui";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const CaseHero = ({ children }: { children: React.ReactNode }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      variants={staggeredAnimation}
      initial="hidden"
      whileInView="visible"
      sx={{
        display: "grid",
        position: "relative",
        gridColumn: ["2/span 8", "2 / span 8"],
        width: "100%",
        aspectRatio: "1200 / 1214",
      }}
    >
      {children}
    </MotionBox>
  );
};

export const CaseHeroChild = ({
  src,
  childStyle,
}: {
  src: any;
  childStyle?: {};
}) => {
  const { width, height } = src;
  const [naturalDimensions, setNaturalDimensions] = useState({
    width: 0,
    height: 0,
  });
  const MotionBox = motion(Box);
  return (
    <MotionBox
      variants={childAnimation}
      sx={{
        ...childStyle,
        gridArea: "1 / 1",
        width: `calc(100% * ${width} / 1200)`,
        aspectRatio: `${width}/${height}`,
        height: "auto",
        position: "relative",
      }}
    >
      <Img
        src={src}
        fromFolder="capchase"
        sx={{
          height: "auto",
          overflow: "visible",
          //prettier-ignore
          objectViewBox: `inset(
              ${naturalDimensions.height / 2 - height}px 
              0 
              ${naturalDimensions.height / 2 - height}px 
              0)`,
        }}
        onLoad={(e) => {
          if (naturalDimensions.width) return;
          const img = e.target as HTMLImageElement;
          const { naturalWidth, naturalHeight } = img;
          setNaturalDimensions({ width: naturalWidth, height: naturalHeight });
        }}
      />
    </MotionBox>
  );
};

const staggeredAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};
