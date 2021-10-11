import React from "react";
import { Loupe, Norse, Canon } from "../pages";
import { CaseWrapper, Case, Home } from "../components";
import "../base.css";
export let cases = new Map([
  [
    "home",
    {
      name: "Home",
      slug: "home",
      component: Home,
      bg: "#FFF5DD",
      color: "#000",
    },
  ],
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Loupe,
      bg: "#184629",
      color: "#e8e0d6",
      grid: ["2 / span 11", "4 / span 9"],
    },
  ],
  [
    "capchase",
    {
      name: "Capchase",
      slug: "capchase",
      component: Loupe,
      bg: "#e5e58c",
      color: "#000",
      grid: ["1 / span 11", "3 / span 9"],
    },
  ],
  [
    "norse",
    {
      name: "Norse",
      slug: "norse",
      component: Norse,
      bg: "#000",
      color: "#e8e0d6",
      grid: ["3 / span 10", "1 / span 9"],
    },
  ],
  [
    "canon",
    {
      name: "Canon",
      slug: "canon",
      component: Canon,
      bg: "#ff3824",
      grid: ["4 / span 9", "3 / span 8"],
    },
  ],
]);

function App() {
  const setVH = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  React.useEffect(() => {
    setVH();
    window.addEventListener("resize", setVH, false);
    window.addEventListener("orientationchange", setVH, false);
  }, []);

  const myRefs = React.useRef([]);
  myRefs.current = [...cases].map(
    (i) => myRefs.current[i] ?? React.createRef()
  );

  return (
    <>
      <CaseWrapper>
        {[...cases].map((v, i) => {
          return (
            <Case
              key={v[1].slug}
              data={v[1]}
              ref={myRefs.current[i]}
              index={i}
            ></Case>
          );
        })}
      </CaseWrapper>
    </>
  );
}
export default App;
