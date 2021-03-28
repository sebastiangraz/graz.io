/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";

import {
  transform,
  useTransform,
  motion,
  useViewportScroll,
  useSpring,
} from "framer-motion";

import { Case, Logo } from "../components";
import { jsx, Text, Grid } from "theme-ui";
import { Loupe, Norse, Canon } from "../pages";

import "../base.css";

let settings = { debug: true, offset: 140 };

let cases = new Map([
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Loupe,
      bg: "#184629", //184629
      color: "#e8e0d6", //e8e0d6
    },
  ],
  [
    "norse",
    {
      name: "Norse",
      slug: "norse",
      component: Norse,
      bg: "black",
      color: "#fff",
    },
  ],

  ["canon", { name: "Canon", slug: "canon", component: Canon, bg: "#DE0000" }],
]);

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [docHeight, setDocHeight] = React.useState(0);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    let doc = document.body;
    doc.style.height = `${contentHeight}px`;
    return () => {
      doc.style.removeProperty("height");
    };
  }, [contentHeight]);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const docHeight = window.innerHeight;
      setDocHeight(docHeight);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const revealRefs = React.useRef([]);
  const [scrollArray, setScrollArray] = React.useState(new Map([]));

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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

    function clampedValues(v, i, heightArr) {
      let pixels =
        scrollPosition - heightArr[i] >= 0 &&
        scrollPosition - heightArr[i] >= v.getBoundingClientRect().height
          ? v.getBoundingClientRect().height
          : scrollPosition - heightArr[i] >= 0
          ? scrollPosition - heightArr[i]
          : 0;

      let customCase =
        -(scrollPosition - heightArr[i] >= 0 &&
        scrollPosition - heightArr[i] >= v.getBoundingClientRect().height
          ? v.getBoundingClientRect().height
          : scrollPosition - heightArr[i] >= 0
          ? scrollPosition - heightArr[i]
          : 0) + docHeight;

      let ratio = transform(
        pixels,
        [0, v.getBoundingClientRect().height],
        [0, 1]
      );

      return {
        ratio: ratio,
        pixels: pixels,
        customCase: customCase,
        heightArr: heightArr,
      };
    }

    heightArr.unshift(0);
    const map = new Map(
      Array.from(Object.entries(revealRefs.current), ([k, v], i) => [
        [...cases.values()][i].slug,
        {
          ratio: clampedValues(v, i, heightArr).ratio,
          pixels: clampedValues(v, i, heightArr).pixels,
          customCase: clampedValues(v, i, heightArr).customCase,
          heightArr: clampedValues(v, i, heightArr).heightArr,
        },
      ])
    );
    setContentHeight(totalHeight);
    setScrollArray(map);
  }, [docHeight, scrollPosition]);

  const { scrollY } = useViewportScroll();

  const y = useSpring(useTransform(scrollY, [0, 400], [0, -40]), {
    damping: 20,
  });

  // React.useEffect(() => {
  //   console.log(revealRefs);
  // }, []);

  return (
    <div className="App">
      {settings.debug && (
        <span
          sx={{
            fontSize: 10,
            position: "fixed",
            right: 10,
            top: 2,
            zIndex: 10,
          }}
        >
          scroll: {scrollPosition} | height: {docHeight} | contentHeight :{" "}
          {contentHeight}
        </span>
      )}
      <motion.div
        style={{ y: y }}
        sx={{ position: "fixed", top: 7, width: "100%", height: "100%" }}
      >
        <Grid variant="hero">
          <Logo
            sx={{
              lineHeight: 0.8,
              fontSize: 40,
              transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
              transform: false
                ? ["scale(1)", "scale(1)", "scale(0.8)"]
                : "scale(1)",
            }}
            weight={30}
          />
          <Text
            variant="heading"
            sx={{
              marginBottom: [4, 0],
              width: ["min(100%, 360px)", 460, 690, 820],
            }}
          >
            I’m Sebastian—as a digital designer I care about our dear users,
            rapid prototyping, design systems & branding
          </Text>
        </Grid>
      </motion.div>
      <div sx={{ position: "fixed", top: 0 }}>
        {[...cases.entries()].map(([k, v], index) => {
          let data = {
            key: k,
            val: v,
            index: index,
            docHeight: docHeight,
            size: cases.size,
            offset: settings.offset,
            totalScroll: scrollPosition,
          };
          return (
            <Case
              key={k}
              ref={addToRefs}
              casedata={data}
              caseScroll={[...scrollArray.values()][index]}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
