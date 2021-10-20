/** @jsxImportSource theme-ui */

import React from "react";
import debounce from "lodash.debounce";
import { LazyMotion, domMax } from "framer-motion";

export const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapperContext = React.createContext(null);

const media_query = "screen and (min-width:640px)";

const MemoCaseWrapper = ({ children }) => {
  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childHeight: [],
      childPosition: [],
      childSum: 0,
      windowHeight: 0,
    }
  );

  React.useEffect(() => {
    const onResize = debounce(() => {
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
        windowHeight: window.innerHeight,
      });
    }, 300);

    document.fonts.ready.then(function () {
      onResize();
    });

    window.addEventListener(
      "resize",
      debounce(() => {
        var matched = window.matchMedia(media_query).matches;
        if (matched) {
          onResize();
        }
      }, 300),
      { passive: true }
    );

    return () => {
      window.removeEventListener("resize", onResize, { passive: true });
    };
  }, [children]);

  return (
    <LazyMotion features={domMax}>
      <div
        sx={{
          height: ["auto", state.childSum],
        }}
      >
        <CaseWrapperContext.Provider value={state}>
          {children}
        </CaseWrapperContext.Provider>
      </div>
    </LazyMotion>
  );
};

export const CaseWrapper = React.memo(MemoCaseWrapper);
