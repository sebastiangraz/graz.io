import React from "react";
import { debounce } from "lodash";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useMotionValue,
  motionValue,
} from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childpos: [],
      childHeight: [],
      totalHeight: 0,
      browserHeight: 0,
      scrollProgress: useMotionValue(0),
      scrollProgress2: useMotionValue(0),
    }
  );

  React.useEffect(() => {
    const childPositions = [];
    const childHeight = [];

    const getEl = children.map(
      (e) => e && e.ref.current.getBoundingClientRect().height
    );

    const totalHeightVar = getEl.reduce((acc, v) => {
      childHeight.push(v);
      childPositions.push(acc + v);
      return acc + v;
    }, 0);

    const posValue = motionValue([]);

    const updatePos = (v) => {
      const test = childPositions.map(
        (childPosition, i) => v - childPosition + childHeight[i]
      );
      posValue.set(test);
    };

    scrollY.onChange(updatePos);

    setCase({
      childpos: childPositions,
      childHeight: childHeight,
      totalHeight: totalHeightVar,
      scrollProgress: scrollY,
      scrollProgress2: posValue,
    });

    const handleResize = debounce(() => {
      setCase({
        browserHeight: window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
      window.removeEventListener("load", handleResize, { passive: true });
    };
  }, [children, scrollY]);
  return (
    <LazyMotion features={domAnimation} strict>
      <div
        style={{
          height: state.totalHeight,
        }}
      >
        <CaseWrapperContext.Provider value={state}>
          {children}
        </CaseWrapperContext.Provider>
      </div>
    </LazyMotion>
  );
};

export { CaseWrapper, useCaseWrapperContext };
