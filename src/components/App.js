import React from "react";
import { Loupe, Norse, Canon } from "../pages";
import { CaseWrapper, Case, Home } from "../components";
import "../base.css";
import Capchase from "../pages/capchase";
export let cases = new Map([
  [
    "home",
    {
      name: "Home",
      slug: "home",
      component: Home,
      color: "hsl(42, 0%, 0%)",
      bg: "hsl(42, 70%, 93%)",
    },
  ],
  [
    "capchase",
    {
      name: "Capchase",
      slug: "capchase",
      component: Capchase,
      color: "#000",
      bg: "#FFD99F",
      grid: ["2 / span 10", "2 / span 10"],
      scope: [
        "Visual identity",
        "Art direction",
        "Merchandise",
        "Logotype",
        "Social assets",
        "Web design",
        "Animation",
        "Print",
      ],
      role: "Design Consultant",
      period: "3 months",
      year: "2021",
    },
  ],
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Loupe,
      color: "#184629",
      bg: "#D2DAD3",
      grid: ["3 / span 9", "3 / span 10"],
    },
  ],
]);

const MemoApp = () => {
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
};

export const App = React.memo(MemoApp);
