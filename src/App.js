import React from "react";
import {
  motion,
  useSpring,
  transform,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";
import theme from "./theme";
import Case from "./Case";
const MyContext = React.createContext();

const WrapperStyle = {
  width: "100%",
  bg: "#000a",
  fontSize: 80,
  lineHeight: 1.1,
  fontWeight: 600,
};

const Loupe = () => {
  return (
    <div style={{ ...WrapperStyle }}>
      {Array.from(Array(12).keys()).map(() => {
        return (
          <p style={{ fontSize: 80, marginBottom: 90 }}>
            Loupe is a conference held by Framer each year. The 3rd edition of
            the conference was planned to be held in Amsterdam 2020, but was
            cancelled due to COVID-19. Below you'll find the progress of that
            work.
          </p>
        );
      })}
    </div>
  );
};
const Norse = () => {
  return (
    <div style={{ ...WrapperStyle }}>
      {Array.from(Array(3).keys()).map(() => {
        return (
          <p style={{ fontSize: 80, marginBottom: 90 }}>
            Inspired by a station sign in Norsesund, Sweden. I attempted to
            recreate the letters by tracing them from a photograph, since then
            the typeface evolved into something different. But at least that
            explains the name a bit.
          </p>
        );
      })}
    </div>
  );
};
const Canon = () => {
  return (
    <div style={{ ...WrapperStyle }}>
      {Array.from(Array(6).keys()).map(() => {
        return (
          <p style={{ fontSize: 80, marginBottom: 90 }}>
            Canon wanted us to help them improve the UI & UX of their Canon
            Store Website. We identified low-level improvements related to how
            agencies & Canon worked together. As a result; we presented Canon
            with a proof-of-concept design system.
          </p>
        );
      })}
    </div>
  );
};

let cases = new Map([
  [
    "loupe",
    {
      name: "/Loupe",
      slug: "loupe",
      component: Loupe,
      bg: "#184629",
      color: "#fff",
    },
  ],
  [
    "norse",
    {
      name: "/Norse",
      slug: "norse",
      component: Norse,
      bg: "black",
      color: "#fff",
    },
  ],
  ["canon", { name: "/Canon", slug: "canon", component: Canon, bg: "#DE0000" }],
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

  const { scrollYProgress } = useViewportScroll();

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
      let ratio = transform(
        scrollPosition - heightArr[i] + docHeight >= 0 &&
          scrollPosition - heightArr[i] + docHeight >=
            v.getBoundingClientRect().height
          ? v.getBoundingClientRect().height
          : scrollPosition - heightArr[i] + docHeight >= 0
          ? scrollPosition - heightArr[i] + docHeight
          : 0,
        [0, v.getBoundingClientRect().height],
        [0, 1]
      );

      let pixels = -(scrollPosition - heightArr[i] >= 0 &&
      scrollPosition - heightArr[i] >= v.getBoundingClientRect().height
        ? v.getBoundingClientRect().height
        : scrollPosition - heightArr[i] >= 0
        ? scrollPosition - heightArr[i]
        : 0);

      return {
        ratio: ratio,
        pixels: pixels,
      };
    }

    heightArr.unshift(0);
    const map = new Map(
      Array.from(Object.entries(revealRefs.current), ([k, v], i) => [
        [...cases.values()][i].slug,
        {
          pixels: clampedValues(v, i, heightArr).pixels,
          ratio: clampedValues(v, i, heightArr).ratio,
        },
      ])
    );
    setContentHeight(totalHeight);
    setScrollArray(map);
  }, [docHeight, scrollPosition]);

  return (
    <div className="App">
      {/* <span
            style={{
              fontSize: 10,
              position: "fixed",
              right: 10,
              top: 3,
              zIndex: 10,
            }}
          >
            scroll: {scrollPosition} | height: {docHeight} | percentage:{" "}
            {scrollYProgress.get().toFixed(2)} | contentHeight : {contentHeight}{" "}
          </span> */}

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
            caseScroll={[...scrollArray.values()][index]}
          />
        );
      })}
    </div>
  );
}
export default App;
