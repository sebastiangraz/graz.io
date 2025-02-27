/** @jsxImportSource theme-ui */

import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Layout, Link } from "@/components";
import { getPrevPathFromExtension } from "@/utils/helpers";
import style from "@/routes/articles/articles.module.css";
import { formatDistanceToNow } from "date-fns";

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
    date: module.frontmatter?.date ? new Date(module.frontmatter.date) : new Date(0),
  };
});

function RouteComponent() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      // Sort articles by date (newest first)
      return [...entryMeta].sort((a, b) => b.date.getTime() - a.date.getTime());
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className={style.meta}>
          <h1 className={style.title}>Articles</h1>
          <div>Loading articles...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={style.meta}>
        <h1 className={style.title}>Articles</h1>
        <ul
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: 0,
            listStyle: "none",
            marginTop: "2rem",
          }}
        >
          {articles?.map(({ title, id, path, date }) => {
            const slug = getPrevPathFromExtension(path);
            const dateText = date.getTime() > 0 ? formatDistanceToNow(date, { addSuffix: true }) : "";

            return (
              <li
                key={id}
                sx={{
                  fontSize: "18px",
                  color: "textDim",
                }}
              >
                <Link
                  to={`/articles/${slug}`}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    width: "100%",
                  }}
                >
                  <span sx={{ fontWeight: "normal" }}>{title}</span>
                  {dateText && (
                    <span
                      sx={{
                        fontSize: "14px",
                        opacity: 0.7,
                        textAlign: "right",
                        flexShrink: 0,
                        marginLeft: "16px",
                      }}
                    >
                      {dateText}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
