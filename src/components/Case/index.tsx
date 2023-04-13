/** @jsxImportSource theme-ui */

import React, { useCallback, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import {
  m,
  useSpring,
  transform,
  useTransform,
  useScroll,
} from "framer-motion";
import { useCaseWrapperContext, CaseTitle } from "..";
import { useResponsiveValue } from "@theme-ui/match-media";
import { ScrollDown } from "..";
import { ThemeUICSSObject, useThemeUI } from "theme-ui";
import { CaseWrapperState } from "../CaseWrapper";
import { PropMap } from "../App";
import { useUpdateURL } from "../hooks/useUpdateURL";

const caseParent = {
  top: [0, `100vh`],
  width: "100%",
  mt: [0, 0],
  maxWidth: "1800px",
  position: ["relative", "fixed"],
  pointerEvents: "none",
  // willChange: "transform", //willChange messes up antialiasing but at the cost of performance. (Performance gains negligible though)
  display: "grid",
  gridTemplateColumns: [
    "repeat(10, 1fr)",
    "repeat(10, 1fr)",
    "repeat(12, 1fr)",
    "repeat(12, 1fr)",
  ],
};

const caseBg = {
  // ...debugStyle,
  width: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

const media_query = "screen and (min-width:640px)";

interface ScrollToTopOnMountProps {
  position: number;
  stagger: number;
  datavar: string | undefined;
  index: number;
}

function ScrollToTopOnMount(props: ScrollToTopOnMountProps) {
  const { position, stagger, datavar, index } = props;

  useEffect(() => {
    // wait for fonts to load
    document.fonts.ready.then(function () {
      // find the current path in url
      if (window.location.pathname === `/${datavar}`) {
        // desktop
        window.matchMedia(media_query).matches
          ? window.scrollTo({
              top:
                position -
                (index !== 1 ? settings.nextScrollDistance : 0) +
                stagger,
              left: 0,
              behavior: "auto",
            })
          : // mobile doesn't need to calc stagger and nextScroll
            window.scrollTo(0, position);
      }
    });
  }, [datavar, index, position, stagger]);
  return null;
}

const settings = {
  nextScrollDistance: 64,
  staggerPower: 0.4,
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

const useStaggeredPosition = ({
  index,
  childHeight,
  childPosition,
  windowHeight,
}: useStaggeredPositionProps) => {
  const { scrollY } = useScroll();

  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const height = useCallback(
    (pos: number) => childHeight[pos ? index - pos : index] || 0,
    [childHeight, index]
  );
  const [activeCase, setIsActiveState] = React.useState(false);

  const position = (pos: number) =>
    childPosition[pos ? index - pos : index] || 0;

  const offset = (responsiveOffset / (index + 1)) * settings.staggerPower;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  const updatePos = (v: number) => {
    const progress = v - position(0) + windowHeight;
    return transform(progress, [0, height(0)], [0, -height(0)]);
  };

  const updatePosNext = (v: number) => {
    const progress = v - position(0) + height(1);
    return transform(
      progress,
      [-windowHeight, height(1) - windowHeight],
      [staggeredOffset, staggeredOffset - settings.nextScrollDistance]
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
    propmap?: PropMap;
    children: React.ReactNode;
  }) => {
    const theme = useThemeUI() as any;
    const ref = useRef(null) as any;

    const { childHeight, childPosition, windowHeight } =
      useCaseWrapperContext() as CaseWrapperState;

    const bg = theme.theme?.rawColors?.[slug || ""]?.background;
    const fg = theme.theme?.rawColors?.[slug || ""]?.foreground;
    const fd = theme.theme?.rawColors?.[slug || ""]?.foregroundDim;
    const isHome = slug === "home";
    const islastCase = index === childHeight.length - 1;

    const { y, yNext, staggeredOffset, activeCase } = useStaggeredPosition({
      index,
      childHeight,
      childPosition,
      windowHeight,
    });

    const xStyle = useResponsiveValue([
      { x: "0%" },
      { x: "0%" },
      { x: "-50%" },
      { x: "-50%" },
    ]);

    const yNextStyle = useResponsiveValue([
      { y: 0 },
      { y: yNext },
      { y: yNext },
      { y: yNext },
    ]);

    const yStyle = useResponsiveValue([{ y: 0 }, { y: y }, { y: y }, { y: y }]);

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
            top:
              childPosition[index] -
              (index !== 1 ? settings.nextScrollDistance : 0) +
              staggeredOffset,
            left: 0,
            behavior: "smooth",
          })
        : window.scrollTo(0, childPosition[index]);
    };
    // -----CLICK TO SCROLLTO CASE-----

    const gridCount = (arr: number) =>
      propmap?.grid && propmap?.grid[arr].split("span ")[1];
    const gridPosition = (arr: number) =>
      propmap?.grid && propmap?.grid[arr].split(" /")[0];

    return (
      <>
        {" "}
        {isHome ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            ref={ref}
            style={{
              ...yStyle,
            }}
            sx={{
              width: "100%",
              top: "100%",
              position: ["relative", "fixed"],
              left: 0,
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
            style={{
              ...yStyle,
              ...xStyle,
            }}
            sx={
              {
                "--gridCount": [12, 12, `${gridCount(0)}`, `${gridCount(1)}`],
                "--caseBackground": bg,
                "--caseForeground": fg,
                "--caseForegroundDim": fd,
                ...caseParent,
                color: fg,
                zIndex: index,
                left: [0, 0, "50%"],
                // height: "4000px",
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

                gridColumn: [
                  "span 12",
                  null,
                  propmap?.grid && propmap.grid[0],
                  propmap?.grid && propmap.grid[1],
                ],
              }}
            >
              <m.div
                onClick={() => {
                  islastCase ? null : handleClick();
                }}
                style={{
                  ...yNextStyle,

                  willChange: "transform",
                }}
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
                      `calc(100% - ${
                        300 -
                        2 -
                        (index !== 1 ? settings.nextScrollDistance : 0) +
                        staggeredOffset
                      }px)`,
                    ],
                    ...caseBg,
                  } as ThemeUICSSObject
                }
              ></div>

              <div
                className="caseContent"
                sx={{
                  mb: "5vh",
                  mt: "0",
                  opacity: activeCase ? 1 : 0,
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
        <ScrollToTopOnMount
          position={childPosition[index]}
          stagger={staggeredOffset}
          datavar={slug}
          index={index}
        />
      </>
    );
  }
);
