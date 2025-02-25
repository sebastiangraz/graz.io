import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { fileURLToPath, URL } from "url";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
});
