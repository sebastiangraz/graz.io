import React from "react";
import debounce from "lodash.debounce";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useMotionValue,
  motionValue,
  transform,
  animate,
  useTransform,
} from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childHeight: [],
      childPosition: [],
      childSum: 0,
    }
  );
  React.useEffect(() => {
    const RunOnResize = debounce(() => {
      const childpos = children.map((child) => {
        return child.ref.current.getBoundingClientRect().height;
      });
      setCase({ childHeight: childpos });
    }, 500);
    window.addEventListener("resize", RunOnResize, { passive: true });
    window.addEventListener("load", RunOnResize, { passive: true });
    return () => {
      window.removeEventListener("resize", RunOnResize, { passive: true });
      window.removeEventListener("load", RunOnResize, { passive: true });
    };
  }, [children]);

  React.useEffect(() => {
    const childPosition = [];
    const childSum = state.childHeight.reduce((acc, child) => {
      childPosition.push(acc + child);
      return acc + child;
    }, 0);
    setCase({
      childPosition: childPosition,
      childSum: childSum,
    });
  }, [state.childHeight]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        style={{
          height: state.childSum,
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
