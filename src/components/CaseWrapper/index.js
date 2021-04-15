/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import { debounce } from "lodash";
import { motion } from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childpos, setChildpos] = React.useState([]);
  const [totalHeight, setTotalHeight] = React.useState(0);

  React.useEffect(() => {
    const childPosition = [];

    const getEl = children.map((e, index) => {
      return {
        index: index,
        height: e && e.ref.current.getBoundingClientRect().height,
      };
    });

    const totalHeight = getEl.reduce((acc, v) => {
      childPosition.push(acc + v.height);
      return acc + v.height;
    }, 0);

    const handleResize = debounce(() => {
      setTotalHeight(totalHeight);
      setBrowserHeight(window.innerHeight);
    }, 100);

    setChildpos(childPosition);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
      window.removeEventListener("load", handleResize, { passive: true });
    };
  }, [children]);

  return (
    <motion.div
      style={{
        height: totalHeight,
      }}
    >
      <CaseWrapperContext.Provider
        value={{
          childpos,
          browserHeight: browserHeight,
        }}
      >
        {children}
      </CaseWrapperContext.Provider>
    </motion.div>
  );
};

export { CaseWrapper, useCaseWrapperContext };
