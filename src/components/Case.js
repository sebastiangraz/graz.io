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
import { round } from "../assets";

const CaseSvg = ({ textPath, ...rest }) => {
  return (
    <svg {...rest} height="300" preserveAspectRatio="xMinYMin meet">
      <defs>
        <mask id="sample" maskUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill="white"></rect>
          <text y={`${140}`} transform="translate(96, 96)">
            Loupe
          </text>
        </mask>
      </defs>
      <rect
        fill-rule="evenodd"
        mask="url(#sample)"
        width="100%"
        height="100%"
        fill="currentColor"
      ></rect>
      <script type="text/javascript"></script>
    </svg>
  );
};

const Case = (props, ref) => {
  const Render = props.casedata.val.component;
  const caseRef = React.useRef(null);

  React.useImperativeHandle(ref, () => caseRef.current);
  const [caseHeight, setCaseHeight] = React.useState(0);

  React.useEffect(() => {
    setCaseHeight(caseRef.current.getBoundingClientRect().height);
  }, []);

  const pixelDistance = useMotionValue(0);
  const ratioDistance = useMotionValue(0);
  pixelDistance.set(props.caseScroll?.customCase);
  ratioDistance.set(props.caseScroll?.ratio);
  React.useEffect(() => {
    pixelDistance.onChange((latest) => {
      return latest;
    });
    ratioDistance.onChange((latest) => {
      return latest;
    });
  }, [pixelDistance, ratioDistance, caseHeight]);

  const springOption = {
    damping: 10,
    mass: 0.1,
  };
  const pixels = useSpring(pixelDistance, springOption);
  const ratio = useSpring(ratioDistance, springOption);

  const trans = useTransform(
    pixels,
    [0, -caseHeight],
    [0, -caseHeight + (1 + props.casedata.index) * 20]
  );

  const OFFSET = 96;

  return (
    <motion.div
      ref={caseRef}
      style={{ y: pixels }}
      sx={{
        zIndex: props.casedata.index,
        padding: OFFSET,
        display: "block",
        borderRadius: 0,
        willChange: "transform",
        position: "fixed",
        left: 0,
        paddingBottom: "50vh",
        paddingTop: "50vh",
        color: props.casedata?.val?.color,
        marginTop:
          -props.casedata.size * OFFSET + props.casedata.index * OFFSET,
        width: `calc(100% - ${props.casedata.index * OFFSET}px)`,
        "&::after": {
          content: `""`,
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "calc(100% - 300px)",
          background: props.casedata?.val?.bg,
          zIndex: -1,
        },
        "&::before": {
          content: `""`,
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          height: -(
            -props.casedata.size * OFFSET +
            props.casedata.index * OFFSET
          ),
          background: props.casedata?.val?.bg,
        },
        "&:last-child": {
          paddingBottom: props.casedata?.docHeight,
        },
      }}
    >
      <CaseSvg
        sx={{
          textTransform: "uppercase",
          fontWeight: 800,
          width: "100%",
          fontSize: 180,
          left: 0,
          color: props.casedata?.val?.bg,
          top: "300px",
          position: "absolute",
          transform: "translateY(-300px)",
        }}
      />
      {/* <motion.h1
        style={{
          fontSize: 180,
          fontWeight: 800,
          letterSpacing: -9,
          textTransform: "uppercase",
          position: "absolute",
          top: 0,
        }}
      >
        {props.casedata?.val?.name}
        <sup
          style={{
            fontSize: 30,
            letterSpacing: 0,
            top: -80,
            position: "relative",
          }}
        >
          {props.caseScroll?.ratio.toFixed(2)}
        </sup>
      </motion.h1> */}
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
