/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { jsx } from "theme-ui";
import { CaseHero } from "../CaseHero";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;

  const pixelDistance = useMotionValue(0);
  const ratioDistance = useMotionValue(0);

  pixelDistance.set(props.caseScroll?.customCase);
  ratioDistance.set(props.caseScroll?.ratio);

  const pixels = useSpring(pixelDistance, { damping: 10, mass: 0.1 });
  const ratio = useTransform(
    useSpring(ratioDistance, { damping: 90 }),
    [0, 1],
    [0, 100]
  );

  const isClickAble =
    props.caseScroll?.ratio >= 1 || props.caseScroll?.ratio <= 0;

  const staggeredOffset =
    -props.casedata.size * props.casedata.OFFSET +
    props.casedata.index * props.casedata.OFFSET;

  // React.useEffect(() => {
  //   return (
  //     props.casedata.key,
  //     staggeredOffset +
  //       props.casedata.docHeight +
  //       props.caseScroll?.heightArr[props.casedata.index] <
  //       props.casedata?.totalScroll &&
  //       window.history.pushState(null, null, `${props.casedata?.val?.slug}`)
  //   );
  // }, [props.casedata?.totalScroll]);

  return (
    <motion.div
      ref={ref}
      style={{ y: pixels }}
      onClick={() => {
        const scrollTo =
          staggeredOffset +
          props.casedata.docHeight +
          props.caseScroll?.heightArr[props.casedata.index];
        isClickAble && window.scrollTo(0, scrollTo + 1);
      }}
      sx={{
        zIndex: props.casedata.index,
        padding: 40,
        display: "block",
        borderRadius: 0,
        willChange: "transform",
        position: "fixed",
        left: 0,
        paddingBottom: "50vh",
        paddingTop: "50vh",
        color: props.casedata?.val?.color,
        marginTop: staggeredOffset,

        svg: {
          transition: "color ease 0.5s",
        },
        width: `calc(100% - ${props.casedata.OFFSET * 2}px)`,
        ...(isClickAble && {
          cursor: "pointer",
        }),
        "&:nth-of-type(odd)": {
          right: 0,
          left: "unset",
        },
        "&:last-of-type": {
          right: props.casedata.OFFSET,
          left: "unset",
        },
        "&:after": {
          content: `""`,
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "calc(100% - 300px)",
          background: props.casedata?.val?.bg,
          zIndex: -1,
        },
        "&:before": {
          content: `""`,
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          height: -(
            -props.casedata.size * props.casedata.OFFSET +
            props.casedata.index * props.casedata.OFFSET
          ),
          background: props.casedata?.val?.bg,
        },
        "&:last-child": {
          paddingBottom: props.casedata?.docHeight,
        },
      }}
    >
      {console.log("Render Case")}
      <CaseHero
        offset={props.casedata.OFFSET}
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

export default React.forwardRef(Case);
