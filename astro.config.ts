import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import * as icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        icon.default(),
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});