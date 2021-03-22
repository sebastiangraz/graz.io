/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  useSpring,
  transform,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "./theme";
import Case from "./Case";
const MyContext = React.createContext();

const WrapperStyle = {
  width: "100%",
  bg: "#000a",
};

const Loupe = () => {
  return <div style={{ height: "2500px", ...WrapperStyle }}>Loupe Content</div>;
};
const Norse = () => {
  return <div style={{ height: "2000px", ...WrapperStyle }}>Norse Content</div>;
};
const Canon = () => {
  return <div style={{ height: "3500px", ...WrapperStyle }}>Canon Content</div>;
};

let cases = new Map([
  ["loupe", { name: "Loupe", slug: "loupe", component: Loupe }],
  ["norse", { name: "Norse", slug: "norse", component: Norse }],
  ["canon", { name: "Canon", slug: "canon", component: Canon }],
]);

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [docHeight, setDocHeight] = React.useState(0);
  const [contentHeight, setContentHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const docHeight = window.innerHeight;
    setDocHeight(docHeight);
  };

  React.useEffect(() => {
    let doc = document.body;
    doc.style.height = `${contentHeight}px`;
    return () => {
      doc.style.removeProperty("height");
    };
  });

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  });

  const springConfig = {
    stiffness: 800,
    damping: 50,
  };

  const { scrollYProgress } = useViewportScroll();

  const scroll = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -contentHeight + docHeight]),
    springConfig
  );

  const revealRefs = React.useRef([]);
  const [scrollArray, setScrollArray] = React.useState(new Map([]));

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }

  React.useEffect(() => {
    const heightArr = [];

    const heightmap = new Map(
      Array.from(Object.entries(revealRefs.current), ([k, v], i) => [
        i,
        v.getBoundingClientRect().height,
      ])
    );

    const totalHeight = [...heightmap.values()].reduce((acc, val) => {
      heightArr.push(acc + val);
      return acc + val;
    }, 0);

    heightArr.unshift(0);
    const map = new Map(
      Array.from(Object.entries(revealRefs.current), ([k, v], i) => [
        [...cases.values()][i].slug,

        transform(
          scrollPosition - heightArr[i] + docHeight >= 0 &&
            scrollPosition - heightArr[i] + docHeight >=
              v.getBoundingClientRect().height
            ? v.getBoundingClientRect().height
            : scrollPosition - heightArr[i] + docHeight >= 0
            ? scrollPosition - heightArr[i] + docHeight
            : 0,
          [0, v.getBoundingClientRect().height],
          [0, 100]
        ),
      ])
    );

    setContentHeight(totalHeight);
    setScrollArray(map);
  }, [docHeight, scrollPosition]);

  console.log(scrollArray);
  return (
    <MyContext.Provider value={[]}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <span style={{ position: "fixed", right: 10, top: 10, zIndex: 10 }}>
            scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
            {scrollYProgress.get().toFixed(2)} | contentHeight : {contentHeight}{" "}
          </span>

          {[...cases.entries()].map(([k, v], index) => {
            let data = {
              key: k,
              val: v,
              index: index,
            };

            return (
              <Case
                key={k}
                ref={addToRefs}
                casedata={data}
                caseScroll={
                  scrollArray &&
                  scrollArray.get(Array.from(scrollArray.keys())[index])
                }
              />
            );
          })}
        </div>
      </ThemeProvider>
    </MyContext.Provider>
  );
}
export default App;
