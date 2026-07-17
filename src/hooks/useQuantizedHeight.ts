import { useState, useEffect, useRef } from "react";

const DEFAULT_STEP = 2; // 1 = 0.5rlh

/**
 * Quantize an element's height to the document's line grid: given the width it
 * renders at and its aspect ratio, returns the natural height rounded to the
 * nearest multiple of the grid step (root font size × stepSize).
 */
export const calculateQuantizedHeight = (
  containerWidth: number,
  aspectRatio: number,
  stepSize: number = DEFAULT_STEP
): string | null => {
  if (!containerWidth || !aspectRatio) return null;

  const calculatedHeight = containerWidth / aspectRatio;

  // Document root font size equals the line height in this design
  const lineHeight = parseFloat(getComputedStyle(document.documentElement).fontSize) * stepSize;
  const roundedHeight = Math.round(calculatedHeight / lineHeight) * lineHeight;

  return `${roundedHeight}px`;
};

/**
 * Observes the element behind `elementRef` and keeps `quantizedHeight` in sync
 * with its rendered width. Pass `null` while the aspect ratio is unknown (e.g.
 * before an image has loaded) — the hook stays idle until one is provided.
 */
export const useQuantizedHeight = <T extends HTMLElement = HTMLElement>(
  aspectRatio: number | null | undefined,
  stepSize: number = DEFAULT_STEP
) => {
  const [quantizedHeight, setQuantizedHeight] = useState<string | null>(null);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !aspectRatio) return;

    const updateHeight = () => {
      const newHeight = calculateQuantizedHeight(element.clientWidth, aspectRatio, stepSize);
      if (newHeight) {
        setQuantizedHeight(newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateHeight);
    });

    resizeObserver.observe(element);
    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [aspectRatio, stepSize]);

  return { quantizedHeight, elementRef };
};
