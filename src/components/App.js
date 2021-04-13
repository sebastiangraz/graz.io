import React from "react";
import { Loupe, Norse, Canon } from "../pages";
import { CaseWrapper, Case, Home } from "../components";
import "../base.css";
export let cases = new Map([
  [
    "home",
    {
      name: "home",
      slug: "home",
      component: Home,
      bg: "#FAF7EE",
      color: "#000",
      hideCaseHero: true,
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
    },
  ],
  [
    "norse1",
    {
      name: "Norse1",
      slug: "norsed",
      component: Norse,
      bg: "#000",
      color: "#fff",
    },
  ],
  [
    "norse2",
    {
      name: "Norse2",
      slug: "norse2",
      component: Norse,
      bg: "yellow",
      color: "#fff",
    },
  ],
  [
    "norse3",
    {
      name: "Norse3",
      slug: "norse3",
      component: Norse,
      bg: "blue",
      color: "#fff",
    },
  ],
  [
    "norse4",
    {
      name: "Norse3",
      slug: "norse3",
      component: Norse,
      bg: "hotpink",
      color: "#fff",
    },
  ],
  [
    "norse6",
    {
      name: "Norse3",
      slug: "norse3",
      component: Norse,
      bg: "magenta",
      color: "#fff",
    },
  ],

  ["canon", { name: "Canon", slug: "canon", component: Canon, bg: "#DE0000" }],
]);

function App() {
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
              size={cases.size}
            ></Case>
          );
        })}
      </CaseWrapper>
    </>
  );
}
export default App;
