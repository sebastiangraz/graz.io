const assetPaths = import.meta.glob(`@/pages/articles/*/*.{jpg,jpeg,png}`, {
  query: { format: "avif;png", as: "meta:src;format;aspect;width;height" },
  import: "default",
  eager: true,
});

export const allImagePaths = { ...assetPaths };
