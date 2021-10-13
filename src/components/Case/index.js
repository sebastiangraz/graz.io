/** @jsxImportSource theme-ui */

import React from "react";
import { m, useSpring, transform, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";

const debug = false;

const settings = {
  nextScrollDistance: 100,
  staggerPower: 0.6,
  springOptions: {
    damping: 11,
    mass: 0.25,
  },
};

const debugStyle = {
  ...(debug && {
    boxShadow: "0 0 0 8px inset #319c4eaa, 0 0 0 8px #ef9e47aa",
    background: "linear-gradient(#ff000000, #ff000088) !important",
  }),
};

const caseParent = {
  top: `100vh`,
  width: "100%",
  maxWidth: "2400px", //GridParent scrollbar width hack
  position: "fixed",
  pointerEvents: "none",
  willChange: "transform",
  display: "grid",
  gridTemplateColumns: "repeat(17, 1fr)",
};

const caseBg = {
  ...debugStyle,
  width: "100%",
  zIndex: -1,
  position: "absolute",
  bottom: 0,
  left: 0,
};

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

const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition, windowHeight, scrollProgress } =
    useCaseWrapperContext();

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
    useTransform(scrollProgress, (v) => updatePos(v)),
    settings.springOptions
  );

  const yNext = useSpring(
    useTransform(scrollProgress, (v) => updatePosNext(v)),
    settings.springOptions
  );

  const isActive = useTransform(scrollProgress, (v) => updatePos(v));
  const [isActiveState, setIsActiveState] = React.useState(false);

  React.useEffect(
    () =>
      isActive.onChange((e) => {
        setIsActiveState(e > -height(0) && e < 0);
      }),
    [isActive, height]
  );

  // -----CLICK TO SCROLLTO CASE-----
  const handleClick = () => {
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

  const Debugger = () => {
    return (
      debug && (
        <p
          sx={{
            mt: "-10px",
            fontFamily: "monospace",
            fontSize: 3,
            position: "fixed",
            top: (index + 1) * 17,
            left: 0,
            zIndex: 10000,
            px: 3,
          }}
        >
          <span
            sx={{
              bg: data?.bg,
              px: 3,
              color: data?.color,
              width: 210,
              mr: 20,
              display: "inline-block",
            }}
          >
            {data?.slug} — active: {isActiveState ? "[TRUE]" : "false"}{" "}
          </span>
          height: {Math.trunc(height(0))} pos: {Math.trunc(position(0))}px
        </p>
      )
    );
  };

  const gridCount = (arr) => data?.grid && data.grid[arr].split("span ")[1];

  return (
    <>
      <Debugger />
      {index === 0 ? (
        // -----HOME-----
        <m.div
          onClick={handleClick}
          ref={ref}
          style={{
            y: y,
          }}
          sx={{
            color: data?.color,
            backgroundColor: data?.bg,
            width: "100%",
            minHeight: "100%",
            position: "fixed",
            left: 0,
            top: `calc(100vh - ${0}px)`,
          }}
        >
          <Render data={data} />
        </m.div>
      ) : (
        // -----CASES-----
        <m.div
          id={data.slug}
          ref={ref}
          style={{
            x: "-50%",
            y: y,
          }}
          sx={{
            "--gridCount": [0, 0, `${gridCount(0)}`, `${gridCount(1)}`],
            "--caseBg": data.bg,
            ...caseParent,
            color: data?.color,
            zIndex: index,
            left: "50%",
          }}
        >
          <div
            onClick={!isActiveState ? handleClick : null}
            sx={{
              pointerEvents: "auto",
              position: "relative",
              gridColumn: ["span 12", null, data?.grid[0], data?.grid[1]],
            }}
          >
            <m.div
              style={{
                ...(index === 1 && {
                  top: settings.nextScrollDistance,
                  position: "relative",
                }),
                height: 300,
                y: yNext,
                willChange: "transform",
              }}
            >
              <CaseHero
                debug={debug}
                name={data?.name}
                forceRender={childHeight}
              />
            </m.div>
            <div
              sx={{
                ...caseBg,

                height: [
                  // `calc(100% - ${staggeredOffset}px)`,
                  `calc(100% - ${
                    300 -
                    2 -
                    (index !== 1 ? settings.nextScrollDistance : 0) +
                    staggeredOffset
                  }px)`,
                ],
                backgroundColor: data?.bg,
              }}
            ></div>

            <div
              sx={{
                display: "grid",
                gridTemplateColumns: [
                  `repeat(17, 1fr)`,
                  null,
                  `repeat(${gridCount(0)}, 1fr)`,
                  `repeat(${gridCount(1)}, 1fr)`,
                ],
                mb: "100vh",
                mt: "20vh",
                transition: "opacity 0.2s ease",
                ...(isActiveState
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0 }),
                // gridColumn: [
                //   `1 / span ${gridCount(1)}`,
                //   null,
                //   // `2 / span ${gridCount(0) - 2}`,
                //   // `2 / span ${gridCount(1) - 2}`,
                // ],
              }}
            >
              <div
                sx={{
                  transition: "opacity 0.2s ease",
                  ...(isActiveState
                    ? {
                        opacity: 1,
                      }
                    : { opacity: 0 }),
                  gridColumn: [
                    `1 / span 10`,
                    null,
                    `1 / span ${gridCount(0)}`,
                    `1 / span ${gridCount(1)}`,
                  ],
                }}
              >
                <Render />
              </div>
            </div>
          </div>
        </m.div>
      )}
      <ScrollToTopOnMount
        position={position(0)}
        height={height(0)}
        stagger={staggeredOffset}
        datavar={data.slug}
        index={index}
      />
    </>
  );
});

export default Case;
