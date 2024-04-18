/** @jsxImportSource theme-ui */

import style from "./Case.module.css";
import React, { useMemo, useRef } from "react";
import { m, MotionValue } from "framer-motion";
import { useCaseWrapperContext, CaseTitle } from "..";
import { useResponsiveValue } from "@theme-ui/match-media";
import { ScrollDown } from "..";
import { ThemeUICSSObject, useThemeUI } from "theme-ui";
import { CaseWrapperState } from "../CaseWrapper";
import { PropMapProps } from "../App";
import { useUpdateURL } from "../hooks/useUpdateURL";
import { useScrollToCaseOnMount } from "../hooks/useScrollToCaseOnMount";
import { useStaggeredPosition } from "../hooks/useStaggeredPosition";

const caseBg = {
  width: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

const media_query = "screen and (min-width:640px)";

export const settings = {
  nextScrollDistance: 64,
  staggerBias: -1, // -3 to 3
  springOptions: {
    damping: 50,
    stiffness: 1000,
    mass: 0.1,
  },
};

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
            className={`${style.caseHome}`}
          >
            {children}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`caseWrapper ${style.caseWrapper}`}
            id={`${slug}-${index}`}
            ref={ref}
            style={{
              ...(isMobile ? { y: 0 } : { y }),
              ...{ "--caseBackground": bg, "--caseForeground": fg, "--caseForegroundDim": fd, "--caseIndex": index },
            }}
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
              className={`${style.caseTitleWrapper}`}
              style={
                {
                  "--gridColumnPosition_2": propmap?.grid && propmap.grid[0],
                  "--gridColumnPosition_3": propmap?.grid && propmap.grid[1],
                } as React.CSSProperties
              }
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
                  backgroundColor: "var(--caseBackground)",
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
