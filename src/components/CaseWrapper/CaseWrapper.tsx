/** @jsxImportSource theme-ui */

import React, { useRef, useReducer, useEffect } from "react";
import debounce from "lodash.debounce";
import { LazyMotion, domMax } from "framer-motion";
import { CaseWrapperContext } from "@/hooks/useCaseWrapperContext";
type Action = {
  type: "update";
  payload: Partial<CaseWrapperState>;
};

const reducer = (state: CaseWrapperState, action: Action): CaseWrapperState => {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const MemoCaseWrapper = ({ children }: { children: React.ReactNode }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, {
    childHeight: [],
    childPosition: [],
    childSum: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    if (parentRef.current) {
      const onResize = debounce(() => {
        const childrenArray = Array.from(parentRef.current?.children || []);
        let heightSum = 0;
        const offsetYs = [] as number[];
        const childHeights = [] as number[];

        childrenArray.forEach((child) => {
          const node = child as HTMLElement;
          offsetYs.push(heightSum);
          childHeights.push(node.offsetHeight);
          heightSum += node.offsetHeight;
        });

        dispatch({ type: "update", payload: { childHeight: childHeights } });
        dispatch({ type: "update", payload: { childPosition: offsetYs } });
        dispatch({ type: "update", payload: { childSum: heightSum } });
        dispatch({
          type: "update",
          payload: { windowHeight: window.innerHeight },
        });
      }, 300);
      document.fonts.ready.then(function () {
        onResize();
      });
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [state.windowHeight]);

  return (
    <LazyMotion features={domMax}>
      <div
        ref={parentRef}
        sx={{
          display: "grid",
          justifyItems: "center",
          height: ["auto", state.childSum],
        }}
      >
        <CaseWrapperContext.Provider value={state}>{children}</CaseWrapperContext.Provider>
      </div>
    </LazyMotion>
  );
};

export const CaseWrapper = React.memo(MemoCaseWrapper);

export type CaseWrapperState = {
  childHeight: number[];
  childPosition: number[];
  childSum: number;
  windowHeight: number;
};
