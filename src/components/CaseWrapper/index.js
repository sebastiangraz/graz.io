import React from "react";
import debounce from "lodash.debounce";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useMotionValue,
  motionValue,
  transform,
  animate,
  useTransform,
} from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const [state, setCase] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      childHeight: [],
      childPosition: [],
      childSum: 0,
    }
  );

  // const prog = useMotionValue([]);

  // React.useEffect(() => {
  //   const update = (v) => {
  //     const pos = childPosition.map((childpos, i) => {
  //       return transform(
  //         v - childpos + childHeight[i],
  //         [0, childHeight[i] - childHeight[0]],
  //         [0, -childHeight[i]]
  //       );
  //     });
  //     prog.set(pos);
  //   };
  //   return scrollY.onChange((v) => update(v));
  // }, [childHeight, childPosition, prog, scrollY]);

  React.useEffect(() => {
    const RunOnResize = debounce(() => {
      const childpos = children.map((child) => {
        return child.ref.current.getBoundingClientRect().height;
      });
      setCase({ childHeight: childpos });
    }, 500);
    window.addEventListener("resize", RunOnResize, { passive: true });
    window.addEventListener("load", RunOnResize, { passive: true });
    return () => {
      window.removeEventListener("resize", RunOnResize, { passive: true });
      window.removeEventListener("load", RunOnResize, { passive: true });
    };
  }, [children]);

  React.useEffect(() => {
    const childPosition = [];
    const childSum = state.childHeight.reduce((acc, child) => {
      childPosition.push(acc + child);
      return acc + child;
    }, 0);
    setCase({
      childPosition: childPosition,
      childSum: childSum,
    });
  }, [state.childHeight]);

  // const scrollProgress = useMotionValue([]);

  // React.useEffect(() => {
  //   const pos = childPosition.map((childpos, i) => {
  //     return transform(childpos, [0, 1000], [0, -1000]);
  //   });
  //   scrollProgress.set(pos);
  // }, [childPosition, scrollProgress, scrollY]);

  // console.log(scrollProgress);

  // React.useEffect(() => {
  //   const updatePos = (v) => {
  //     const pos = childPosition.map((childpos, i) => {
  //       return transform(v - childpos, [0, 1000], [0, -1000]);
  //     });
  //     console.log(pos);
  //   };

  //   scrollY.onChange(updatePos);
  // }, [childPosition, scrollY]);

  // useTransform(scrollY, (v) => {
  //   childPosition.forEach((element, i) => {
  //     console.log(v - element);
  //     // return v - element[i];
  //   });
  //   // return value;
  // });

  // console.log(childHeight);
  // const childsum = childHeight.reduce((acc, child) => {
  //   console.log(acc + child);

  //   return acc + child;
  // }, 0);

  // console.log(childHeight);

  //Get Children Positions//
  // React.useEffect(() => {
  //   const childPositions = [];
  //   [].reduce((acc, child) => {
  //     childPositions.push(acc + child);
  //     return acc + child;
  //   }, 0);
  // }, []);

  //Send position to CHILD//
  // const posValue = useTransform(scrollY, (v) => {
  //   const value = state.childPosition.forEach((element, i) => {
  //     console.log(element[i]);
  //     return v - element[i];
  //   });
  //   return -value;
  // });

  React.useEffect(() => {
    /* This useEffect handles getting the height of all children, 
    and getting the artificial top position as if they were relative elements */

    // const childHeight = state.childHeight;
    // const childPositions = [];
    // const childsum = childHeight.reduce((acc, child) => {
    //   childPositions.push(acc + child);
    //   return acc + child;
    // }, 0);

    /* UpdatePos function returns a number between 0-1 depending on the scroll progress
    eg; [ 1,0.233,0,0 ], stored in a motion value to prevent re-render*/
    // const posValue = motionValue([]);
    // const updatePos = (v) => {
    //   const pos = children.map((child, i) => {
    //     return transform(v, [0, childHeight[i]], [0, 100]);
    //   });
    //   posValue.set(pos);
    // };

    // setCase({
    //   childPosition: childPositions,
    //   // scrollProgress: posValue,
    //   childSummed: childsum,
    // });

    /* onChange is needed to update our MotionValues, maybe */
    // const unsub = scrollY.onChange(updatePos);
    return () => {
      // unsub();
    };
  }, []);

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
