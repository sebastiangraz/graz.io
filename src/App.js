/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";
import React from "react";
import { ScrollPercentage } from "react-scroll-percentage";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "./theme";

const Loupe = () => {
  return <div sx={{ height: 900, bg: "#0005" }}>Loupe Content</div>;
};
const Norse = () => {
  return <div style={{ height: 3402, bg: "#0005" }}>Norse Content</div>;
};
const Canon = () => {
  return <div style={{ height: 7000, bg: "#0005" }}>Canon Content</div>;
};

let data = new Map([
  ["loupe", { name: "Loupe", slug: "loupe", component: Loupe }],
  ["norse", { name: "Norse", slug: "norse", component: Norse }],
  ["canon", { name: "Canon", slug: "canon", component: Canon }],
]);

const caseStyle = {
  display: "flex",
};

const Case = ({ data }) => {
  const Render = data.val.component;
  return (
    <ScrollPercentage>
      {({ percentage, ref, entry }) => {
        let dimensions = {
          top: entry && entry.target.getBoundingClientRect().top,
          bottom: entry && entry.target.getBoundingClientRect().bottom,
          y: entry && entry.target.getBoundingClientRect().y,
          height: entry && entry.target.getBoundingClientRect().height,
        };
        let distanceBeyondBottom =
          -(dimensions.top - window.innerHeight) - dimensions.height;
        return (
          <div
            ref={ref}
            style={{
              ...caseStyle,
              width: "100%",
              height: `${data.index * 400 + 3000}px`,
            }}
          >
            <div
              style={{
                bottom: 0,
                position: distanceBeyondBottom > 0 ? "fixed" : "relative",
                zIndex: data.index,
                width: `calc(100% - ${data.index * 80}px)`,
                height: `inherit`,
                background: `linear-gradient(hsl(${
                  data.index * 50 + 200
                }, 80%, 40%), #f00)`,
              }}
            >
              <div
                sx={{
                  bg: "#0009",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "pill",
                  height: 3000,
                  color: "#fff",
                }}
              >
                Content
              </div>
              <div
                sx={{
                  position: "sticky",
                  top: 0,
                  ml: 40,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  sx={{ fontSize: 90, m: 0 }}
                >{`Scrolled: ${percentage.toPrecision(2)}`}</h1>
                <h3>
                  {distanceBeyondBottom > 0 ? "Fixed" : "Relative"}
                  {" · " + distanceBeyondBottom}
                </h3>
              </div>
            </div>
          </div>
        );
      }}
    </ScrollPercentage>
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <span style={{ position: "fixed", left: 10, top: 10 }}>
          scroll: {scrollPosition} | height: {docHeight}
        </span>
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
