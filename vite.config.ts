import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { fileURLToPath, URL } from "url";
import { imagetools } from "vite-imagetools";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import("@mdx-js/rollup");
  return {
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react({
        include: "**/*.tsx",
      }),
      svgrPlugin(),
      imagetools({
        defaultDirectives: () => {
          return new URLSearchParams({
            format: "webp",
            quality: "80",
          });
        },
      }),
      mdx.default({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
      }),
      // ViteImageOptimizer({
      //   //exclude avif files and `public/device-slice-shadow.png`
      //   exclude: /.*\.avif$|device-slice-shadow\.png/,
      //   png: {
      //     quality: 80,
      //     progressive: true,
      //   },
      // }),
    ],
    build: {
      // Reduce chunk size by setting a larger minimum size
      chunkSizeWarningLimit: 1000,
      // Use terser for better compression
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // Disable source maps in production to reduce memory usage
      sourcemap: false,
    },
    resolve: {
      alias: [
        /* '@': '/src' */
        { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      ],
    },
  };
});
