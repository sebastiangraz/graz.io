import React from "react";
import { debounce } from "lodash";
import { LazyMotion, domAnimation, useMotionValue } from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childpos: [],
      childHeight: [],
      totalHeight: 0,
      browserHeight: 0,
    }
  );

  React.useEffect(() => {
    const childPosition = [];

    const ro = new ResizeObserver((entries) => {
      const childHeightArray = entries.map((entry) => {
        return entry.contentRect.height;
      });
      console.log(childHeightArray);
      setCase({
        childHeight: childHeightArray,
      });
    });

    const getEl = children.map((e) => {
      ro.observe(e && e.ref.current);
      return e && e.ref.current.getBoundingClientRect().height;
    });

    const totalHeightVar = getEl.reduce((acc, v) => {
      childPosition.push(acc + v);
      return acc + v;
    }, 0);

    setCase({
      childpos: childPosition,
      totalHeight: totalHeightVar,
    });

    // put state.browserHeight in here to trigger rerender of
    // this useEffect which in turn triggers recalc of all the
    // children elements, in theory
  }, [children]);
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
