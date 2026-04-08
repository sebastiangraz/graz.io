/**
 * Resolves `og` frontmatter values to Vite-built asset URLs for files colocated with each article’s MDX.
 * Also supports absolute URLs and site-root paths (e.g. `/og.png` in `public/`).
 *
 * Colocated images must be named with an `-og` stem before the extension (e.g. `figleaf-og.png`) so we can
 * glob them without pulling every article asset through `?url` (imagetools can fail on some PNGs).
 */
import { getSiteUrl } from "@/utils/siteUrl";

const ogUrlBySlugAndFile = (() => {
  const modules = import.meta.glob<string>("@/pages/articles/*/*-og.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const map: Record<string, string> = {};
  for (const [path, url] of Object.entries(modules)) {
    const normalized = path.replace(/\\/g, "/");
    const match = normalized.match(/\/articles\/([^/]+)\/([^/]+)$/);
    if (match) {
      map[`${match[1]}/${match[2]}`] = url;
    }
  }
  return map;
})();

const toAbsoluteUrl = (pathOrUrl: string): string => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const base = getSiteUrl().replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
};

/** Turn frontmatter `og` into an absolute URL for meta tags, or undefined if missing / not found. */
export const resolveArticleOgImageUrl = (articleSlug: string, og: string | undefined): string | undefined => {
  if (og === undefined || og === null) return undefined;
  const raw = String(og).trim();
  if (!raw) return undefined;

  if (/^https?:\/\//i.test(raw)) {
    return raw;
  }

  if (raw.startsWith("/")) {
    return toAbsoluteUrl(raw);
  }

  const key = `${articleSlug}/${raw}`;
  const built = ogUrlBySlugAndFile[key];
  if (!built) {
    return undefined;
  }

  return toAbsoluteUrl(built);
};
