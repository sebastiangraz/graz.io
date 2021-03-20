/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
  useElementScroll,
  transform,
} from "framer-motion";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "./theme";
import { Case } from "./Case";
import { useScrollPercentage } from "react-scroll-percentage";
const MyContext = React.createContext();

function useDimensions() {
  const ref = React.useRef();
  const [dim, setDim] = React.useState({});
  React.useLayoutEffect(() => {
    setDim(ref.current.getBoundingClientRect().toJSON());
  }, [setDim]);
  return [ref, dim];
}

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
    stiffness: 320,
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

  const map1 = new Map();

  [...cases.entries()].map(([k, v], index) => {
    let i = index * 500;
    return map1.set(k, scroll.get() + i);
  });

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    let scrollarr = Math.floor(scroll.get());
    const map = new Map(Object.entries(revealRefs.current));
    const remap = new Map(
      Array.from(map, ([k, v]) => [
        k,
        (v = scrollarr + v.getBoundingClientRect().y - docHeight),
      ])
    );

    console.log(remap);
  });

  // console.log(map1);

  // React.useEffect(() => {
  //   const childMap = new Map();
  //   revealRefs.current.forEach((el, index) => {
  //     childMap.set("test", el.scrollHeight);
  //     console.log(childMap);
  //   });
  // }, []);

  return (
    <MyContext.Provider value={[]}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <span style={{ position: "fixed", right: 10, top: 10, zIndex: 10 }}>
            scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
            {scrollYProgress.get()}
          </span>

          <motion.div
            sx={{
              top: 0,
              height: "100%",
              width: "100%",
              position: "fixed",
            }}
          >
            <div
              ref={contentRef}
              style={{
                position: "fixed",
                display: "grid",
                justifyItems: "flex-end",
                width: "100%",
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
                    <Case casedata={data} scroll={scroll} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </ThemeProvider>
    </MyContext.Provider>
  );
}
export default App;
