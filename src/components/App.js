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
    "loupe1",
    {
      name: "Loupe",
      slug: "loupe1",
      component: Loupe,
      bg: "#184629",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe2",
    {
      name: "Loupe",
      slug: "loupe2",
      component: Home,
      bg: "#76a",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Loupe,
      bg: "#235",
      color: "#e8e0d6",
    },
  ],
  [
    "norse",
    {
      name: "Norse",
      slug: "norse",
      component: Norse,
      bg: "#111",
      color: "#fff",
    },
  ],

  ["canon", { name: "Canon", slug: "canon", component: Canon, bg: "#ff3824" }],
  [
    "random",
    {
      name: "Random",
      slug: "random",
      component: Norse,
      bg: "#d5f5d1",
      color: "#276",
    },
  ],
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
            ></Case>
          );
        })}
      </CaseWrapper>
    </>
  );
}
export default App;
