import React, { useCallback, useEffect } from "react";
import { useSpring, transform, useTransform, useScroll } from "framer-motion";
import { useResponsiveValue } from "@theme-ui/match-media";
import { generateScaledArray } from "@/hooks";
import { settings } from ".";
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
  /*   const activeCaseRef = useRef(false); */

  const { scrollY } = useScroll();

  const responsiveOffset = useResponsiveValue([50, 75, 180, 200]);

  const height = useCallback((pos: number) => childHeight[pos ? index - pos : index] || 0, [childHeight, index]);
  const position = useCallback((pos: number) => childPosition[pos ? index - pos : index] || 0, [childPosition, index]);

  const staggeredOffset =
    -generateScaledArray(childHeight.length, responsiveOffset, settings.staggerBias)[index - 1] || 0;

  const updatePos = (v: number) => {
    const progress = v - position(0) + windowHeight;
    return transform(progress, [0, height(0)], [0, -height(0)]);
  };

  const updatePosNext = (v: number) => {
    const progress = v - position(0) + height(1);

    return transform(
      progress,
      [-position(0), -position(1), height(1) - windowHeight],
      [0, staggeredOffset, staggeredOffset - settings.nextScrollDistance]
    );
  };

  const y = useSpring(useTransform(scrollY, updatePos), settings.springOptions);
  const yNext = useSpring(useTransform(scrollY, updatePosNext), settings.springOptions);
  const isActive = useTransform(scrollY, updatePos);

  useEffect(() => {
    const unsubscribe = isActive.on("change", (e) => {
      const isLastItem = index === childHeight.length - 1;
      const lastItemThreshold = isLastItem ? 50 : 0;
      const newActiveState = e > -height(0) - lastItemThreshold && e < 0;
      setIsActiveCase(newActiveState);

      // Only update state if it changes
      /*       if (activeCaseRef.current !== newActiveState) {
        setIsActiveCase(newActiveState);
        activeCaseRef.current = newActiveState; // Update ref
      } */
    });

    return () => unsubscribe();
  }, [isActive, index, childHeight, height]);

  return { y, yNext, staggeredOffset, activeCase };
};
