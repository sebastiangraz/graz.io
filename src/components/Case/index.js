/** @jsxImportSource theme-ui */

import React from "react";
import debounce from "lodash.debounce";
import {
  m,
  useSpring,
  transform,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";
import { Debugger, ScrollDown } from "../";

const debug = false;

const settings = {
  nextScrollDistance: 72,
  staggerPower: 0.72,
  springOptions: {
    damping: 12,
    mass: 0.1,
    // damping: 7,
    // mass: 0.07,
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
  mt: [-7, 0],
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

function ScrollToTopOnMount(props) {
  const { position, height, stagger, datavar, index } = props;
  React.useEffect(() => {
    document.fonts.ready.then(function () {
      if (window.location.hash === `#${datavar}`) {
        window.scrollTo(
          0,
          position -
            height -
            (index !== 1 && settings.nextScrollDistance) +
            stagger
        );
      }
    });
  }, [datavar, height, index, position, stagger]);
  return null;
}

const MemoCase = React.forwardRef(({ index, data }, ref) => {
  const { scrollY } = useViewportScroll();
  let { childHeight, childPosition, windowHeight } = useCaseWrapperContext();

  const responsiveOffset = useResponsiveValue([50, 75, 200, 240]);

  const Render = data.component;
  const height = React.useCallback(
    (pos) => childHeight[pos ? index - pos : index] || [],
    [childHeight, index]
  );
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const offset = (responsiveOffset / (index + 1)) * settings.staggerPower;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  // -----POSITION-----
  const updatePos = (v) => {
    const progress = v - position(0) + height(0) + windowHeight;

    return transform(progress, [0, height(0)], [0, -height(0)]);
  };

  const updatePosNext = (v) => {
    const progress = v - position(1) + height(1);
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

  const xStyle = useResponsiveValue([
    { x: "0%" },
    { x: "-50%" },
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
        transition: "opacity 0.1s linear",
        opacity: 1,
      });
    });
  }, 1600);

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

    if (index !== 0) {
      window.history.replaceState(null, null, `#${data.slug}`);
    } else {
      window.history.replaceState(null, null, " ");
    }
    window.scrollTo(
      0,
      position(0) -
        height(0) -
        (index !== 1 && settings.nextScrollDistance) +
        staggeredOffset
    );
  };
  // -----CLICK TO SCROLLTO CASE-----

  const gridCount = (arr) => data?.grid && data.grid[arr].split("span ")[1];
  const gridPosition = (arr) => data?.grid && data.grid[arr].split(" /")[0];

  return (
    <>
      {debug && (
        <Debugger
          updatePos={updatePos}
          scrollY={scrollY}
          data={data}
          index={index}
          height={height}
          position={position}
          debug={debug}
        />
      )}
      {index === 0 ? (
        // -----HOME-----
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          ref={ref}
          style={{
            ...yStyle,
            color: data?.color,
          }}
          sx={{
            width: "100%",
            top: "100%",
            position: ["relative", "fixed"],
            left: 0,
          }}
        >
          <Render data={data} />
        </m.div>
      ) : (
        // -----CASES-----
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="caseWrapper"
          id={data.slug}
          ref={ref}
          style={{
            ...yStyle,
            ...xStyle,
          }}
          sx={{
            "--gridCount": [12, 12, `${gridCount(0)}`, `${gridCount(1)}`],
            "--caseBg": data.bg,
            "--caseColor": data.color,
            ...caseParent,
            // pt: [3, 0, null],
            color: data?.color,
            zIndex: index,
            left: [0, "50%"],
          }}
        >
          {index === 1 && (
            <ScrollDown
              gridPosition={gridPosition}
              settings={settings}
              staggeredOffset={staggeredOffset}
              height={height}
              position={position}
            />
          )}
          <div
            sx={{
              pointerEvents: "auto",
              position: "relative",
              gridColumn: ["span 12", null, data?.grid[0], data?.grid[1]],
            }}
          >
            <m.div
              onClick={handleClick}
              style={{
                ...yNextStyle,
                height: 300,
                willChange: "transform",
              }}
              sx={{
                ...(index === 1 && {
                  top: ["auto", settings.nextScrollDistance],
                  position: "relative",
                }),
              }}
            >
              <CaseHero
                debug={debug}
                name={data?.name}
                forceRender={childHeight}
              />
            </m.div>
            <div
              className="background-layer"
              style={{
                backgroundColor: data?.bg,
              }}
              sx={{
                borderRadius: ["0 0 32px 32px"],
                height: [
                  "calc(100% - 298px)",
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
                // opacity: 0,
                mb: ["20vh", "100vh"],
                mt: "0",
              }}
            >
              <Render data={data} />
            </div>
          </div>
        </m.div>
      )}
      {!window.matchMedia(media_query).matches ? null : (
        <ScrollToTopOnMount
          position={position(0)}
          height={height(0)}
          stagger={staggeredOffset}
          datavar={data.slug}
          index={index}
        />
      )}
    </>
  );
});

export const Case = React.memo(MemoCase);
