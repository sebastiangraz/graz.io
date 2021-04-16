import React from "react";
import { debounce } from "lodash";
import { motion } from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [state, setState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { childpos: [], childHeight: [], totalHeight: 0, browserHeight: 0 }
  );

  React.useEffect(() => {
    const childPosition = [];
    const childHeight = [];

    const getEl = children.map(
      (e) => e && e.ref.current.getBoundingClientRect().height
    );

    const totalHeightVar = getEl.reduce((acc, v) => {
      childHeight.push(v);
      childPosition.push(acc + v);
      return acc + v;
    }, 0);

    setState({
      childpos: childPosition,
      childHeight: childHeight,
      totalHeight: totalHeightVar,
    });

    const handleResize = debounce(() => {
      setState({
        browserHeight: window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
      window.removeEventListener("load", handleResize, { passive: true });
    };
  }, [children, state.browserHeight]);

  return (
    <motion.div
      style={{
        height: state.totalHeight,
      }}
    >
      <CaseWrapperContext.Provider value={{ ...state }}>
        {children}
      </CaseWrapperContext.Provider>
    </motion.div>
  );
};

export { CaseWrapper, useCaseWrapperContext };
