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
    const childPositions = [];
    const childHeights = [];

    document.fonts.ready.then(() => {
      childSum();
    });

    function childSum() {
      const childsum = children.reduce((acc, child) => {
        child = child.ref.current.getBoundingClientRect().height;
        childPositions.push(acc + child);
        childHeights.push(child);
        return acc + child;
      }, 0);
      setCase({
        childSummed: childsum,
      });
    }

    const posValue = motionValue([]);

    const updatePos = (v) => {
      posValue.set(
        childPositions.map((childPosition, i) =>
          transform(
            v - childPosition + window.innerHeight + childHeights[i],
            [0, childHeights[i]],
            [0, 1]
          )
        )
      );
    };

    setCase({
      childPosition: childPositions,
      childHeight: childHeights,
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
