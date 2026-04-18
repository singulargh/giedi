import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://giedi.xyz",
  server: { host: true, port: 4321 },
  devToolbar: { enabled: false },
  // Every route on the deployed site is served without a trailing slash.
  // Vercel's cleanUrls + trailingSlash:false (vercel.json) handles /contact/index.html -> /contact.
  trailingSlash: "never",
  integrations: [sitemap()],
});
