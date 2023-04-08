/** @jsxImportSource theme-ui */

import { Img } from "../../components";
import { Box, ImageProps } from "theme-ui";
import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";

export const CaseHero = ({
  heroHeight,
  children,
}: {
  heroHeight: number;
  children: React.ReactNode;
}) => {
  const registerHeroHeight = () => heroHeight;

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

export const CaseHeroChild = ({
  childStyle,
  children,
  registerHeroHeight = () => 0,
}: CaseHeroChildProps) => {
  const child = React.Children.only(children);

  const [naturalDimensions, setNaturalDimensions] = useState({
    width: 0,
    height: 0,
  });

  const heroHeight = registerHeroHeight();

  const isImage = children.props?.src ? true : false;

  let width = 0;
  let height = 0;

  if (isImage) {
    width = children.props.src.width || 0;
    height = children.props.src.height || 0;
  }

  const MotionBox = motion(Box);

  const updateDimensions = (width: number, height: number) => {
    if (naturalDimensions.width) return;
    setNaturalDimensions({ width, height });
  };

  const onLoad = async (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    const { naturalWidth, naturalHeight } = img;
    await new Promise(requestAnimationFrame);
    updateDimensions(naturalWidth, naturalHeight);
  };

  const childWithOnLoad = React.cloneElement(child, {
    ...child.props,
    onLoad,
  });

  return (
    <MotionBox
      variants={childAnimation}
      sx={{
        ...childStyle,
        gridArea: "1 / 1",
        width: `calc(100% * ${width} / 1200)`,
        aspectRatio: `${width}/${height}`,
        height: `calc(100% * ${height} / ${heroHeight})`,
        position: "relative",
        "& > img": {
          // objectViewBox: `inset(
          //   ${naturalDimensions.height / 2 - height}px
          //   0
          //   ${naturalDimensions.height / 2 - height}px
          //   0)`,
          position: "relative",
          width: `calc(100% * ${naturalDimensions.width} / ${width * 2})`,
          height: `calc(100% * ${naturalDimensions.height} / ${height * 2})`,
          left: `calc(50% - 100% * ${naturalDimensions.width} / ${
            width * 2
          } / 2)`,
          top: `calc(50% - 100% * ${naturalDimensions.height} / ${
            height * 2
          } / 2)`,
        },
      }}
    >
      {childWithOnLoad}
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
