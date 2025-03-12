import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginRequire from "vite-plugin-require";
import svgr from "vite-plugin-svgr";
import topLevelAwait from "vite-plugin-top-level-await";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait(),
    react(),
    svgr(),
    viteTsconfigPaths({
      root: "./",
    }),
    nodePolyfills(),
    vitePluginRequire.default(),
  ],
  define: {
    global: "globalThis",
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
});
