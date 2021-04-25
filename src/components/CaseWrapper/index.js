import React from "react";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useMotionValue,
  motionValue,
  transform,
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
      childPositions.push([acc + v]);
      return acc + v;
    }, 0);

    const posValue = motionValue([]);

    const updatePos = (v) => {
      posValue.set(
        childPositions.map((childPosition, i) =>
          transform(
            v - childPosition + window.innerHeight + childHeight[i],
            [0, childHeight[i]],
            [0, 1]
          )
        )
      );
    };

    setCase({
      childpos: childPositions,
      childHeight: childHeight,
      totalHeight: totalHeightVar,
      scrollProgress: posValue,
    });

    const unsub = scrollY.onChange(updatePos);

    return () => {
      unsub();
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
