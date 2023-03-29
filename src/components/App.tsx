import React from "react";
import { Loupe, Capchase, Canon, End } from "../pages";
import { CaseWrapper, Case, ScrollToTop } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";

export interface PropMap {
  grid?: string[];
}
const propMap = () => {
  const props = {
    home: {},
    capchase: {
      grid: ["1 / span 10", "2 / span 10"],
    },
    loupe: {
      grid: ["2 / span 10", "1 / span 10"],
    },
    canon: {
      grid: ["3 / span 10", "3 / span 10"],
    },
    end: {
      grid: ["3 / span 10", "2 / span 10"],
    },
    pad: {},
  } as { [key: string]: PropMap };

  return props; // Return an empty object if there's no style for the given slug
};

const slugKeys = Object.keys(propMap());
const slugValues = Object.values(propMap());

const routes = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["../pages/**/index.tsx"], // ignore components
    {
      eager: true,
    }
  )
)
  .map(([relativePath, module]) => {
    const Page = module.default;
    const path = relativePath.replace("./pages", "").replace("/index.tsx", "");
    const slug = path.replace("./", "");

    return {
      slug,
      path,
      Page,
    };
  })
  .sort((a, b) => {
    const indexA = slugKeys.indexOf(a.slug);
    const indexB = slugKeys.indexOf(b.slug);

    return indexA - indexB;
  })
  .map(({ path, slug, Page }, i) => {
    return (
      <Case key={path} index={i} slug={slug} propmap={slugValues[i]}>
        <Page />
      </Case>
    );
  });

const MemoApp = () => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content={"#000000"} />
      </Helmet>
      <ScrollToTop />
      <CaseWrapper>{routes}</CaseWrapper>
    </>
  );
};

export const App = React.memo(MemoApp);
