/** @jsxImportSource theme-ui */

import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Layout, Link, Logo, RSSLink } from "@/components";
import { getPrevPathFromExtension } from "@/utils/helpers";
import style from "./articles.module.css";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/articles/")({
  component: RouteComponent,
});

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(["@/pages/articles/*/*.mdx"], {
    eager: true,
  }),
);
export const entryMeta = globEntries.map(([url, module]) => {
  const Page = module.default;
  const slug = getPrevPathFromExtension(url);

  return {
    Page,
    id: slug,
    path: url,
    title: module.frontmatter?.title,
    short: module.frontmatter?.short as string | undefined,
    description: module.frontmatter?.description,
    date: module.frontmatter?.date ? new Date(module.frontmatter.date) : new Date(0),
  };
});

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.01,
      ease: "linear",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "circOut",
      duration: 0.6,
    },
  },
};

function RouteComponent() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      // Sort articles by date (newest first)
      return [...entryMeta].sort((a, b) => b.date.getTime() - a.date.getTime());
    },
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <Layout>
      <Helmet>
        <title>Sebastian Graz · Articles</title>
        <meta
          name="description"
          content="Independent design consultancy focused on branding, digital design and beautiful implementation."
        />
      </Helmet>
      <div className={style.meta} sx={{ gridColumn: "3/13", minHeight: "calc(100dvh - 8rem)" }}>
        <Link
          className={style.logo}
          to="/"
          sx={{
            textDecoration: "none",
            color: "var(--theme-ui-colors-text)",
            fontVariationSettings: `"wght" 65`,
            fontSize: 11,
            display: "flex",
            textAlign: "center",
          }}
        >
          <Logo />
        </Link>
        <h1 className={style.title}> Articles</h1>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "1.5rlh",
            paddingInline: "1rlh",
            paddingBlock: 0,
            listStyle: "none",
            marginBlock: "2rem",
          }}
        >
          {articles?.map(({ title, id, path, date }) => {
            const slug = getPrevPathFromExtension(path);
            const dateText = date.getTime() > 0 ? formatDistanceToNow(date, { addSuffix: true }) : "";

            return (
              <motion.li
                key={id}
                variants={itemVariants}
                sx={{
                  fontSize: "14px",
                  color: "textDim",
                }}
              >
                <Link
                  to={`/articles/${slug}`}
                  sx={{
                    display: "flex",
                    flexDirection: ["column", "row"],
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    width: "100%",
                    columnGap: "4rem",
                    rowGap: "0.5rlh",
                  }}
                >
                  <span sx={{ fontWeight: "normal", fontFeatureSettings: `"frac" on`, textWrap: "balance" }}>
                    {title}
                  </span>
                  {dateText && (
                    <span
                      sx={{
                        fontSize: "0.6rlh",
                        letterSpacing: "0.05em",
                        opacity: 0.7,
                        textAlign: "right",
                        flexShrink: 0,
                      }}
                    >
                      {dateText}
                    </span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
        <div
          sx={{ display: "flex", marginTop: "auto", paddingBottom: "2rem", justifyContent: "center", fontSize: "4" }}
        >
          <RSSLink />
        </div>
      </div>
    </Layout>
  );
}
