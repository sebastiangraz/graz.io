/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [childData, setChildData] = React.useState({});
  const [totalHeight, setTotalHeight] = React.useState(0);
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
    }, 0); // totalheight

    setTotalHeight(totalHeight);
    setChildData({
      heightArr: heightArr,
    });
  }, [children]);

  return (
    <div style={{ height: totalHeight }}>
      <CaseWrapperContext.Provider value={childData}>
        {children}
      </CaseWrapperContext.Provider>
    </div>
  );
};

export { CaseWrapper, useCaseWrapperContext };
