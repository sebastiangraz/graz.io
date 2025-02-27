/** @jsxImportSource theme-ui */

import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { entryMeta } from "@/routes/articles";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Layout, Logo } from "@/components";
import { Img } from "@/pages/articles/Img";
import { Heading, Paragraph, Text } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { Link as AppLink } from "@/components";
import style from "@/routes/articles/articles.module.css";
import { formatDistanceToNow } from "date-fns";

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
  const dateText =
    post.date && post.date instanceof Date && post.date.getTime() > 0
      ? formatDistanceToNow(post.date, { addSuffix: true })
      : "";

  return (
    <Layout>
      <div className={`${style.meta}`}>
        <Logo
          sx={{
            fontVariationSettings: `"wght" 65`,
            gridArea: "logo",
            fontSize: 11,
            display: "flex",
          }}
        />
        <h1 className={`${style.title}`}>{post.title}</h1>
        {dateText && (
          <div
            sx={{
              fontSize: "14px",
              letterSpacing: "0.05em",
              color: "textDim",
              marginTop: "-1rem",
              marginBottom: "1rem",
            }}
          >
            {dateText}
          </div>
        )}
        <AppLink to="/articles">
          <a>All articles</a>
        </AppLink>
      </div>
      <MDXProvider components={components}>
        <Page />
      </MDXProvider>
    </Layout>
  );
}

const components = {
  wrapper: (props: any) => (
    <div className={`${style.prose}`} {...props}>
      {props.children}
    </div>
  ),
  p: (props: any) => (
    <Paragraph {...props} sx={{ display: "block", textWrap: "pretty" }}>
      {props.children}
    </Paragraph>
  ),

  Link: (props: any) => <AppLink {...props}>{props.children}</AppLink>,
  a: (props: any) => <a {...props}></a>,
  li: (props: any) => <li {...props}></li>,
  ul: (props: any) => <ul {...props}></ul>,
  Img: (props: any) => <Img {...props} />,
  code: (props: any) => <code sx={{}} {...props} />,
  pre: (props: any) => <pre sx={{ fontSize: 5 }} {...props} />,
  h1: (props: any) => <Heading variant="heading" {...props} />,
  h2: (props: any) => <Heading variant="heading" {...props} />,
  h3: (props: any) => <Heading variant="heading" {...props} />,
  h4: (props: any) => <Heading variant="heading" {...props} />,
  h5: (props: any) => <Heading variant="heading" {...props} />,
  h6: (props: any) => <Heading variant="heading" {...props} />,
};
