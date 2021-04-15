/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import { debounce } from "lodash";
import { motion } from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [browserHeight, setBrowserHeight] = React.useState(0);
  const [childpos, setChildpos] = React.useState([]);
  const [childHeight, setChildHeight] = React.useState([]);
  const [totalHeight, setTotalHeight] = React.useState(0);

  React.useEffect(() => {
    const childPosition = [];
    const childHeight = [];

    const getEl = children.map(
      (e) => e && e.ref.current.getBoundingClientRect().height
    );

    const totalHeight = getEl.reduce((acc, v) => {
      childHeight.push(v);
      childPosition.push(acc + v);
      return acc + v;
    }, 0);

    const handleResize = debounce(() => {
      setTotalHeight(totalHeight);
      setBrowserHeight(window.innerHeight);
    }, 100);

    setChildpos(childPosition);
    setChildHeight(childHeight);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
      window.removeEventListener("load", handleResize, { passive: true });
    };
  }, [children, totalHeight]);

  return (
    <motion.div
      style={{
        height: totalHeight,
      }}
    >
      <CaseWrapperContext.Provider
        value={{
          childpos,
          childHeight,
          browserHeight,
        }}
      >
        {children}
      </CaseWrapperContext.Provider>
    </motion.div>
  );
};

export { CaseWrapper, useCaseWrapperContext };
