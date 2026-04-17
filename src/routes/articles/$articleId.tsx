/** @jsxImportSource theme-ui */

import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { entryMeta } from "@/routes/articles";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { EmailLink, Layout, Logo, Link as AppLink, RSSLink } from "@/components";
import { Img } from "@/pages/articles/Img";
import { Heading, Paragraph } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { Background } from "@/components/Background";

import style from "./articles.module.css";
import { formatDistanceToNow } from "date-fns";
import { Helmet } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

function PostErrorComponent({ error }: ErrorComponentProps) {
  return (
    <Layout>
      <ErrorComponent error={error} />
    </Layout>
  );
}

export function PostComponent() {
  const post = Route.useLoaderData();
  const { Page } = post;
  const dateText =
    post.date && post.date instanceof Date && post.date.getTime() > 0
      ? formatDistanceToNow(post.date, { addSuffix: true })
      : "";
  return (
    <Layout>
      <Helmet>
        <title>Sebastian Graz · {post.title}</title>
        <meta name="description" content={post.description || `Article: ${post.title}`} />
        <meta property="og:title" content={`Sebastian Graz · ${post.title}`} />
        <meta property="og:description" content={post.description || `Article: ${post.title}`} />
      </Helmet>
      <div className={`${style.meta}`}>
        <AppLink to="/" className={style.logo}>
          <Logo
            sx={{
              fontVariationSettings: `"wght" 65`,
              gridArea: "logo",
              fontSize: 11,
              display: "flex",
            }}
          />
        </AppLink>
        <h1 className={`${style.title}`}>{post.title}</h1>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: ["center", "start"],
            gap: ["0.5rem 1.25rem", "0.5rem 2rem"],
            alignItems: "center",
            marginBottom: "1rem",
            fontSize: "12px",
            letterSpacing: "0.05em",
            color: "textDim",
            textTransform: "uppercase",
          }}
        >
          <AppLink to="/articles" sx={{ textTransform: "uppercase", fontFeatureSettings: `"case" on` }}>
            {`‹ All articles`}
          </AppLink>
          {dateText && <div>{dateText}</div>}
        </div>
      </div>
      <MDXProvider components={components}>
        <Page />
      </MDXProvider>
      <ScrollToTop />
    </Layout>
  );
}

export const Route = createFileRoute("/articles/$articleId")({
  loader: async ({ params: { articleId } }) => {
    const article = entryMeta.find((article) => article.id === articleId);
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

const components = {
  wrapper: (props: any) => (
    <div className={`${style.prose}`} {...props}>
      {props.children}
      {/* Article footer */}
      <hr />
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          gap: "1rlh",
          gridColumn: "3/13",
          marginBottom: "2rem",
          textAlign: ["left", "center"],
          padding: "2rem 0",
          "& > *": {
            fontSize: "12px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            ":hover": { opacity: 0.8 },
          },
        }}
      >
        <AppLink to="/articles" sx={{ fontFeatureSettings: `"case" on` }}>
          {`‹ All articles`}
        </AppLink>
        <div sx={{ display: "flex", gap: "2rem", justifyContent: "space-between" }}>
          <RSSLink />
          <EmailLink sx={{ textDecoration: "none", color: "textDim" }} string="hi@graz.io">
            Email
          </EmailLink>
        </div>
      </div>
    </div>
  ),
  p: (props: any) => (
    <Paragraph {...props} sx={{ display: "block" }}>
      {props.children}
    </Paragraph>
  ),

  Link: (props: any) => <AppLink {...props}>{props.children}</AppLink>,
  a: (props: any) => <a {...props} target="_blank" rel="noopener noreferrer"></a>,
  li: (props: any) => <li {...props}></li>,
  ul: (props: any) => <ul {...props}></ul>,
  Img: (props: any) => <Img {...props} />,
  code: (props: any) => <code sx={{}} {...props} />,
  pre: (props: any) => <pre sx={{ fontSize: 5 }} {...props} />,
  h1: (props: any) => <Heading variant="heading" {...props} />,
  h2: (props: any) => <Heading variant="lead" {...props} />,
  h3: (props: any) => <Heading variant="heading" {...props} />,
  h4: (props: any) => <Heading variant="heading" {...props} />,
  h5: (props: any) => <Heading variant="heading" {...props} />,
  h6: (props: any) => <Heading variant="heading" {...props} />,
  small: (props: any) => <small {...props} />,
  Background: (props: any) => <Background {...props} />,
};
