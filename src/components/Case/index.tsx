/** @jsxImportSource theme-ui */

import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import {
  m,
  useSpring,
  transform,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "..";
import { useResponsiveValue } from "@theme-ui/match-media";
import { Debugger, ScrollDown } from "..";
import { useThemeUI } from "theme-ui";
import Home from "../../pages/home";

const debug = false;

const settings = {
  nextScrollDistance: 72,
  staggerPower: 0.48,
  springOptions: {
    damping: 12,
    mass: 0.1,
  },
};

const debugStyle = {
  ...(debug && {
    boxShadow: "0 0 0 8px inset #319c4eaa, 0 0 0 8px #ef9e47aa",
    background: "linear-gradient(#ff000000, #ff000088) !important",
  }),
};

const caseParent = {
  top: [0, `100vh`],
  width: "100%",
  mt: [0, 0],
  maxWidth: "2400px",
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
  ...debugStyle,
  width: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

const media_query = "screen and (min-width:640px)";

// function ScrollToTopOnMount(props) {
//   const { position, height, stagger, datavar, index } = props;
//   React.useEffect(() => {
//     // wait for fonts to load
//     document.fonts.ready.then(function () {
//       // find the current hash in url
//       if (window.location.hash === `#${datavar}`) {
//         // desktop
//         window.matchMedia(media_query).matches
//           ? window.scrollTo(
//               0,
//               position -
//                 height -
//                 (index !== 1 && settings.nextScrollDistance) +
//                 stagger
//             )
//           : // mobile doesnt need to calc stagger and nextScroll
//             window.scrollTo(0, position - height);
//       }
//     });
//   }, [datavar, height, index, position, stagger]);
//   return null;
// }

const useStaggeredPosition = (
  index,
  childHeight,
  childPosition,
  windowHeight,
  settings
) => {
  const { scrollY } = useViewportScroll();
  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const height = useCallback(
    (pos) => childHeight[pos ? index - pos : index] || 0,
    [childHeight, index]
  );
  const position = (pos) => childPosition[pos ? index - pos : index] || 0;

  const offset = (responsiveOffset / (index + 1)) * settings.staggerPower;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  const updatePos = (v) => {
    const progress = v - position(0) + windowHeight;
    return transform(progress, [0, height(0)], [0, -height(0)]);
  };

  // const updatePosNext = (v) => {
  //   const progress = v - position(1) + height(1);
  //   return transform(
  //     progress,
  //     [-windowHeight, height(1) - windowHeight],
  //     [staggeredOffset, staggeredOffset - settings.nextScrollDistance]
  //   );
  // };

  const updatePosNext = (v) => {
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

  return { y, yNext, staggeredOffset };
};

const MemoCase = React.forwardRef(
  (
    {
      index,
      slug,
      children,
    }: { index: number; slug?: string; children: React.ReactNode },
    ref
  ) => {
    const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);
    const theme = useThemeUI() as any;
    const bg = theme.theme?.rawColors?.[slug || "home"]?.background;
    const fg = theme.theme?.rawColors?.[slug || "home"]?.foreground;
    const isHome = slug === "home";

    const { scrollY } = useViewportScroll();
    let { childHeight, childPosition, windowHeight } = useCaseWrapperContext();

    const { y, yNext, staggeredOffset } = useStaggeredPosition(
      index,
      childHeight,
      childPosition,
      windowHeight,
      settings
    );

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
      [...document.querySelectorAll(".caseContent")].map((e) => {
        return Object.assign(e.style, {
          transition: "opacity 0.1s linear 1s",
          opacity: 1,
        });
      });
    }, 1000);

    const handleClick = () => {
      [...document.querySelectorAll(".caseContent")].map((e) => {
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

      // if (index !== 0) {
      //   window.history.replaceState(null, null, `#${data.slug}`);
      // } else {
      //   window.history.replaceState(null, null, " ");
      // }

      // window.matchMedia(media_query).matches
      //   ? window.scrollTo(
      //       0,
      //       position(0) -
      //         height(0) -
      //         (index !== 1 && settings.nextScrollDistance) +
      //         staggeredOffset
      //     )
      //   : // mobile doesnt need to calc stagger and nextScroll
      //     window.scrollTo(0, position(0) - height(0));
    };
    // -----CLICK TO SCROLLTO CASE-----

    // TODO: fix gridCount and gridPosition

    const gridCount = (arr) => useResponsiveValue([12, 12, 12, 12]);
    const gridPosition = (arr) => useResponsiveValue([1, 1, 1, 1]);

    // const gridCount = (arr) => data?.grid && data.grid[arr].split("span ")[1];
    //const gridPosition = (arr) => data?.grid && data.grid[arr].split(" /")[0];

    return (
      <>
        {" "}
        {isHome ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            ref={ref}
            style={{
              ...yStyle,
            }}
            sx={{
              width: "100%",
              top: "100%",
              position: ["relative", "fixed"],
              left: 0,
              height: "100vh",
            }}
          >
            {children}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="caseWrapper"
            id={`${slug}-${index}`}
            ref={ref}
            style={{
              ...yStyle,
              ...xStyle,
            }}
            sx={{
              "--gridCount": [12, 12, `${gridCount(0)}`, `${gridCount(1)}`],
              "--caseBackground": bg,
              "--caseForeground": fg,
              ...caseParent,
              color: fg,
              zIndex: index,
              left: [0, 0, "50%"],
              // height: "4000px",
            }}
          >
            {/* {index === 1 && (
              <ScrollDown
                gridPosition={gridPosition}
                settings={settings}
                staggeredOffset={staggeredOffset}
                height={height}
                position={position}
              />
            )} */}
            <div
              sx={{
                pointerEvents: "auto",
                position: "relative",
                //TODO: fix grid
                gridColumn: ["span 12", null, "span 12", "span 10"],
                // gridColumn: ["span 12", null, data?.grid[0], data?.grid[1]],
              }}
            >
              <m.div
                // last item not clickable
                onClick={
                  index !== childPosition.length - 1 ? handleClick : null
                }
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
                <CaseHero name={slug} forceRender={childHeight} />
              </m.div>
              <div
                className="background-layer"
                style={{
                  backgroundColor: bg,
                }}
                sx={{
                  borderRadius: ["0 0 32px 32px"],
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
                }}
              ></div>

              <div
                className="caseContent"
                sx={{
                  mb: "5vh",
                  mt: "0",
                }}
              >
                {children}
                {/* <Render data={data} /> */}
              </div>
            </div>
          </m.div>
        )}
        {/* <ScrollToTopOnMount
          position={position(0)}
          height={height(0)}
          stagger={staggeredOffset}
          datavar={slug}
          index={index}
        /> */}
      </>
    );
  }
);

export const Case = React.memo(MemoCase);
