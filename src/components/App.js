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
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();

  return (
    <CaseWrapper>
      <Case data={{ title: "Loupe" }} ref={ref1} index={0} />
      <Case data={{ title: "Norse" }} ref={ref2} index={1} />
      <Case data={{ title: "Canon" }} ref={ref3} index={2} />
    </CaseWrapper>
  );
}
export default App;
