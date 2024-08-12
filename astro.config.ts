import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: '(link unavailable)',
  vite: {
    ssr: {
      noExternal: ['@iconify/tools', 'cheerio'],
    },
    resolve: {
      alias: {
        cheerio: require.resolve('cheerio/lib/cheerio.js'),
      },
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
