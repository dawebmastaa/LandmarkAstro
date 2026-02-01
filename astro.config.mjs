import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site: 'https://test1.ruletheweb.us/',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [AutoImport({
    imports: [
      // Import a component’s default export
      // generates:
      // import A from './src/components/A.astro';
      './src/components/ui/Images.astro',
    ],
  }), mdx(), sitemap()],
});