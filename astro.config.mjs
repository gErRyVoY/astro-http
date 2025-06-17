// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), vue()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    server: {
        // port: process.env.PORT || 3000
        port: Number(process.env.PORT ?? 3000)
    }
});
