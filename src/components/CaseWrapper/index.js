import React from "react";
import debounce from "lodash.debounce";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useMotionValue,
  motionValue,
  transform,
  useTransform,
} from "framer-motion";

const CaseWrapperContext = React.createContext(null);
const useCaseWrapperContext = () => React.useContext(CaseWrapperContext);

const CaseWrapper = ({ children }) => {
  const { scrollY } = useViewportScroll();

  // const [state, setCase] = React.useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     childPosition: [],
  //     childHeight: [],
  //     childSummed: 0,
  //     scrollProgress: useMotionValue(0),
  //   }
  // );
  const [childHeight, setChildHeight] = React.useState([]);
  const [childPos, setChildPos] = React.useState([]);
  //Get Children Heights//

  React.useEffect(() => {
    const childSize = debounce(() => {
      children.reduce((acc, child, i, arr) => {
        const v = child.ref.current.getBoundingClientRect().height;

        // setChildPos(acc + v);
        setChildHeight(v);
        return child.ref.current.getBoundingClientRect().height;
      }, 0);
    }, 100);
    window.addEventListener("resize", childSize, { passive: true });
    window.addEventListener("load", childSize, { passive: true });
  }, [children]);

  console.log(childHeight);

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

  // React.useEffect(() => {
  //   setCase({
  //     scrollProgress: posValue,
  //   });
  // }, [posValue]);

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

    /* onChange is needed to update our MotionValues */
    // const unsub = scrollY.onChange(updatePos);

    return () => {
      // unsub();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        style={{
          height: 3000,
          // height: state.childSummed,
        }}
      >
        {/* <CaseWrapperContext.Provider value={state}> */}
        {children}
        {/* </CaseWrapperContext.Provider> */}
      </div>
    </LazyMotion>
  );
};

export { CaseWrapper, useCaseWrapperContext };
