import React from "react";
import { Loupe, Norse, Canon } from "../pages";
import { CaseWrapper, Case, Home } from "../components";
import "../base.css";
export let cases = new Map([
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
    "loupe1",
    {
      name: "Loupe",
      slug: "loupe1",
      component: Loupe,
      bg: "#303042",
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
  [
    "canon1",
    { name: "Canon", slug: "canon1", component: Norse, bg: "#00ff34" },
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
      <Home />
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
