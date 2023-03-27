import React from "react";
import { Loupe, Capchase, Canon, End } from "../pages";
import { CaseWrapper, Case, ScrollToTop } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";

const routes = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["../pages/**/index.tsx"], // ignore components
    {
      eager: true,
    }
  )
)
  .map(([relativePath, module], index) => {
    const Page = module.default;
    const path = relativePath.replace("./pages", "").replace("/index.tsx", "");
    const slug = path.replace("./", "");

    return {
      slug,
      path,
      index,
      Page,
    };
  })
  .sort((a, b) => (a.slug === "home" ? -1 : b.slug === "home" ? 1 : 0))
  .map(({ path, index, slug, Page }, i) => (
    <Case key={path} index={i} slug={slug}>
      <Page />
    </Case>
  ));

export let cases = new Map([
  [
    "home",
    {
      name: "Home",
      slug: "home",
      // component: Home,
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
      grid: ["2 / span 10", "2 / span 10"],
      scope: [
        "Visual identity",
        "Front-end",
        "Logotype",
        "Social assets",
        "Web design",
        "Merchandise",
        "Animation",
        "Print",
      ],
      role: "Inhouse Designer",
      timeframe: "3 months",
      year: "2020",
    },
  ],
  [
    "capchase",
    {
      name: "Capchase",
      slug: "capchase",
      component: Capchase,
      color: "#000",
      bg: "#FCFBF8",
      grid: ["1 / span 10", "1 / span 10"],
      scope: [
        "Brand Strategy",
        "Logotype",
        "Web Design",
        "Merchandise",
        "Prototyping",
        "Social assets",
        "Animation",
        "Print",
      ],
      role: "Independent Consultant",
      timeframe: "3 months",
      year: "2021",
    },
  ],
  [
    "canon",
    {
      name: "Canon",
      slug: "canon",
      component: Canon,
      color: "#FFCDCA",
      bg: "#171717",
      grid: ["3 / span 10", "3 / span 10"],
      scope: [
        "Design",
        "Development",
        "Prototyping",
        "Design Systems",
        "Workshops",
        "Art Direction",
      ],
      role: "Design Consultant",
      timeframe: "5 months",
      year: "2018",
    },
  ],
  [
    "end",
    {
      name: "the end",
      slug: "end",
      component: End,
      color: "#FFCDCA",
      bg: "transparent",
      grid: ["3 / span 10", "3 / span 10"],
    },
  ],
]);

const MemoApp = () => {
  // const myRefs = React.useRef([]);
  // myRefs.current = [...cases].map(
  //   (i) => myRefs.current[i] ?? React.createRef()
  // );

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={cases.get("home")?.bg} />
      </Helmet>
      <ScrollToTop />

      <CaseWrapper>{routes}</CaseWrapper>

      {/* <CaseWrapper>
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
      </CaseWrapper> */}
    </>
  );
};

export const App = React.memo(MemoApp);
