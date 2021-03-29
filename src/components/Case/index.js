/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { jsx } from "theme-ui";
import { CaseHero } from "../CaseHero";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;

  const pixelDistance = useMotionValue(0);
  const ratioDistance = useMotionValue(0);

  pixelDistance.set(props.caseScroll?.customCase);
  ratioDistance.set(props.caseScroll?.ratio);

  const pixels = useSpring(pixelDistance, { damping: 10, mass: 0.1 });
  // const ratio = useTransform(
  //   useSpring(ratioDistance, { damping: 90 }),
  //   [0, 1],
  //   [0, 100]
  // );

  const isClickAble =
    props.caseScroll?.ratio >= 1 || props.caseScroll?.ratio <= 0;

  const staggeredOffset =
    -props.casedata.size * props.casedata.offset +
    props.casedata.index * props.casedata.offset;

  const scrollTo =
    staggeredOffset +
    props.casedata.docHeight +
    props.caseScroll?.heightArr[props.casedata.index];

  const handleClick = () => {
    return isClickAble && window.scrollTo(0, scrollTo + 1);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: pixels }}
      onClick={handleClick}
      sx={{
        zIndex: props.casedata.index,
        padding: props.casedata.offset / 2,
        display: "block",
        borderRadius: 0,
        willChange: "transform",
        position: "fixed",
        left: 0,
        paddingTop: "50vh",
        color: props.casedata?.val?.color,
        top: `${staggeredOffset}px`,
        svg: {
          transition: "color ease 0.5s",
        },
        width: `calc(100% - ${props.casedata.offset * 2}px)`,
        ...(isClickAble && {
          cursor: "pointer",
        }),
        "&:nth-of-type(odd)": {
          right: 0,
          left: "unset",
        },
        "&:last-of-type": {
          right: props.casedata.offset,
          left: "unset",
        },
        "&:after": {
          content: `""`,
          position: "absolute",
          left: 0,
          top: 0,
          transformOrigin: "bottom",
          transform: "translateY(300px)",
          width: "100%",
          height: `calc(100% - ${staggeredOffset}px)`,
          background: props.casedata?.val?.bg,
          zIndex: -1,
        },
        "&:last-child": {
          paddingBottom: props.casedata?.docHeight,
        },
      }}
    >
      {console.log("Render Case")}
      <CaseHero
        offset={props.casedata.offset}
        ratio={props.caseScroll?.ratio}
        text={props.casedata?.val?.name}
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          width: "100%",
          letterSpacing: "-0.075em",
          fontSize: "8.5vw",
          left: 0,
          color: props.casedata?.val?.bg,
          top: "301px",
          position: "absolute",
          transform: "translateY(-300px)",
        }}
      />

      <Render />
    </motion.div>
  );
};

export default React.memo(React.forwardRef(Case));
