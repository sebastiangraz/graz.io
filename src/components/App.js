import React from "react";
import { Loupe } from "../pages";
import { CaseWrapper, Case } from "../components";
import "../base.css";
let cases = new Map([
  [
    "loupe",
    {
      name: "Loupe",
      slug: "loupe",
      component: Loupe,
      bg: "#184629", //184629
      color: "#e8e0d6", //e8e0d6
    },
  ],
  [
    "norse",
    {
      name: "Norse",
      slug: "norse",
      component: Loupe,
      bg: "black",
      color: "#fff",
    },
  ],

  ["canon", { name: "Canon", slug: "canon", component: Loupe, bg: "#DE0000" }],
]);

function App() {
  const myRefs = React.useRef([]);
  myRefs.current = [...cases].map(
    (element, i) => myRefs.current[i] ?? React.createRef()
  );

  return (
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
  );
}
export default App;
