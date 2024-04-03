import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    ViteImageOptimizer({
      //exclude avif files and `public/device-slice-shadow.png`
      exclude: /.*\.avif$|device-slice-shadow\.png/,
      // avif: {
      //   // https://sharp.pixelplumbing.com/api-output#avif
      //   lossless: true,
      //   quality: 80,
      // },
      png: {
        quality: 96,
      },
    }),
  ],
});
