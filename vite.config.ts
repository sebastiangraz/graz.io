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
import rehypePrettyCode from "rehype-pretty-code";
import remarkgfm from "remark-gfm";

// const options = {
//   theme: JSON.parse(fs.readFileSync("./src/utils/syntax.json", "utf-8")),
//   defaultLang: "plaintext",
//   keepBackground: false,
//   showLineNumbers: true,
//   grid: true,
//   transformers: [transformerNotationHighlight()],
// };

// https://vitejs.dev/config/
export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import("@mdx-js/rollup");
  return {
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react({
        include: "**/*.tsx",
      }),
      mdx.default({
        remarkPlugins: [remarkgfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [rehypePrettyCode],
        providerImportSource: "@mdx-js/react",
      }),
      svgrPlugin(),
      imagetools(),
    ],
    resolve: {
      alias: [
        /* '@': '/src' */
        { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      ],
    },
  };
});
