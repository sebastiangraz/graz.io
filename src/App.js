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
import { Case } from "./Case";
const MyContext = React.createContext();

const Wrapper = ({ children }) => {
  return <div>{children}</div>;
};

const Loupe = () => {
  return (
    <Wrapper>
      <div sx={{ height: "1323px" }}>Loupe Content</div>
    </Wrapper>
  );
};
const Norse = () => {
  return (
    <Wrapper>
      <div sx={{ height: "1357px" }}>Norse Content</div>
    </Wrapper>
  );
};
const Canon = () => {
  return (
    <Wrapper>
      <div sx={{ height: "1983px" }}>Canon Content</div>
    </Wrapper>
  );
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
  const contentRef = React.useRef();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const docHeight = window.innerHeight;
    const contentHeight = contentRef.current.scrollHeight;
    setDocHeight(docHeight);
    setContentHeight(contentHeight);
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
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const [scrollArray, setScrollArray] = React.useState();

  React.useEffect(() => {
    const map = new Map(Object.entries(revealRefs.current));
    const remap = new Map(
      Array.from(map, ([k, v]) => [
        k,
        (v = transform(
          -Math.floor(v.getBoundingClientRect().y - docHeight),
          [0, v.getBoundingClientRect().height],
          [0, 1]
        )),
      ])
    );
    setScrollArray(remap);
  }, [scrollPosition, docHeight]);
  // console.log(scrollArray);
  // const motion = useMotionValue(scrollArray);

  return (
    <MyContext.Provider value={[]}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <span style={{ position: "fixed", right: 10, top: 10, zIndex: 10 }}>
            scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
            {scrollYProgress.get()}
          </span>

          <motion.div
            ref={contentRef}
            style={{
              y: scroll,
              top: 0,
              position: "fixed",
              display: "grid",
              justifyItems: "flex-end",
              width: "100%",
              height: "100%",
            }}
          >
            {[...cases.entries()].map(([k, v], index) => {
              let data = {
                key: k,
                val: v,
                index: index,
              };
              return (
                <div sx={{ width: "100%" }} ref={addToRefs} key={k}>
                  <Case
                    casedata={data}
                    caseScroll={scrollArray && scrollArray.get(`${index}`)}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </ThemeProvider>
    </MyContext.Provider>
  );
}
export default App;
