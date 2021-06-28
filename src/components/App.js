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
      grid: "1 / span 7",
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
      grid: "2 / span 9",
    },
  ],
  [
    "canon",
    {
      name: "Canon",
      slug: "canon",
      component: Canon,
      bg: "#ff3824",
      grid: "3 / span 9",
    },
  ],
  [
    "random",
    {
      name: "Random",
      slug: "random",
      component: Loupe,
      bg: "#f9eaa2",
      grid: "1 / span 8",
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
