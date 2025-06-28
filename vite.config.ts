import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "screenshot1.png" // asegúrate de que exista en /public
      ],
      manifest: {
        id: "/",
        scope: "/",
        name: "Drink Finder",
        short_name: "DrinkFinder",
        description: "Busca recetas de bebidas por ingrediente o categoría",
        lang: "es-MX",
        categories: ["food", "utilities"],
        orientation: "portrait",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#111827",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
    })
  ]
});
