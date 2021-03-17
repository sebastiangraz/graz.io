import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useScrollPercentage, ScrollPercentage } from "react-scroll-percentage";

let data = new Map([
  ["loupe", { name: "Loupe", slug: "loupe" }],
  ["norse", { name: "Norse", slug: "norse" }],
  ["canon", { name: "Canon", slug: "canon" }],
]);

const caseStyle = {
  height: 3000,
  display: "flex",
};

const Case = ({ data }) => {
  console.log();
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
              height: `${data.index * 400 + 2000}px`,
            }}
          >
            <div
              style={{
                bottom: 0,
                position: distanceBeyondBottom > 0 ? "fixed" : "relative",
                zIndex: data.index,
                width: `calc(100% - ${data.index * 80}px)`,
                height: `${data.index * 400 + 2000}px`,
                background: `linear-gradient(hsl(${
                  data.index * 50 + 200
                }, 80%, 40%), #f00)`,
              }}
            >
              <p
                style={{ position: "sticky", top: 20, left: "45%", height: 30 }}
              >
                <h1
                  style={{ fontSize: 90 }}
                >{`Scrolled: ${percentage.toPrecision(2)}`}</h1>
                <h3>{distanceBeyondBottom > 0 ? "fixed" : "relative"}</h3>
              </p>
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
  );
}

export default App;
