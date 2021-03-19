/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "./theme";

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
      <div sx={{ height: "200vh" }}>Loupe Content</div>
    </Wrapper>
  );
};
const Norse = () => {
  return (
    <Wrapper>
      <div sx={{ height: "150vh" }}>Norse Content</div>
    </Wrapper>
  );
};
const Canon = () => {
  return (
    <Wrapper>
      <div sx={{ height: "100vh" }}>Canon Content</div>
    </Wrapper>
  );
};

let data = new Map([
  ["loupe", { name: "Loupe", slug: "loupe", component: Loupe }],
  ["norse", { name: "Norse", slug: "norse", component: Norse }],
  ["canon", { name: "Canon", slug: "canon", component: Canon }],
]);

const Case = ({ data, scroll }) => {
  const Render = data.val.component;
  const y = { y: scroll };
  const [ref, { height }] = useDimensions();

  return (
    <motion.div
      ref={ref}
      style={y}
      sx={{
        width: "100%",
        p: 4,
        background: `hsl(${data.index * 50 + 200}, 80%, 75%)`,
      }}
    >
      {height}
      <h1 sx={{ fontSize: 80, lineHeight: 1.1 }}>{data.val.name}</h1>
      <Render />
    </motion.div>
  );
};

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

  const map1 = new Map();

  [...data.entries()].map(([k, v], index) => {
    let i = index * 500;
    return map1.set(k, scroll.get() + i);
  });

  const [height, setHeight] = React.useState(null);
  const value = [height, setHeight];

  return (
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
            {[...data.entries()].map(([k, v], index) => {
              let data = { key: k, val: v, index: index, height: value };
              return <Case data={data} scroll={scroll} key={k} />;
            })}
          </div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
