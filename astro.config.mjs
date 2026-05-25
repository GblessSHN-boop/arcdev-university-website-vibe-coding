import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gblessshn-boop.github.io",
  base: "/arcdev-university-website-vibe-coding",
  vite: {
    plugins: [tailwindcss()]
  }
});
