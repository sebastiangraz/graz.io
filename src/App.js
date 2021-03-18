/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";
import React from "react";
import {
  useMotionValue,
  motion,
  transform,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { ScrollPercentage } from "react-scroll-percentage";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "./theme";

const Loupe = () => {
  return <div sx={{ height: 200, bg: "#0005" }}>Loupe Content</div>;
};
const Norse = () => {
  return <div sx={{ height: 4000, bg: "#0005" }}>Norse Content</div>;
};
const Canon = () => {
  return <div sx={{ height: 650, bg: "#0005" }}>Canon Content</div>;
};

let data = new Map([
  ["loupe", { name: "Loupe", slug: "loupe", component: Loupe }],
  ["norse", { name: "Norse", slug: "norse", component: Norse }],
  ["canon", { name: "Canon", slug: "canon", component: Canon }],
]);

const Case = ({ data }) => {
  const Render = data.val.component;
  return <Render sx={{ width: "100%" }} />;
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

  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <span style={{ position: "fixed", left: 10, top: 10 }}>
          scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
          {scrollYProgress.get()}
        </span>

        <div className="scroll-indicator">
          <div className="bar"></div>
          <motion.span
            id="indicator"
            style={{ x }}
            sx={{
              position: "absolute",
              width: 3,
              bg: "primary",
              height: 1,
              // transform: `translateX(${percentage}px)`,
            }}
            className="indicator"
          ></motion.span>
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
