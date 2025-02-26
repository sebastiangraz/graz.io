/** @jsxImportSource theme-ui */

import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { entryMeta } from "@/routes/articles";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Layout } from "@/components";
import { Heading, Paragraph, Text } from "theme-ui";
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

export function PostComponent() {
  const post = Route.useLoaderData();
  const { Page } = post;
  console.log(Page);
  return (
    <Layout>
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <MDXProvider components={components}>
        <Page />
      </MDXProvider>
    </Layout>
  );
}

const components = {
  wrapper: (props: any) => (
    <div
      {...props}
      sx={{
        gridTemplateColumns: "subgrid",
        gridColumn: "bleedstart/bleedend",
        display: "grid",
      }}
    >
      <div sx={{ gridColumn: "5/11" }}>{props.children}</div>
    </div>
  ),
  picture: (props: any) => <img {...props} sx={{ gridColumn: "bleedstart/bleedend" }} />,
  h1: (props: any) => (
    <Heading {...props} sx={{ gridColumn: "start/end" }}>
      {props.children}
    </Heading>
  ),
  h2: (props: any) => (
    <Text {...props} sx={{ gridColumn: "start/end" }}>
      {props.children}
    </Text>
  ),
  p: (props: any) => (
    <Paragraph {...props} sx={{ display: "grid", gridColumn: "5/11" }}>
      {props.children}
    </Paragraph>
  ),
  Link: (props: any) => (
    <a href={props.to} children={props.children} style={{ borderTop: "1px dashed", color: "tomato" }} />
  ),

  // Img: (props: any) => <Img {...props} sx={{ gridColumn: "bleedstart/bleedend" }} />,
};
