import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: { 
    shikiConfig: { 
      theme: "nord",
      wrap: true, 
      fontFamily: {
        name: "Inconsolata",
        cssURL:
          "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
      },
      fontSize: 14,
    },
  },
});
