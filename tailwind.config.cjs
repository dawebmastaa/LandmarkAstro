/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
	theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
        ,'heliotrope': {
          '50': '#f8edfd',
          '100': '#efd6fb',
          '200': '#e2b1f7',
          '300': '#d78ef3',
          '400': '#ce6af0',
          '500': '#c746ed',
          '600': '#a931ca',
          '700': '#83249d',
          '800': '#5b166e',
          '900': '#340940',
          '950': '#200429',
        },
        'lilac-bush': {
          '50': '#f2effd',
          '100': '#e4dcfb',
          '200': '#cebff8',
          '300': '#bca4f5',
          '400': '#ab8bf2',
          '500': '#9c72ef',
          '600': '#894dea',
          '700': '#6f2acb',
          '800': '#4c1a8f',
          '900': '#2a0b53',
          '950': '#180535',
        },
        'electric-violet': {
          50: 'hsl(var(--electric-violet-50) / <alpha-value>)',
          100: 'hsl(var(--electric-violet-100) / <alpha-value>)',
          200: 'hsl(var(--electric-violet-200) / <alpha-value>)',
          300: 'hsl(var(--electric-violet-300) / <alpha-value>)',
          400: 'hsl(var(--electric-violet-400) / <alpha-value>)',
          500: 'hsl(var(--electric-violet-500) / <alpha-value>)',
          600: 'hsl(var(--electric-violet-600) / <alpha-value>)',
          700: 'hsl(var(--electric-violet-700) / <alpha-value>)',
          800: 'hsl(var(--electric-violet-800) / <alpha-value>)',
          900: 'hsl(var(--electric-violet-900) / <alpha-value>)',
          950: 'hsl(var(--electric-violet-950) / <alpha-value>)',
        }
      }
    },
  },
	plugins: [
  ],
}
