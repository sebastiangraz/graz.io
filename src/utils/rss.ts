import { Item } from "vite-plugin-rss";
import fs from "fs";
import path from "path";
import glob from "fast-glob";
import matter from "gray-matter";

export interface ArticleMeta {
  title: string;
  description: string;
  date: Date;
  slug: string;
  content?: string;
}

/**
 * Extract a text-only preview of content from MDX to use in the RSS feed
 * This is a simple helper that extracts some initial content
 */
function extractContentPreview(content: string, maxLength = 1500): string {
  // Remove MDX/markdown syntax
  // This is a very simple implementation - you might want to use a more robust markdown parser
  const cleanedContent = content
    .replace(/---[\s\S]*?---/g, "") // Remove frontmatter
    .replace(/import.*?from.*?;/g, "") // Remove imports
    .replace(/<.*?>/g, "") // Remove HTML/JSX tags
    .replace(/\[.*?\]\(.*?\)/g, "") // Remove markdown links
    .replace(/!\[.*?\]\(.*?\)/g, "") // Remove markdown images
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`.*?`/g, "") // Remove inline code
    .replace(/#+ /g, "") // Remove headings
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italics
    .replace(/\n+/g, "\n") // Normalize newlines
    .trim();

  // Return a preview of the content
  return cleanedContent.length > maxLength ? cleanedContent.substring(0, maxLength) + "..." : cleanedContent;
}

/**
 * Generate RSS feed items from article MDX files
 * @param baseUrl The base URL for article links
 * @returns Array of RSS feed items
 */
export async function generateRssItems(baseUrl: string): Promise<Item[]> {
  // Base directory for articles
  const articlesDir = path.resolve(process.cwd(), "src/pages/articles");

  // Find all article directories (each containing an index.mdx file)
  const articlePaths = await glob("*/index.mdx", {
    cwd: articlesDir,
    absolute: true,
  });

  // Parse each article to extract metadata
  const articleResults = await Promise.all(
    articlePaths.map(async (articlePath) => {
      try {
        // Read the file content
        const content = fs.readFileSync(articlePath, "utf-8");

        // Extract frontmatter and content using gray-matter
        const { data, content: articleContent, excerpt } = matter(content, { excerpt: true });

        // Get the slug from the directory name
        const articleDir = path.dirname(articlePath);
        const slug = path.basename(articleDir);

        // Extract a readable content preview for the RSS feed
        const contentPreview = extractContentPreview(articleContent);

        return {
          title: data.title || "Untitled Article",
          description: data.description || excerpt || "",
          date: data.date ? new Date(data.date) : new Date(),
          slug,
          content: contentPreview,
        } as ArticleMeta;
      } catch (err) {
        console.error(`Error processing article at ${articlePath}:`, err);
        return null;
      }
    }),
  );

  // Filter out failed articles and sort by date (newest first)
  const articles = articleResults
    .filter((article): article is ArticleMeta => article !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  // Convert to RSS items
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    link: `${baseUrl}/articles/${article.slug}`,
    pubDate: article.date,
    // Add content to the RSS feed - many readers will display this content
    content: article.content,
    // Add a unique guid for each article
    guid: `${baseUrl}/articles/${article.slug}`,
    // Optional: add author information if available
    author: "Sebastian Graz",
  }));
}
