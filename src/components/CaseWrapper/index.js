/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childData, setChildData] = React.useState({});
  const [totalHeight, setTotalHeight] = React.useState(0);
  const [threshold, setThreshold] = React.useState(false);

  useScrollPosition(({ currPos }) => {
    setThreshold(currPos.y < -100);
  });

  React.useLayoutEffect(() => {
    const handleResize = debounce(
      () => setBrowserHeight(window.innerHeight),
      100
    );
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  });

  React.useEffect(() => {
    const heightArr = [];

    const getEl = children.map((e, index) => {
      return {
        index: index,
        height: e && e.ref.current.getBoundingClientRect().height,
      };
    });

    const totalHeight = getEl.reduce((acc, v) => {
      heightArr.push(acc + v.height);
      return acc + v.height;
    }, 0);

    setTotalHeight(totalHeight);
    setChildData({
      heightArr: heightArr,
    });
  }, [children]);

  return React.useMemo(
    () => (
      <motion.div
        style={{
          height: totalHeight,
        }}
      >
        <CaseWrapperContext.Provider
          value={{
            childData: childData,
            browserHeight: browserHeight,
            threshold: threshold,
          }}
        >
          {children}
        </CaseWrapperContext.Provider>
      </motion.div>
    ),
    [browserHeight, childData, children, threshold, totalHeight]
  );
};

export { CaseWrapper, useCaseWrapperContext };
