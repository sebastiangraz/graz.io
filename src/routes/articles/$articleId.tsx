/** @jsxImportSource theme-ui */

import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { entryMeta } from "@/routes/articles";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Layout } from "@/components";
import { Img } from "@/pages/articles/Img";
import { Heading, Paragraph, Text } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { Link as AppLink } from "@/components";
import style from "@/routes/articles/articles.module.css";
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
    <div className={` ${style.prose}`} {...props}>
      {props.children}
    </div>
  ),
  p: (props: any) => (
    <Paragraph {...props} variant="body" sx={{ display: "block" }}>
      {props.children}
    </Paragraph>
  ),
  Link: (props: any) => (
    <AppLink {...props} style={{ borderTop: "1px dashed", color: "blue" }}>
      {props.children}
    </AppLink>
  ),
  a: (props: any) => <a {...props} style={{ borderTop: "1px dashed", color: "red" }}></a>,

  Img: (props: any) => <Img {...props} />,
  code: (props: any) => <code sx={{}} {...props} />,
  pre: (props: any) => <pre sx={{ fontSize: 5, lineHeight: "1.3" }} {...props} />,
};
