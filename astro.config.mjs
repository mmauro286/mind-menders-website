import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mindmenderz.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('thank-you'),
    }),
  ],
  build: {
    format: 'file', // outputs /about.html instead of /about/index.html
  },
});
