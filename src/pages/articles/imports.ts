// Import all article images with metadata
const assetPaths = import.meta.glob(`@/pages/articles/*/*.{jpg,jpeg,png,svg}`, {
  query: { format: "avif;png", as: "meta:src;format;aspect;width;height" },
  import: "default",
  eager: true,
});

/**
 * Extract article slug from a path
 */
const extractArticleSlug = (path: string): string => {
  const match = path.match(/\/articles\/([^/]+)\//);
  return match ? match[1] : "";
};

/**
 * Extract filename from a path
 */
const extractFilename = (path: string): string => {
  return path.split("/").pop() || "";
};

// Group assets by article slug for easier lookup
export const articleAssets = Object.entries(assetPaths).reduce((acc, [path, metadata]) => {
  const articleSlug = extractArticleSlug(path);
  const filename = extractFilename(path);

  // Initialize the article entry if it doesn't exist
  if (!acc[articleSlug]) {
    acc[articleSlug] = {};
  }

  // Add the asset to the article's assets
  acc[articleSlug][filename] = metadata;

  return acc;
}, {} as Record<string, Record<string, any>>);

// Flattened collection for backward compatibility
export const allImagePaths = Object.entries(assetPaths).reduce((acc, [path, metadata]) => {
  const articleSlug = extractArticleSlug(path);
  const filename = extractFilename(path);
  const key = `${articleSlug}/${filename}`;

  acc[key] = metadata;
  return acc;
}, {} as Record<string, any>);

/**
 * Helper function to get the current article context from a module's import.meta.url
 */
export const getArticleSlugFromUrl = (moduleUrl: string): string | undefined => {
  return extractArticleSlug(moduleUrl);
};

/**
 * Helper function to get the current article context from the window URL
 * Safe for SSR (returns undefined during server rendering)
 */
export const getArticleSlugFromWindowUrl = (): string | undefined => {
  // Only run in browser environment
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return undefined;

  const path = window.location.pathname;
  if (path.startsWith("/articles/")) {
    return path.replace("/articles/", "").split("/")[0];
  }

  return undefined;
};

/**
 * Create a context-aware image lookup helper
 */
export const getImageForArticle = (imageName: string, moduleUrl: string): any => {
  // Try to determine the article context using different strategies
  let articleSlug = getArticleSlugFromUrl(moduleUrl) || getArticleSlugFromWindowUrl();

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
