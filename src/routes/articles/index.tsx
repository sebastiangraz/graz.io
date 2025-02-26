/** @jsxImportSource theme-ui */

import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Layout, Link } from "@/components";
import { getPrevPathFromExtension } from "@/utils/helpers";
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
  };
});

function RouteComponent() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      return entryMeta;
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div>Loading articles...</div>
      </Layout>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", gridColumn: "span 2", margin: "0 auto" }}>
      <Layout>
        <h1>Articles</h1>
        <ul>
          {articles?.map(({ title, id, path }) => {
            const slug = getPrevPathFromExtension(path);

            return (
              <Link to={`/articles/${slug}`} key={id}>
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
      </Layout>{" "}
    </div>
  );
}
