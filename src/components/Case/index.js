/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  transform,
} from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

export const Case = React.forwardRef((props, ref) => {
  const [childHeight, setChildHeight] = React.useState(0);
  const [inview, setInview] = React.useState(0);
  const { childpos, browserHeight } = useCaseWrapperContext();

  React.useEffect(() => {
    setChildHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  console.log(childpos);

  const zeroToOne = useMotionValue(0);

  useScrollPosition(({ currPos }) => {
    if (childpos || []) {
      const ratio = childpos.map((v) => {
        return transform(
          currPos.y + v - browserHeight,
          [childHeight, 0],
          [0, 1]
        );
      });
      zeroToOne.set(ratio[props.index]);
    }
  });

  // scrollY.onChange((scrollYValue) => {
  //   const good = heightArr.map((heightArrValue, index) => {
  //     let arrayIn = [-getEl[index].height, 0];
  //     let arrayOut = [0, 1];
  //     return transform(
  //       (scrollYValue - heightArrValue) * 0.75 + browserHeight,
  //       arrayIn,
  //       arrayOut
  //     );
  //   });
  //   console.log(good);
  // });

  const y = useSpring(
    useTransform(
      zeroToOne,
      [0, 1],
      [browserHeight, -childHeight + browserHeight]
    ),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  React.useEffect(() => {
    zeroToOne.onChange((v) => {
      const sensitivity = 0.005;
      const isInview =
        v > 0 + sensitivity && v < 1 - sensitivity ? true : false;
      setInview(isInview);
    });
  });

  let offset = useResponsiveValue([32, 60, 80, 120]);
  // offset = (offset / props.index) * 0.8;

  const staggeredOffset = -props.size * offset + props.index * offset;
  const handleClick = () => {
    !inview &&
      window.scrollTo(
        0,
        staggeredOffset + childpos[props.index] - childHeight + 1
      );
  };

  const Render = props.data.component;

  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      initial={{ y: 0 }}
      style={{
        y: props.data.hideCaseHero || false ? 0 : y,
      }}
      sx={{
        top: 0,
        position: "fixed",
        willChange: "transform",
        color: props.data?.color,
        zIndex: props.index,
        right: 0,
        width:
          props.data.hideCaseHero || false
            ? "100%"
            : `calc(${100 - (props.size - 1) * 10}% + ${props.index * 10}%)`,
      }}
    >
      {console.log("render child :(")}

      <motion.div
        sx={{
          backgroundColor: props.data?.bg,
          width: "100%",
          transition: "height .3s cubic-bezier(0,.2,0,.96)",
          height:
            props.data.hideCaseHero || false
              ? `100%`
              : `calc(100% + ${-staggeredOffset - 300}px)`,
          zIndex: -1,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <CaseHero
          offset={offset}
          text={props.data?.name}
          style={{
            position: "absolute",
            top: -299,
            display: props.data.hideCaseHero || false ? "none" : "block",
            textTransform: "uppercase",
            fontWeight: 600,
            width: "100%",
            height: "max-content",
            letterSpacing: "-0.075em",
            fontSize: "min(12vw, 140px)",
            color: props.data?.bg,
          }}
        />
      </motion.div>
      <Render />
    </motion.div>
  );
});
