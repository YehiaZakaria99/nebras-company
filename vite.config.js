import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // بيعمل تقرير بعد build تلاقيه في dist/stats.html
    visualizer({
      filename: "dist/stats.html",
      template: "treemap", // ممكن "sunburst" أو "network"
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          gsap: ["gsap", "@gsap/react"],
          leaflet: ["leaflet"],
          slick: ["react-slick", "slick-carousel"],
          photo: ["react-photo-view"],
          org: ["react-organizational-chart"],
          pageflip: ["react-pageflip"],
        },
      },
    },
  },
});
