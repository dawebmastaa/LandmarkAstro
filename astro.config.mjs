// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site: 'http://localhost:4321/',

	vite: {
		plugins: [tailwindcss()],
	},

	build: {
    assets: 'compiled',
    site: 'https://test1.ruletheweb.us/',
  },
});
