/** Base URL for absolute links (OG, RSS, etc.). Prefer live origin in the browser. */
export const getSiteUrl = (): string => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return import.meta.env.VITE_SITE_URL || "https://graz.io";
};
