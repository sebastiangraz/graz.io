// Import all article images with metadata
import type { OutputMetadata } from "@/types/blog";

// In Vite's glob import, the metadata is returned as an array of format options
type AssetMetadata = OutputMetadata[];

const assetPaths = import.meta.glob<AssetMetadata>(`@/pages/articles/*/*.{jpg,jpeg,png,svg}`, {
  query: { format: "avif;png", as: "meta:src;format;aspect;width;height" },
  import: "default",
  eager: true,
});

/**
 * Extract article slug and filename from a path
 */
const extractPathInfo = (path: string): { slug: string; filename: string } => {
  const match = path.match(/\/articles\/([^/]+)\/([^/]+)$/);
  return {
    slug: match?.[1] || "",
    filename: match?.[2] || "",
  };
};

// Group assets by article slug for easier lookup
export const articleAssets = Object.entries(assetPaths).reduce(
  (acc, [path, metadata]) => {
    const { slug, filename } = extractPathInfo(path);

    if (!acc[slug]) {
      acc[slug] = {};
    }

    acc[slug][filename] = metadata;
    return acc;
  },
  {} as Record<string, Record<string, AssetMetadata>>,
);

// Flattened collection for backward compatibility
export const allImagePaths = Object.entries(assetPaths).reduce(
  (acc, [path, metadata]) => {
    const { slug, filename } = extractPathInfo(path);
    acc[`${slug}/${filename}`] = metadata;
    return acc;
  },
  {} as Record<string, AssetMetadata>,
);

/**
 * Helper functions to get the current article context
 */
export const getArticleSlugFromUrl = (moduleUrl: string): string | undefined => {
  const match = moduleUrl.match(/\/articles\/([^/]+)\//);
  return match?.[1];
};

export const getArticleSlugFromWindowUrl = (): string | undefined => {
  if (typeof window === "undefined") return undefined;

  const match = window.location.pathname.match(/^\/articles\/([^/]+)/);
  return match?.[1];
};

/**
 * Create a context-aware image lookup helper
 */
export const getImageForArticle = (imageName: string, moduleUrl: string): AssetMetadata | null => {
  // Try to determine the article context using different strategies
  const articleSlug = getArticleSlugFromUrl(moduleUrl) || getArticleSlugFromWindowUrl();

  // First try to find image in the current article's assets
  if (articleSlug && articleAssets[articleSlug]?.[imageName]) {
    return articleAssets[articleSlug][imageName];
  }

  // Fallback: look in all articles
  for (const slug of Object.keys(articleAssets)) {
    if (articleAssets[slug]?.[imageName]) {
      return articleAssets[slug][imageName];
    }
  }

  // Image not found
  return null;
};
