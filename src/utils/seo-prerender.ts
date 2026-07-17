import fs from "fs";
import path from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import type { Plugin } from "vite";
import { SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./site";

const ARTICLES_DIR = "src/pages/articles";

export interface SeoData {
  title: string;
  description: string;
  url: string;
  image: string;
  type: "website" | "article";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSeoBlock(seo: SeoData): string {
  const e = escapeHtml;
  return [
    "<!-- seo:start -->",
    `<title>${e(seo.title)}</title>`,
    `<meta name="description" content="${e(seo.description)}" />`,
    `<link rel="canonical" href="${seo.url}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:site_name" content="${e(SITE_NAME)}" />`,
    `<meta property="og:title" content="${e(seo.title)}" />`,
    `<meta property="og:description" content="${e(seo.description)}" />`,
    `<meta property="og:url" content="${seo.url}" />`,
    `<meta property="og:image" content="${seo.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${e(seo.title)}" />`,
    `<meta name="twitter:description" content="${e(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.image}" />`,
    "<!-- seo:end -->",
  ].join("\n    ");
}

const SEO_BLOCK_PATTERN = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

/**
 * Slugs of articles that ship their own og.png (used to build the
 * client-side ogImage in entryMeta via the __OG_ARTICLE_SLUGS__ define).
 */
export function getOgArticleSlugs(): string[] {
  return glob.sync("*/og.png", { cwd: path.resolve(process.cwd(), ARTICLES_DIR) }).map((p) => path.dirname(p));
}

/**
 * Crawlers don't run JS, so the Helmet tags in the article route never reach
 * them — every URL gets the SPA's static index.html. This plugin writes a
 * prerendered dist/articles/<slug>/index.html per article with the frontmatter
 * meta baked into the <!-- seo:start/end --> block, and copies the article's
 * og.png next to it. Netlify serves real files before applying the /* redirect.
 */
export function seoPrerenderPlugin({ siteUrl }: { siteUrl: string }): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(process.cwd(), "dist");
      const templatePath = path.join(distDir, "index.html");
      if (!fs.existsSync(templatePath)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping");
        return;
      }
      const template = fs.readFileSync(templatePath, "utf-8");
      if (!SEO_BLOCK_PATTERN.test(template)) {
        throw new Error("[seo-prerender] <!-- seo:start --> / <!-- seo:end --> markers missing from index.html");
      }

      const writePage = (outFile: string, seo: SeoData) => {
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, template.replace(SEO_BLOCK_PATTERN, renderSeoBlock(seo)));
      };

      // Article list page
      writePage(path.join(distDir, "articles", "index.html"), {
        title: `${SITE_NAME} · Articles`,
        description: DEFAULT_DESCRIPTION,
        url: `${siteUrl}/articles`,
        image: `${siteUrl}/og.png`,
        type: "website",
      });

      // One page per article, from its MDX frontmatter
      const articlesDir = path.resolve(process.cwd(), ARTICLES_DIR);
      const articlePaths = glob.sync("*/index.mdx", { cwd: articlesDir, absolute: true });
      for (const articlePath of articlePaths) {
        const slug = path.basename(path.dirname(articlePath));
        const { data } = matter(fs.readFileSync(articlePath, "utf-8"));
        const outDir = path.join(distDir, "articles", slug);

        let image = `${siteUrl}/og.png`;
        const ogSource = path.join(path.dirname(articlePath), "og.png");
        if (fs.existsSync(ogSource)) {
          fs.mkdirSync(outDir, { recursive: true });
          fs.copyFileSync(ogSource, path.join(outDir, "og.png"));
          image = `${siteUrl}/articles/${slug}/og.png`;
        }

        writePage(path.join(outDir, "index.html"), {
          title: data.title ? `${SITE_NAME} · ${data.title}` : DEFAULT_TITLE,
          description: data.description || DEFAULT_DESCRIPTION,
          url: `${siteUrl}/articles/${slug}`,
          image,
          type: "article",
        });
        console.log(`[seo-prerender] articles/${slug}`);
      }
    },
  };
}
