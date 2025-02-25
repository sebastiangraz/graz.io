import { CaseWrapper, Case, ScrollToTop, CaseMeta, GridParent } from "@/components";
import "@/base.css";
import { Helmet } from "react-helmet-async";
import { ArticleModule } from "@/types/blog";
import { useState, useEffect } from "react";

// Article routes setup using import.meta.glob
const articleModules = import.meta.glob<ArticleModule>(["../pages/articles/*.tsx"], { eager: true });

export const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen for path changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // If path starts with /articles, show the blog component
  if (currentPath.startsWith("/articles")) {
    const isArticleIndex = currentPath === "/articles" || currentPath === "/articles/";

    if (isArticleIndex) {
      const BlogIndex = articleModules["../pages/articles/index.tsx"]?.default;
      return (
        <>
          <Helmet>
            <meta name="theme-color" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" />
          </Helmet>
          <ScrollToTop />
          {BlogIndex ? <BlogIndex /> : <div>Blog index not found</div>}
        </>
      );
    } else {
      // Extract slug from the URL path
      const slug = currentPath.replace("/articles/", "");
      const articlePath = `../pages/articles/${slug}.tsx`;

      // Find the corresponding article component
      const ArticleComponent = articleModules[articlePath]?.default;

      return (
        <>
          <Helmet>
            <meta name="theme-color" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" />
          </Helmet>
          <ScrollToTop />
          {ArticleComponent ? <ArticleComponent /> : <div>Article not found</div>}
        </>
      );
    }
  }

  // For all other paths, use the original case-based rendering
  return (
    <>
      <Helmet>
        <meta name="theme-color" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" />
      </Helmet>
      <ScrollToTop />
      <CaseWrapper>{cases}</CaseWrapper>
    </>
  );
};

export const PropMap = () => {
  const props = {
    home: { hideCaseMeta: true },
    articles: { grid: ["1 / span 12", "1 / span 12"], hideCaseMeta: true }, // Add articles to PropMap
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
      challenge: "Create a brand that reflects the company’s mission to simplify tax compliance for global businesses.",
      scope: ["Rebrand", "Front-end"],
      duration: "2 months + retainer",
      year: "2023",
    },

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
);

const cases = routes
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

export interface PropMapProps {
  grid?: string[];
  scope?: string[];
  challenge?: string;
  duration?: string;
  year?: string;
  hideCaseMeta?: boolean;
}
