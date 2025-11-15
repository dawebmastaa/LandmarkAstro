// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site: import.meta.env.DEV 
    ? 'http://localhost:4321/'
    : 'https://test1.ruletheweb.us/',

	vite: {
		plugins: [tailwindcss()],
	},
});
