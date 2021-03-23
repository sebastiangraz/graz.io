import React from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  transform,
} from "framer-motion";

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
  pixelDistance.set(props.caseScroll?.newPixels);
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

  return (
    <motion.div
      ref={caseRef}
      style={{
        zIndex: props.casedata.index,
        y: pixels,
        padding: 90,
        display: "block",
        willChange: "transform",
        overflow: "hidden",
        position: "fixed",
        paddingBottom: "50vh",
        paddingTop: "50vh",
        marginTop: -props.casedata.size * 90 + props.casedata.index * 90,
        width: `calc(100% - ${props.casedata.index * 10}vh)`,
        background: props.casedata?.val?.bg,
        color: props.casedata?.val?.color,
      }}
    >
      <motion.h1
        style={{
          fontSize: 180,
          letterSpacing: -9,
          textTransform: "uppercase",
          position: "absolute",
          top: 20,
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
      </motion.h1>
      <Render />
    </motion.div>
  );
};

export default React.forwardRef(Case);
