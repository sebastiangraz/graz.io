import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { fileURLToPath, URL } from "url";
import { imagetools } from "vite-imagetools";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import remarkFrontmatter, { Options } from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { transformerNotationHighlight } from "@shikijs/transformers";
import rehypeShiki from "@shikijs/rehype";
import remarkgfm from "remark-gfm";
import remarkTypography from "remark-typography";
import { rssPlugin } from "vite-plugin-rss";
import type { Item, Channel } from "vite-plugin-rss";
import { generateRssItems } from "./src/utils/rss";
import { seoPrerenderPlugin, getOgArticleSlugs } from "./src/utils/seo-prerender";
import { SITE_URL } from "./src/utils/site";

// Interface for article metadata
interface ArticleMeta {
  id: string;
  title: string;
  description: string;
  date: Date;
  path: string;
}

// const options = {
//   theme: JSON.parse(fs.readFileSync("./src/utils/syntax.json", "utf-8")),
//   defaultLang: "plaintext",
//   keepBackground: false,
//   showLineNumbers: true,
//   grid: true,
//   transformers: [transformerNotationHighlight()],
// };

// Function to get article metadata from MDX files (similar to entryMeta in the articles route)
const getArticlesMeta = async (): Promise<ArticleMeta[]> => {
  // This is a simplified version that will be updated at build time
  const articles: ArticleMeta[] = [];
  // We'll use globby or similar at build time to collect real data
  return articles;
};

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import("@mdx-js/rollup");

  // Get the site URL from environment or use a default.
  // On Netlify deploy previews / branch deploys, use the deploy's own URL so
  // OG images and canonical links can be verified before going to production.
  const siteUrl =
    process.env.SITE_URL ||
    (process.env.CONTEXT && process.env.CONTEXT !== "production" ? process.env.DEPLOY_PRIME_URL : undefined) ||
    SITE_URL;

  // Define channel configuration for RSS
  const channel: Channel = {
    title: "Sebastian Graz · Articles",
    description: "Independent design consultancy focused on branding, digital design and beautiful implementation.",
    link: siteUrl,
    language: "en",
    ttl: 60,
    copyright: `© ${new Date().getFullYear()} Sebastian Graz`,
    image: {
      url: `${siteUrl}/og.png`,
      title: "Sebastian Graz · Articles",
      link: siteUrl,
    },
    generator: true,
  };

  // Generate RSS items from articles
  const items: Item[] = await generateRssItems(siteUrl);

  return {
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react({
        include: "**/*.tsx",
      }),
      mdx.default({
        remarkPlugins: [remarkgfm, remarkFrontmatter, remarkMdxFrontmatter, remarkTypography],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                light: "slack-ochin",
                dark: "github-dark",
                defaultColor: true,
              },

              inline: "tailing-curly-colon",
              transformers: [transformerNotationHighlight()],
            },
          ],
        ],
        providerImportSource: "@mdx-js/react",
      }),
      svgrPlugin(),
      imagetools({
        // Exclude AVIF sources: sharp/libheif can't decode animated (sequence, brand "avis")
        // AVIF, so these are served as plain assets and rendered directly instead.
        include: /^[^?]+\.(gif|heif|jpeg|jpg|png|tiff|webp)(\?.*)?$/,
        defaultDirectives: () => {
          return new URLSearchParams({
            format: "webp;avif;original",
            quality: "95",
            w: "1800",
          });
        },
      }),

      // RSS feed configuration
      rssPlugin({
        channel,
        // Use define mode with pre-generated items
        mode: "define",
        items,
        fileName: "rss.xml",
      }),

      // Prerender per-article index.html with SEO/OG meta for crawlers
      seoPrerenderPlugin({ siteUrl }),
    ],
    define: {
      __OG_ARTICLE_SLUGS__: JSON.stringify(getOgArticleSlugs()),
    },
    build: {
      // Ship all CSS (~10KB total) in the single head-linked stylesheet instead of
      // code-split chunks. Safari 27's rewritten module loader fails the runtime
      // stylesheet injection Vite uses for split CSS ("Unable to preload CSS"),
      // which broke the homepage; a plain <link> in the HTML is immune.
      cssCodeSplit: false,
    },
    resolve: {
      alias: [
        /* '@': '/src' */
        { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      ],
    },
  };
});
