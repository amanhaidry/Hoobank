import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Hoobank",
        short_name: "Hoobank",
        description: "A modern banking app",
        theme_color: "#1e2331",
        icons: [
          {
            src: "public/hoobank.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "public/hoobank.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
