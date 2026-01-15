import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://petcare.software',
  integrations: [
    tailwind()
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});
