/** @jsxImportSource theme-ui */

import React from "react";
import { m, useSpring, transform, useTransform } from "framer-motion";
import { useCaseWrapperContext, CaseHero } from "../";
import { useResponsiveValue } from "@theme-ui/match-media";
import { useThemeUI } from "theme-ui";

const settings = {
  nextScrollDistance : 60,
  staggerPower: 0.75,
  springOptions: { damping: 10, mass: 0.2  }
}
 
const caseParent = {
  top: `100vh`,
  position: "fixed",
  willChange: "transform",
  right: 0,
};

const caseBg = {
  // borderBottom: "5px solid ",
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
        window.scrollTo(0, position - height - (index !== 1 && settings.nextScrollDistance) + stagger);
      }
    });
  }, [datavar, height, index, position, stagger]);
  return null;
}

export const Case = React.forwardRef(({ index, data }, ref) => {
  let { childHeight, childPosition, windowHeight, scrollProgress } =
    useCaseWrapperContext();

  const context = useThemeUI();
  const responsiveOffset = useResponsiveValue([50, 75, 160, 300]);
  const Render = data.component;
  const height = React.useCallback((pos) => childHeight[pos ? index - pos : index] || [], [childHeight, index]);
  const position = (pos) => childPosition[pos ? index - pos : index] || [];
  const offset = (responsiveOffset / (index + 1)) * settings.staggerPower;
  const staggeredOffset =
    index !== 0 ? -childPosition.length * offset + index * offset : 0;

  // -----POSITION-----
  const updatePos = (v) => {
    const progress =
      v - position(0) + height(0) + windowHeight;

    return transform(
      progress,
      [0, height(0)],
      [0, -height(0)]
    );
  };

  const updatePosNext = (v) => {
    const progress = v - position(1) + height(1);
    return transform(
      progress,
      [-windowHeight , height(1) - windowHeight],
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

  const isActive = useTransform(scrollProgress, (v) => updatePos(v))
  const [isActiveState, setIsActiveState] = React.useState(false);

  React.useEffect(() => isActive.onChange(e => {
    setIsActiveState(e > -height(0) && e < 0);
  }), [isActive, height])



  // -----CLICK TO SCROLLTO CASE-----
  const handleClick = () => {
    if (index !== 0) {
      window.history.replaceState(null, null, `#${data.slug}`);
    } else {
      window.history.replaceState(null, null, " ");
    }
    window.scrollTo(0, position(0) - height(0) - (index !== 1 && settings.nextScrollDistance) + staggeredOffset);
  };

  
  return (
    <>
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
          <Render />
        </m.div>
      ) : (
        // -----CASES-----
        <m.div
          id={`#${data.slug}`}
          ref={ref}
          onClick={!isActiveState && handleClick}
          style={{
            y: y,
          }}
          sx={{
            ...caseParent,
            color: data?.color,
            zIndex: index,
            width: ["100%", `calc(min(100%, 1495px) - ${index * context.theme.space[9]}px)`],
            "&:nth-of-type(odd)": {
              left: 0,
            },
          }}
        >
          {console.log("render child :(")}
          <m.div
           style={{
              ...(index === 1 ) && {
                top: settings.nextScrollDistance, 
                position:"relative"
              },
              y: yNext,
              willChange: "transform",
            }}>
     
            <CaseHero bg={data?.bg} name={data?.name} padding={context.theme.space[9]}/>
          </m.div>
          <div
            sx={{
              ...caseBg,
                //300 - 2 is to prevent subpixel distance between the hero
              height: `calc(100% - ${(300 - 2) - settings.nextScrollDistance + staggeredOffset}px)`, 
              backgroundColor: data?.bg,
            }}
          >
          </div>

          <div sx={{ my: "100vh" }}>
            <Render />
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
