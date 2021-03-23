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
    <svg
      {...rest}
      preserveAspectRatio="xMinYMin slice"
      width="1400"
      height="328"
      viewBox="0 0 1400 328"
      fill="#f00"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H1400V328H0V0ZM144.6 159V138.84H50.28V29.76H27.24V159H144.6ZM142.547 94.38C142.547 113.64 149.567 129.48 163.967 142.08C178.367 154.68 196.367 160.98 218.327 160.98C240.107 160.98 258.107 154.68 272.507 142.08C286.907 129.48 294.107 113.64 294.107 94.38C294.107 75.3 286.907 59.28 272.507 46.68C258.107 34.08 240.107 27.78 218.327 27.78C196.367 27.78 178.367 34.08 163.967 46.68C149.567 59.28 142.547 75.3 142.547 94.38ZM270.527 94.38C270.527 108.24 265.667 119.4 256.127 127.86C246.407 136.5 233.807 140.64 218.327 140.64C202.667 140.64 190.067 136.5 180.527 127.86C170.807 119.4 166.127 108.24 166.127 94.38C166.127 80.7 170.807 69.54 180.527 60.9C190.067 52.44 202.667 48.12 218.327 48.12C233.807 48.12 246.407 52.44 256.127 60.9C265.667 69.54 270.527 80.7 270.527 94.38ZM372.335 160.8C393.575 160.8 409.775 155.4 420.935 144.24C432.095 133.08 437.855 117.24 437.855 96.54V29.76H414.815V95.82C414.815 110.94 411.215 122.1 404.195 129.48C397.175 136.86 386.555 140.46 372.335 140.46C357.935 140.46 347.315 136.86 340.295 129.48C333.275 122.1 329.855 110.94 329.855 95.82V29.76H306.815V96.54C306.815 117.24 312.395 133.08 323.555 144.24C334.715 155.4 351.095 160.8 372.335 160.8ZM538.711 108.96C553.471 108.96 565.171 105.54 573.631 98.52C582.091 91.68 586.411 81.96 586.411 69.36C586.411 56.76 582.091 47.04 573.811 40.2C565.351 33.36 553.651 29.76 538.711 29.76H458.431V159H481.471V108.96H538.711ZM481.471 49.56H537.451C545.731 49.56 552.211 51.36 556.891 54.78C561.391 58.2 563.731 63.06 563.731 69.36C563.731 75.66 561.391 80.52 556.711 83.94C552.031 87.54 545.731 89.16 537.451 89.16H481.471V49.56ZM602.045 159H726.965V138.84H624.725V102.48H716.705V82.32H624.725V49.92H726.965V29.76H602.045V159ZM13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"
        fill="currentColor"
      />
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
        willChange: "transform",
        position: "fixed",
        left: 0,
        paddingBottom: "50vh",
        paddingTop: "50vh",
        color: props.casedata?.val?.color,
        marginTop:
          -props.casedata.size * OFFSET + props.casedata.index * OFFSET,
        width: `calc(100% - ${props.casedata.index * OFFSET}px)`,
        background: props.casedata?.val?.bg,

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
          width: "100%",
          left: 0,
          color: props.casedata?.val?.bg,
          bottom: "100%",
          position: "absolute",
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
