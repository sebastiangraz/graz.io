import React from "react";
import { CaseWrapper, Case, ScrollToTop, CaseMeta, GridParent } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";

export interface PropMap {
  grid?: string[];
  scope?: string[];
  role?: string;
  timeframe?: string;
  year?: string;
  hideCaseMeta?: boolean;
}

const propMap = () => {
  const props = {
    home: { hideCaseMeta: true },
    capchase: {
      grid: ["1 / span 10", "2 / span 10"],
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
    loupe: {
      grid: ["2 / span 10", "1 / span 10"],
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
    end: {
      hideCaseMeta: true,
      grid: ["3 / span 10", "5 / span 8"],
    },
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
    const hideCaseMeta = slugValues[i]?.hideCaseMeta || false;

    return (
      <Case key={path} index={i} slug={slug} propmap={slugValues[i]}>
        {!hideCaseMeta && (
          <GridParent>
            <CaseMeta {...slugValues[i]} />
          </GridParent>
        )}
        <Page></Page>
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
