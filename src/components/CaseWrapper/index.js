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
      childPosition: [],
      childHeight: [],
      childSummed: 0,
      scrollProgress: useMotionValue(0),
    }
  );

  React.useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      const childHeightArray = entries.map((entry) => {
        return entry.contentRect.height;
      });
      setCase({
        childHeight: childHeightArray,
      });
    });

    children.map((child) => ro.observe(child.ref.current));
  }, [children]);

  React.useEffect(() => {
    const childHeight = state.childHeight;
    const childPositions = [];
    const childsum = childHeight.reduce((acc, child) => {
      childPositions.push(acc + child);
      return acc + child;
    }, 0);
    const posValue = motionValue([]);
    const updatePos = (v) => {
      posValue.set(
        childPositions.map((childPosition, i) => {
          return transform(
            v - childPosition + window.innerHeight + childHeight[i],
            [0, childHeight[i]],
            [0, 1]
          );
        })
      );
    };

    setCase({
      childPosition: childPositions,
      scrollProgress: posValue,
      childSummed: childsum,
    });

    const unsub = scrollY.onChange(updatePos);

    return () => {
      unsub();
    };
  }, [scrollY, state.childHeight]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        style={{
          height: state.childSummed,
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
