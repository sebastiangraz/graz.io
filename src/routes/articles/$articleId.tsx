import * as React from "react";
import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { entryMeta } from "@/routes/articles";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Layout } from "@/components";
import { Text } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
function PostErrorComponent({ error }: ErrorComponentProps) {
  return (
    <Layout>
      <ErrorComponent error={error} />
    </Layout>
  );
}

export const Route = createFileRoute("/articles/$articleId")({
  loader: async ({ params: { articleId } }) => {
    const article = entryMeta.find((article) => article.id === articleId);
    console.log();
    if (!article) {
      throw new Error("Article not found");
    }
    return article;
  },
  errorComponent: PostErrorComponent, // Use the imported component
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: PostComponent,
});

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <Layout>
      <div className="space-y-2">
        <h4 className="text-xl font-bold underline">{post.title}</h4>
        <MDXProvider components={components}>{post.body}</MDXProvider>
      </div>
    </Layout>
  );
}

const components = {
  h2: (props: any) => <Text {...props}>{props.children}</Text>,
};
