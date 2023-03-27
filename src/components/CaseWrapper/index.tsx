/** @jsxImportSource theme-ui */

import React, { useRef, useState, useReducer, useEffect } from "react";
import debounce from "lodash.debounce";
import { LazyMotion, domMax } from "framer-motion";
import { Debugger } from "../Debugger";

export const useCaseWrapperContext = () =>
  React.useContext(CaseWrapperContext) as State;

const CaseWrapperContext = React.createContext<State | null>(null);

const media_query = "screen and (min-width:640px)";

type State = {
  childHeight: number[];
  childPosition: number[];
  childSum: number;
  windowHeight: number;
};

type Action = {
  type: "update";
  payload: Partial<State>;
};

const reducer = (state: State, action: Action): State => {
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

  const updateChildHeight = (newChildHeight: number[]) => {
    dispatch({ type: "update", payload: { childHeight: newChildHeight } });
  };
  const updateChildPosition = (newChildPosition: number[]) => {
    dispatch({ type: "update", payload: { childPosition: newChildPosition } });
  };
  const updateChildSum = (newChildSum: number) => {
    dispatch({ type: "update", payload: { childSum: newChildSum } });
  };
  const updateWindowHeight = (newWindowHeight: number) => {
    dispatch({ type: "update", payload: { windowHeight: newWindowHeight } });
  };

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

        updateChildHeight(childHeights);
        updateChildPosition(offsetYs);
        updateChildSum(heightSum);
        updateWindowHeight(window.innerHeight);

        // setCase({
        //   childHeight: childHeights,
        //   childPosition: offsetYs,
        //   childSum: heightSum,
        //   windowHeight: window.innerHeight,
        // });
      }, 300);
      document.fonts.ready.then(function () {
        onResize();
      });
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, []);

  // React.useEffect(() => {
  //   const onResize = debounce(() => {
  //     const childHeightVar = children?.props.children.map((child) => {
  //       //get the height of the child
  //       return 1000;

  //       // return (
  //       //   child.ref.current && child.ref.current.getBoundingClientRect().height
  //       // );
  //     });

  //     console.log(childHeightVar);

  //     const childPosition = [];
  //     const childSum = childHeightVar.reduce((acc, child) => {
  //       childPosition.push(acc + child);
  //       return acc + child;
  //     }, 0);

  //     setCase({
  //       childHeight: childHeightVar,
  //       childPosition: childPosition,
  //       childSum: childSum,
  //       windowHeight: window.innerHeight,
  //     });
  //   }, 300);

  //   document.fonts.ready.then(function () {
  //     onResize();
  //   });

  //   window.addEventListener(
  //     "resize",
  //     debounce(() => {
  //       var matched = window.matchMedia(media_query).matches;
  //       if (matched) {
  //         onResize();
  //       }
  //     }, 300),
  //     { passive: true }
  //   );

  //   return () => {
  //     window.removeEventListener("resize", onResize, { passive: true });
  //   };
  // }, [children]);

  return (
    <LazyMotion features={domMax}>
      {/* <Debugger
        height={state.childHeight}
        position={state.childPosition}
        slug={"slug"}
      /> */}
      <div
        ref={parentRef}
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
