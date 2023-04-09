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
      grid: ["1 / span 10", "2 / span 10"],
      challenge:
        "Position Capchase as a leader in non-dilutable financing. Look & feel like a business partner not a business tool.",
      scope: ["Brand strategy", "Production output", "Developer handoff"],
      duration: "4 months",
      year: "2021",
    },
    metaview: {
      grid: ["1 / span 10", "3 / span 10"],
      challenge:
        "Design a product that would help people understand their own data and make better decisions.",
      scope: ["Product design", "Front-end"],
      duration: "3 months",
      year: "2023",
    },
    loupe: {
      grid: ["2 / span 10", "1 / span 10"],
      challenge:
        "Design an inclusive, memorable identity that could co-exist with Framer’s own brand.",
      scope: ["Visual identity", "Front-end"],
      duration: "3 months",
      year: "2020",
    },
    end: {
      hideCaseMeta: true,
      grid: ["3 / span 10", "1 / span 10"],
    },
  } as { [key: string]: PropMap };

  return props; // Return an empty object if there's no style for the given slug
};

const slugKeys = Object.keys(propMap());
const slugValues = Object.values(propMap());

const MemoApp = () => {
  const [routes, setRoutes] = React.useState<JSX.Element[]>([]);

  React.useEffect(() => {
    const fetchRoutes = async () => {
      const fetchedRoutes = await Promise.all(
        Object.entries(import.meta.glob("../pages/**/index.tsx")).map(
          async ([relativePath]) => {
            const path = relativePath
              .replace("./pages", "")
              .replace("/index.tsx", "");
            const slug = path.replace("./", "");

            const module = await import(relativePath);
            const Page = module.default;

            return {
              slug,
              path,
              Page,
            };
          }
        )
      );

      const sortedRoutes = fetchedRoutes
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

      setRoutes(sortedRoutes);
    };

    fetchRoutes();
  }, []);

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
