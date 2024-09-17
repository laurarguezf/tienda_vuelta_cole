// vite.config.js
import { defineConfig } from "vite";
// html partals
import injectHTML from "vite-plugin-html-inject";
// optimize images
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Get all html files

export default defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
  },
  server: {
    open: "/index.html",
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
});
