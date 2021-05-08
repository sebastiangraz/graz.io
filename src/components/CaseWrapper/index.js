import React from "react";
import debounce from "lodash.debounce";
import {
  LazyMotion,
  domAnimation,
  transform,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const { scrollY } = useViewportScroll();

  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childHeight: [],
      childPosition: [],
      childSum: 0,
      progress: useMotionValue(0),
    }
  );

  React.useEffect(() => {
    const onResize = debounce(() => {
      console.log("debounced");
      const childHeightVar = children.map((child) => {
        return (
          child.ref.current && child.ref.current.getBoundingClientRect().height
        );
      });

      const childPosition = [];
      const childSum = childHeightVar.reduce((acc, child) => {
        childPosition.push(acc + child);
        return acc + child;
      }, 0);
      setCase({
        childHeight: childHeightVar,
        childPosition: childPosition,
        childSum: childSum,
        progress: scrollY,
      });
    }, 100);

    if (document.readyState === "complete") {
      // Safari needed to know if the document was ready
      onResize();
    } else {
      window.addEventListener("resize", onResize, { passive: true });
      window.addEventListener("load", onResize, { passive: true });
      return () => {
        window.removeEventListener("resize", onResize, { passive: true });
        window.removeEventListener("load", onResize, { passive: true });
      };
    }
  }, [children, scrollY]);

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
