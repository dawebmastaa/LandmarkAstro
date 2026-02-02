import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site: 'https://test1.ruletheweb.us/',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
});