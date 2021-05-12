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
    },
  ],
  [
    "norse1",
    {
      name: "Norse",
      slug: "norse1",
      component: Norse,
      bg: "#7a3",
      color: "#fff",
    },
  ],
  [
    "norse2",
    {
      name: "Norse",
      slug: "norse2",
      component: Norse,
      bg: "#a3c",
      color: "#fff",
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
