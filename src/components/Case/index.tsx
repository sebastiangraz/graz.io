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
          ? window.scrollTo(
              0,
              position -
                (index !== 1 ? settings.nextScrollDistance : 0) +
                stagger
            )
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
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const height = useCallback(
    (pos: number) => childHeight[pos ? index - pos : index] || 0,
    [childHeight, index]
  );

  const position = (pos: number) =>
    childPosition[pos ? index - pos : index] || 0;

  const offset = (responsiveOffset / (index + 1)) * settings.staggerPower;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollYPos = scrollY.get() + 200;
      const activeIndex = childPosition.findIndex((pos, index) => {
        const isLastPosition = index === childPosition.length - 1;
        const isWithinNextPosition =
          !isLastPosition && scrollYPos < childPosition[index + 1];

        return scrollYPos >= pos && (isLastPosition || isWithinNextPosition);
      });

      if (activeIndex !== -1) {
        setActiveCaseIndex(activeIndex);
      }
    }, 50);

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [childPosition, scrollY]);

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

  return { y, yNext, staggeredOffset, activeCaseIndex };
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
    const bg = theme.theme?.rawColors?.[slug || ""]?.background;
    const fg = theme.theme?.rawColors?.[slug || ""]?.foreground;
    const fd = theme.theme?.rawColors?.[slug || ""]?.foregroundDim;
    const isHome = slug === "home";

    const { childHeight, childPosition, windowHeight } =
      useCaseWrapperContext() as CaseWrapperState;

    const { y, yNext, staggeredOffset, activeCaseIndex } = useStaggeredPosition(
      {
        index,
        childHeight,
        childPosition,
        windowHeight,
      }
    );

    console.log(activeCaseIndex);

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

    const fadeIn = debounce(() => {
      [...document.querySelectorAll<HTMLElement>(".caseContent")].map((e) => {
        return Object.assign(e.style, {
          transition: "opacity 0.1s linear 1s",
          opacity: 1,
        });
      });
    }, 1000);

    useUpdateURL(slug, index);

    const handleClick = () => {
      [...document.querySelectorAll<HTMLElement>(".caseContent")].map((e) => {
        return Object.assign(e.style, {
          transition: "none",
          opacity: 0,
        });
      });

      Object.assign(ref.current.querySelector(".caseContent").style, {
        transition: "none",
        opacity: 1,
      });

      fadeIn();

      if (index !== 0) {
        window.history.pushState(null, "", `/${slug}`);
      } else {
        window.history.pushState(null, "", "/");
      }

      // scroll to top of case
      window.matchMedia(media_query).matches
        ? window.scrollTo(
            0,
            childPosition[index] -
              (index !== 1 ? settings.nextScrollDistance : 0) +
              staggeredOffset
          )
        : window.scrollTo(0, childPosition[index]);
    };
    // -----CLICK TO SCROLLTO CASE-----

    const gridCount = (arr: number) =>
      propmap?.grid && propmap?.grid[arr].split("span ")[1];
    const gridPosition = (arr: number) =>
      propmap?.grid && propmap?.grid[arr].split(" /")[0];

    const islastCase = index === childHeight.length - 1;

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
                    // borderRadius: ["0 0 32px 32px"],
                    // height: "100%",
                    // height: "1000px",
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
                  // pb: "100vh",
                  overflow: "hidden",
                }}
              >
                {children}
                {/* <Render data={data} /> */}
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
