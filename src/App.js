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

const Wrapper = ({ children }) => {
  return <div sx={{ width: 320 }}>{children}</div>;
};

const Loupe = () => {
  return (
    <Wrapper>
      <div sx={{ height: 200, bg: "#0005" }}>Loupe Content</div>
    </Wrapper>
  );
};
const Norse = () => {
  return (
    <Wrapper>
      <div sx={{ height: 4000, bg: "#0005" }}>Norse Content</div>
    </Wrapper>
  );
};
const Canon = () => {
  return (
    <Wrapper>
      <div sx={{ height: 650, bg: "#0005" }}>Canon Content</div>
    </Wrapper>
  );
};

let data = new Map([
  ["loupe", { name: "Loupe", slug: "loupe", component: Loupe }],
  ["norse", { name: "Norse", slug: "norse", component: Norse }],
  ["canon", { name: "Canon", slug: "canon", component: Canon }],
]);

const Case = ({ data }) => {
  const Render = data.val.component;
  return (
    <>
      <h1>{data.val.name}</h1>
      <Render />
    </>
  );
};

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [docHeight, setDocHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const size = window.innerHeight;
    setDocHeight(size);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const springConfig = {
    damping: 20,
    stiffness: 200,
    mass: 0.4,
  };

  const { scrollYProgress } = useViewportScroll();

  const scroll = useSpring(
    useTransform(scrollYProgress, [0, 1], [300, 0]),
    springConfig
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <span style={{ position: "fixed", left: 10, top: 10 }}>
          scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
          {scrollYProgress.get()}
        </span>

        <div
          sx={{
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            position: "fixed",
          }}
        >
          <motion.div
            style={{ y: scroll }}
            sx={{
              position: "absolute",

              bg: "primary",
            }}
          >
            Lerp me
          </motion.div>
        </div>
        <div style={{ display: "grid", justifyItems: "flex-end" }}>
          {[...data.entries()].map(([k, v], index) => {
            let data = { key: k, val: v, index: index };
            return <Case data={data} key={k} />;
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
