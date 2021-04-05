/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import { debounce } from "lodash";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [childData, setChildData] = React.useState({});
  const [totalHeight, setTotalHeight] = React.useState(0);

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

  return (
    <div style={{ height: totalHeight }}>
      <CaseWrapperContext.Provider
        value={{ childData: childData, browserHeight: browserHeight }}
      >
        {children}
      </CaseWrapperContext.Provider>
    </div>
  );
};

export { CaseWrapper, useCaseWrapperContext };
