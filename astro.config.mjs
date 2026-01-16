// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import autoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site: 'https://test1.ruletheweb.us/',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
    autoImport({
      imports: [
        { name: 'Images', from: '~/components/ui/Images.astro' }
      ]
    })
  ],
});