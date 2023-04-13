import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    ViteImageOptimizer({
      //exclude avif files as regex
      exclude: /.*\.avif$/,
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      png: {
        quality: 88,
      },
    }),
  ],
});
