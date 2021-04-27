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
      bg: "#eee",
      color: "#111",
    },
  ],
  [
    "3D",
    {
      name: "3D",
      slug: "3d",
      component: Loupe,
      bg: "#e1e30c",
      color: "#000",
    },
  ],
  [
    "experimental",
    {
      name: "Experimental",
      slug: "experimental",
      component: Loupe,
      bg: "#50a40e",
      color: "#e8e0d6",
    },
  ],
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Norse,
      bg: "#184629",
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
