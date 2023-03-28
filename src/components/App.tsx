import React from "react";
import { Loupe, Capchase, Canon, End } from "../pages";
import { CaseWrapper, Case, ScrollToTop } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";

const propMap = (slug: string) => {
  const props = {
    home: {
      order: 0,
    },
    canon: {
      order: 1,
      grid: ["3 / span 10", "3 / span 10"],
    },
    capchase: {
      order: 2,
      grid: ["1 / span 10", "1 / span 10"],
    },
    loupe: {
      order: 3,
      grid: ["2 / span 10", "2 / span 10"],
    },
    end: {
      order: 4,
      grid: ["3 / span 10", "3 / span 10"],
    },
  } as Record<string, any>;

  return props[slug]; // Return an empty object if there's no style for the given slug
};

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
  // .sort((a, b) => (a.slug === "home" ? -1 : b.slug === "home" ? 1 : 0))
  .sort((a, b) => {
    const orderA = propMap(a.slug)?.order;
    const orderB = propMap(b.slug)?.order;

    return orderA - orderB;
  })
  .map(({ path, slug, Page }, i) => {
    const propmap = propMap(slug);
    return (
      <Case key={path} index={i} slug={slug} propmap={propmap}>
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
