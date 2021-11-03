import React from "react";
import { Loupe, Capchase } from "../pages";
import { CaseWrapper, Case, Home, ScrollToTop } from "../components";
import "../base.css";

import { Helmet } from "react-helmet";

export let cases = new Map([
  [
    "home",
    {
      name: "Home",
      slug: "home",
      component: Home,
      color: "hsl(310, 9%, 13%)",
      bg: "hsl(244, 28%, 92%)",
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
      grid: ["1 / span 10", "2 / span 10"],
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
      timeframe: "3 months",
      year: "2021",
    },
  ],
  [
    "capchase",
    {
      name: "Capchase",
      slug: "capchase",
      component: Capchase,
      color: "#000",
      bg: "#FCFBF8", //FFDAAF looks cool
      grid: ["2 / span 10", "3 / span 10"],
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
      timeframe: "3 months",
      year: "2021",
    },
  ],
]);

const MemoApp = () => {
  const myRefs = React.useRef([]);
  myRefs.current = [...cases].map(
    (i) => myRefs.current[i] ?? React.createRef()
  );
  console.info("No it's not a Webflow template.");
  return (
    <>
      <Helmet>
        <meta name="theme-color" content={cases.get("home")?.bg} />
      </Helmet>
      <ScrollToTop />
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
