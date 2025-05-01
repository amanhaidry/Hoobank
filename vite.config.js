import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "HooBank",
        short_name: "HooBank",
        description: "A modern banking app",
        theme_color: "#1e2331",
        background_color: "#1e2331",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/hoobank.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/hoobank2.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true, // Ensures old caches are removed
      },
    }),
  ],
});
