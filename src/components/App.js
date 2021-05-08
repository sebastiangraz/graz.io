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
      bg: "#FAF7Ea",
      color: "#000",
    },
  ],
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Canon,
      bg: "#184629",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe1",
    {
      name: "Loupe",
      slug: "loupe1",
      component: Canon,
      bg: "#234",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe2",
    {
      name: "Loupe",
      slug: "loupe2",
      component: Canon,
      bg: "#456",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe3",
    {
      name: "Loupe",
      slug: "loupe3",
      component: Canon,
      bg: "#dfa",
      color: "#e8e0d6",
    },
  ],
  [
    "norse",
    {
      name: "Norse",
      slug: "norse",
      component: Canon,
      bg: "#111",
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
            ></Case>
          );
        })}
      </CaseWrapper>
    </>
  );
}
export default App;
