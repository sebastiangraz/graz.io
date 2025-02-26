import { ArticleModule } from "@/types/blog";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/articles")({
  component: RouteComponent,
});

const globEntries = Object.entries(
  import.meta.glob<string | string[] | any>(["@/pages/articles/*/*.mdx"], {
    eager: true,
  }),
);

function RouteComponent() {
  const entryMeta = globEntries.map(([url, module]) => {
    const Page = module.default;

    return {
      Page,
      id: module.frontmatter?.id,
      slug: url.split("/").pop(),
      title: module.frontmatter?.title,
    };
  });

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      return entryMeta;
    },
  });

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles?.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
}
