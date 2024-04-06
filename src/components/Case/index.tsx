/** @jsxImportSource theme-ui */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { m, useSpring, transform, useTransform, useScroll, MotionValue } from "framer-motion";
import { useCaseWrapperContext, CaseTitle } from "..";
import { useResponsiveValue } from "@theme-ui/match-media";
import { ScrollDown } from "..";
import { ThemeUICSSObject, useThemeUI } from "theme-ui";
import { CaseWrapperState } from "../CaseWrapper";
import { PropMapProps } from "../App";
import { useUpdateURL } from "../hooks/useUpdateURL";
import { useScrollToCaseOnMount } from "../hooks/useScrollToCaseOnMount";

const caseBg = {
  width: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

const media_query = "screen and (min-width:640px)";

const settings = {
  nextScrollDistance: 64,
  springOptions: {
    damping: 50,
    stiffness: 1000,
    mass: 0.1,
  },
};

interface useStaggeredPositionProps {
  index: number;
  childHeight: number[];
  childPosition: number[];
  windowHeight: number;
}

interface useStaggeredPositionReturn {
  y: MotionValue<number>;
  yNext: MotionValue<number>;
  staggeredOffset: number;
  activeCase: boolean;
}

export const generateScaledArray = (length: number = 0, max: number = 100, bias: number = 0): number[] => {
  if (bias < -3 || bias > 3) throw new Error("bias must be between -3 and 3");

  const adjustBias = (t: number = 0, bias: number = 0): number => {
    if (bias === 0) return t; // No bias
    return bias > 0 ? Math.pow(t, 1 + bias) : 1 - Math.pow(1 - t, 1 - bias);
  };

  return Array.from({ length }, (_, i) => {
    const t = i / (length - 1);
    const adjustedT = adjustBias(t, bias);
    const value = max - adjustedT * max;
    return Number(value.toFixed(1)); // Round to integer for simplicity
  });
};

const useStaggeredPosition = ({ index, childHeight, childPosition, windowHeight }: useStaggeredPositionProps) => {
  const [activeCase, setIsActiveState] = React.useState(false);

  const { scrollY } = useScroll();

  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const height = (pos: number) => childHeight[pos ? index - pos : index] || 0;
  const position = (pos: number) => childPosition[pos ? index - pos : index] || 0;

  const staggeredOffset = -generateScaledArray(childHeight.length, responsiveOffset, 0)[index - 1] || 0;

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

  const y = useSpring(
    useTransform(scrollY, (v) => updatePos(v)),
    settings.springOptions
  );

  const yNext = useSpring(
    useTransform(scrollY, (v) => updatePosNext(v)),
    settings.springOptions
  );

  const isActive = useTransform(scrollY, (v) => updatePos(v));

  useEffect(() => {
    isActive.on("change", (e) => {
      const isLastItem = index === childHeight.length - 1;
      const lastItemThreshold = isLastItem ? 5 : 0;

      setIsActiveState(e > -height(0) - lastItemThreshold && e < 0);
    });
  }, [childHeight, height, index, isActive]);

  return { y, yNext, staggeredOffset, activeCase };
};

export const Case = React.memo(
  ({
    index,
    slug,
    propmap,
    children,
  }: {
    index: number;
    slug?: string;
    propmap?: PropMapProps;
    children: React.ReactNode;
  }) => {
    const theme = useThemeUI() as any;
    const ref = useRef(null) as any;

    const { childHeight, childPosition, windowHeight } = useCaseWrapperContext() as CaseWrapperState;

    const isMobile = useResponsiveValue([true, false]);

    const { bg, fg, fd } = useMemo(() => {
      const colors = theme.theme?.rawColors?.[slug || ""] || {
        background: "#ffffff",
        foreground: "#05010c",
        foregroundDim: "#05010c99",
      };
      return { bg: colors.background, fg: colors.foreground, fd: colors.foregroundDim };
    }, [theme.theme?.rawColors, slug]);

    const isHome = slug === "home";
    const islastCase = index === childHeight.length - 1;

    const { y, yNext, staggeredOffset, activeCase } = useStaggeredPosition({
      index,
      childHeight,
      childPosition,
      windowHeight,
    }) as useStaggeredPositionReturn;

    useUpdateURL(slug, index);

    const handleClick = () => {
      if (index !== 0) {
        window.history.pushState(null, "", `/${slug}`);
      } else {
        window.history.pushState(null, "", "/");
      }

      // scroll to top of case
      window.matchMedia(media_query).matches
        ? window.scrollTo({
            top: childPosition[index] - (index !== 1 ? settings.nextScrollDistance : 0) + staggeredOffset,
            left: 0,
            behavior: "smooth",
          })
        : window.scrollTo(0, childPosition[index]);
    };
    // -----CLICK TO SCROLLTO CASE-----

    const gridCount = (arr: number) => propmap?.grid && propmap?.grid[arr].split("span ")[1];
    const gridPosition = (arr: number) => propmap?.grid && propmap?.grid[arr].split(" /")[0];

    return (
      <>
        {isHome ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            ref={ref}
            style={isMobile ? { y: 0 } : { y }}
            sx={{
              width: "100%",
              top: [0, "100%"],
              position: ["relative", "fixed"],
            }}
          >
            {children}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="caseWrapper"
            id={`${slug}-${index}`}
            ref={ref}
            style={isMobile ? { y: 0 } : { y }}
            sx={
              {
                "--gridCount": [12, 12, `${gridCount(0)}`, `${gridCount(1)}`],
                "--caseBackground": bg,
                "--caseForeground": fg,
                "--caseForegroundDim": fd,
                top: [0, `100vh`],
                width: "100%",
                mt: 0,
                maxWidth: "1800px",
                position: ["relative", "fixed"],
                pointerEvents: "none",
                // willChange: "transform", //willChange messes up antialiasing but at the cost of performance. (Performance gains negligible though)
                display: "grid",
                gridTemplateColumns: ["repeat(10, 1fr)", "repeat(10, 1fr)", "repeat(12, 1fr)", "repeat(12, 1fr)"],
                color: fg,
                zIndex: index,
              } as ThemeUICSSObject
            }
          >
            {index === 1 && (
              <ScrollDown
                gridPosition={gridPosition}
                settings={settings}
                staggeredOffset={staggeredOffset}
                position={childPosition[index]}
              />
            )}
            <div
              sx={{
                pointerEvents: "auto",
                position: "relative",

                gridColumn: ["span 12", null, propmap?.grid && propmap.grid[0], propmap?.grid && propmap.grid[1]],
              }}
            >
              <m.div
                onClick={() => {
                  islastCase ? null : handleClick();
                }}
                style={isMobile ? { y: 0 } : { y: yNext }}
                sx={{
                  height: [180, 300],
                  ...(index === 1 && {
                    top: ["auto", settings.nextScrollDistance],
                    position: "relative",
                  }),
                }}
              >
                <CaseTitle name={slug || ""} />
              </m.div>
              <div
                className="background-layer"
                style={{
                  backgroundColor: bg,
                }}
                sx={
                  {
                    height: [
                      `calc(100% - ${180 - 2}px)`,
                      `calc(100% - ${300 - 2 - (index !== 1 ? settings.nextScrollDistance : 0) + staggeredOffset}px)`,
                    ],
                    ...caseBg,
                  } as ThemeUICSSObject
                }
              ></div>

              <div
                className="caseContent"
                sx={{
                  mb: "5vh",
                  mt: islastCase ? "50vh" : "0",
                  pb: islastCase ? "0" : "50vh",
                  opacity: ["1", activeCase ? 1 : 0],
                  transitionProperty: "opacity",
                  transitionDuration: "0.2s",
                  // transitionDelay: activeCase ? "0.2s" : "0s",
                  overflow: "hidden",
                }}
              >
                {children}
              </div>
            </div>
          </m.div>
        )}

        {useScrollToCaseOnMount({
          slug,
          scrollToVal: window.matchMedia(media_query).matches
            ? childPosition[index] - (index !== 1 ? settings.nextScrollDistance : 0) + staggeredOffset
            : childPosition[index],
        })}
      </>
    );
  }
);
