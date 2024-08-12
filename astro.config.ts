import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// No need to import cheerio explicitly, as it's already handled by astro-icon

// (link unavailable)
export default defineConfig({
  site: '(link unavailable)',
  vite: {
    ssr: {
      // Exclude @iconify/tools and cheerio from external dependencies
      noExternal: ['@iconify/tools', 'cheerio'],
    },
  },
  integrations: [
    icon(),
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});