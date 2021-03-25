/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  transform,
} from "framer-motion";
import { jsx } from "theme-ui";
import { CaseHero } from "../CaseHero";

const Case = (props, ref) => {
  const Render = props.casedata.val.component;
  const caseRef = React.useRef(null);

  React.useImperativeHandle(ref, () => caseRef.current);
  const [caseHeight, setCaseHeight] = React.useState(0);

  React.useEffect(() => {
    setCaseHeight(caseRef.current.getBoundingClientRect().height);
  }, []);

  const pixelDistance = useMotionValue(0);

  pixelDistance.set(props.caseScroll?.customCase);
  React.useEffect(() => {
    pixelDistance.onChange((latest) => {
      return latest;
    });
  }, [pixelDistance]);

  const springOption = {
    damping: 10,
    mass: 0.1,
  };

  const pixels = useSpring(pixelDistance, springOption);

  const ratioDistance = useMotionValue(0);
  ratioDistance.set(props.caseScroll?.ratio);

  React.useEffect(() => {
    ratioDistance.onChange((latest) => {
      transform(latest, [0, 1], [0, 33]);
    });
  }, [ratioDistance]);

  return (
    <motion.div
      ref={caseRef}
      style={{ y: pixels }}
      sx={{
        zIndex: props.casedata.index,
        padding: props.casedata.OFFSET,
        display: "block",
        borderRadius: 0,
        willChange: "transform",
        position: "fixed",
        left: 0,
        paddingBottom: "50vh",
        paddingTop: "50vh",
        color: props.casedata?.val?.color,
        marginTop:
          -props.casedata.size * props.casedata.OFFSET +
          props.casedata.index * props.casedata.OFFSET,
        width: `calc(100% - ${props.casedata.OFFSET * 2}px)`,
        "&:nth-of-type(odd)": {
          right: 0,
          left: "unset",
        },
        "&:first-of-type": {
          right: props.casedata.OFFSET,
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
