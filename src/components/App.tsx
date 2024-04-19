import React from "react";
import { CaseWrapper, Case, ScrollToTop, CaseMeta, GridParent } from ".";
import "../base.css";

import { Helmet } from "react-helmet-async";
import { useThemeUI } from "theme-ui";
import { getColor } from "@theme-ui/color";

export interface PropMapProps {
  grid?: string[];
  scope?: string[];
  challenge?: string;
  duration?: string;
  year?: string;
  hideCaseMeta?: boolean;
}

export const PropMap = () => {
  const props = {
    home: { hideCaseMeta: true },
    capchase: {
      grid: ["2 / span 10", "2 / span 10"],
      challenge:
        "Position the brand as a frontrunner in non-dilutable financing, while bringing to light the business-partner vibe.",
      scope: ["Complete rebrand", "Production output", "Developer handoff"],
      duration: "3 months + retainer",
      year: "2022",
    },
    metaview: {
      grid: ["3 / span 10", "3 / span 10"],
      challenge: "Rebrand Metaview to surface their dedication for fairer hiring solutions, no matter the scale.",
      scope: ["Rebrand & strategy", "Production output"],
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
    loctax: {
      grid: ["2 / span 10", "2 / span 10"],
      challenge: "Rebrand Loctax to surface their dedication for fairer hiring solutions, no matter the scale.",
      scope: ["Rebrand & strategy", "Production output"],
      duration: "4 months + retainer",
      year: "2023",
    },
    // gitbook: {
    //   grid: ["3 / span 10", "3 / span 10"],
    //   challenge: "Rebrand Gitbook to surface their dedication for fairer hiring solutions, no matter the scale.",
    //   scope: ["Rebrand & strategy", "Production output"],
    //   duration: "2 months + retainer",
    //   year: "2024",
    // },

    // stacks: {
    //   grid: ["3 / span 10", "3 / span 10"],
    //   challenge: "Rebrand Stacks to surface their dedication for fairer hiring solutions, no matter the scale.",
    //   scope: ["Rebrand & strategy", "Production output"],
    //   duration: "2 months + retainer",
    //   year: "2024",
    // },
    // metaview: {
    //   grid: ["3 / span 10", "3 / span 10"],
    //   challenge: "Rebrand Metaview to surface their dedication for fairer hiring solutions, no matter the scale.",
    //   scope: ["Rebrand & strategy", "Production output"],
    //   duration: "4 months + retainer",
    //   year: "2023",
    // },
    // loupe: {
    //   grid: ["1 / span 10", "1 / span 10"],
    //   challenge:
    //     "Design a highly shareable & inclusive conference identity, that could co-exist together with Framer’s own brand.",
    //   scope: ["Visual identity", "Front-end"],
    //   duration: "3 months",
    //   year: "2020",
    // },
    // capchase: {
    //   grid: ["2 / span 10", "2 / span 10"],
    //   challenge:
    //     "Position the brand as a frontrunner in non-dilutable financing, while bringing to light the business-partner vibe.",
    //   scope: ["Complete rebrand", "Production output", "Developer handoff"],
    //   duration: "3 months + retainer",
    //   year: "2022",
    // },
    end: {
      hideCaseMeta: true,
      grid: ["1 / span 12", "2 / span 10"],
    },
  } as { [key: string]: PropMapProps };

  return props; // Return an empty object if there's no style for the given slug
};

const slugKeys = Object.keys(PropMap());
const slugValues = Object.values(PropMap());

const routes = Object.entries(
  import.meta.glob<string | string[] | any>(
    ["../pages/**/index.tsx"], // ignore components
    {
      eager: true,
    }
  )
)
  .map(([relativePath, module]) => {
    const Page = module.default as JSX.Element["type"];
    const path = relativePath.replace("./pages", "").replace("/index.tsx", "");
    const slug = path.replace("./", "");
    return {
      slug,
      path,
      Page,
    };
  })
  .filter(({ slug }) => slugKeys.includes(slug))
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
  const theme = useThemeUI().theme;
  return (
    <>
      <Helmet>
        <meta name="theme-color" content={getColor(theme, "background")} media="(prefers-color-scheme: light)" />
        <meta
          name="theme-color"
          content={getColor(theme, "background")} //hack to default safari theme
          media="(prefers-color-scheme: dark)"
        />
      </Helmet>
      <ScrollToTop />
      <CaseWrapper>{routes}</CaseWrapper>
    </>
  );
};

export const App = React.memo(MemoApp);
