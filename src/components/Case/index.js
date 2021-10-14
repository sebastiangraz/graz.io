/** @jsxImportSource theme-ui */

import React from "react";
import { m, useSpring, transform, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";
import { Debugger } from "../";

const debug = false;

const settings = {
  nextScrollDistance: 100,
  staggerPower: 0.6,
  springOptions: {
    damping: 7,
    mass: 0.07,
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
  maxWidth: "2395px", //GridParent scrollbar width hack
  position: "fixed",
  pointerEvents: "none",
  willChange: "transform",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
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

  const gridCount = (arr) => data?.grid && data.grid[arr].split("span ")[1];

  return (
    <>
      <Debugger
        data={data}
        index={index}
        height={height}
        position={position}
        isActiveState={isActiveState}
        debug={debug}
      />
      {index === 0 ? (
        // -----HOME-----
        <m.div
          onClick={handleClick}
          ref={ref}
          style={{
            y: y,
            color: data?.color,
            backgroundColor: data?.bg,
          }}
          sx={{
            width: "100%",
            minHeight: "100%",
            position: "fixed",
            left: 0,
            top: `calc(100vh)`,
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
            "--gridCount": [12, 12, `${gridCount(0)}`, `${gridCount(1)}`],
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
              className="background-layer"
              style={{
                height: [
                  `calc(100% - ${
                    300 -
                    2 -
                    (index !== 1 ? settings.nextScrollDistance : 0) +
                    staggeredOffset
                  }px)`,
                ],
                backgroundColor: data?.bg,
              }}
              sx={{
                ...caseBg,
              }}
            ></div>

            <div
              style={{
                ...(isActiveState
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0 }),
              }}
              sx={{
                mb: "100vh",
                mt: "20vh",
                transition: "opacity 0.2s ease",
              }}
            >
              <Render data={data} />
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
