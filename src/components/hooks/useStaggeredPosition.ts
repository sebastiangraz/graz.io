import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { m, useSpring, transform, useTransform, useScroll, MotionValue } from "framer-motion";
import { useResponsiveValue } from "@theme-ui/match-media";
import { generateScaledArray, settings } from "../Case";

interface useStaggeredPositionProps {
  index: number;
  childHeight: number[];
  childPosition: number[];
  windowHeight: number;
}

export const useStaggeredPosition = ({
  index,
  childHeight,
  childPosition,
  windowHeight,
}: useStaggeredPositionProps) => {
  const [activeCase, setIsActiveCase] = React.useState(false);
  const activeCaseRef = useRef(false);

  const { scrollY } = useScroll();

  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const height = useCallback((pos: number) => childHeight[pos ? index - pos : index] || 0, [childHeight, index]);
  const position = useCallback((pos: number) => childPosition[pos ? index - pos : index] || 0, [childPosition, index]);

  const staggeredOffset =
    -generateScaledArray(childHeight.length, responsiveOffset, settings.staggerBias)[index - 1] || 0;

  const updatePos = useCallback(
    (v: number) => {
      const progress = v - childPosition[index] + windowHeight;
      return transform(progress, [0, height(0)], [0, -height(0)]);
    },
    [childPosition, windowHeight, height, index]
  );

  const updatePosNext = useCallback(
    (v: number) => {
      const progress = v - position(0) + height(1);

      return transform(
        progress,
        [-position(0), -position(1), height(1) - windowHeight],
        [0, staggeredOffset, staggeredOffset - settings.nextScrollDistance]
      );
    },
    [position, height, staggeredOffset, windowHeight]
  );

  const y = useSpring(useTransform(scrollY, updatePos), settings.springOptions);
  const yNext = useSpring(useTransform(scrollY, updatePosNext), settings.springOptions);
  const isActive = useTransform(scrollY, updatePos);

  useEffect(() => {
    const unsubscribe = isActive.on("change", (e) => {
      const isLastItem = index === childHeight.length - 1;
      const lastItemThreshold = isLastItem ? 5 : 0;
      const newActiveState = e > -height(0) - lastItemThreshold && e < 0;

      // Only update state if it changes
      if (activeCaseRef.current !== newActiveState) {
        setIsActiveCase(newActiveState);
        activeCaseRef.current = newActiveState; // Update ref
      }
    });

    return () => unsubscribe();
  }, [isActive, index, childHeight, windowHeight]);

  return { y, yNext, staggeredOffset, activeCase };
};
