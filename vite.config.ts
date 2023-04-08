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
      png: {
        quality: 88,
      },
    }),
  ],
});
