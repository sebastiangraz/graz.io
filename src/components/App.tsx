import React from "react";
import { CaseWrapper, Case, ScrollToTop, CaseMeta, GridParent } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";

export interface PropMap {
  grid?: string[];
  scope?: string[];
  challenge?: string;
  duration?: string;
  year?: string;
  hideCaseMeta?: boolean;
}

export const propMap = () => {
  const props = {
    home: { hideCaseMeta: true },
    capchase: {
      grid: ["2 / span 10", "2 / span 10"],
      challenge:
        "Position the brand as a frontrunner in non-dilutable financing, while bringing to light the business-partner vibe.",
      scope: ["Brand strategy", "Production output", "Developer handoff"],
      duration: "3 months + retainer",
      year: "2022",
    },
    metaview: {
      grid: ["3 / span 10", "3 / span 10"],
      challenge:
        "Rebrand Metaview to surface their dedication for fairer hiring solutions, no matter the scale.",
      scope: ["Rebrand & Strategy", "Production output"],
      duration: "4 months + retainer",
      year: "2023",
    },
    loupe: {
      grid: ["1 / span 10", "1 / span 10"],
      challenge:
        "Design a highly shareable & inclusive conference identity, that could co-exist together with Framer’s own brand.",
      scope: ["Visual identity", "Front-end"],
      duration: "3 months",
      year: "2020",
    },
    end: {
      hideCaseMeta: true,
      grid: ["2 / span 12", "1 / span 10"],
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
