/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Base
				space: {
					900: '#050510', // Deep Space Black
					800: '#0a0a1a',
				},
				// Tron Accents
				neon: {
					cyan: '#00f3ff',
					blue: '#0066ff',
				},
				rectifier: {
					orange: '#ff9e00',
				},
				// Star Trek / LCARS Accents
				lcars: {
					purple: '#9944ff',
					tan: '#ffcc99',
					red: '#cc4444',
					blue: '#4455bb',
				}
			},
			fontFamily: {
				heading: ['Orbitron', 'sans-serif'],
				body: ['Rajdhani', 'sans-serif'],
				mono: ['Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace'],
			},
			boxShadow: {
				'neon-blue': '0 0 5px theme("colors.neon.cyan"), 0 0 20px theme("colors.neon.cyan")',
				'neon-orange': '0 0 5px theme("colors.rectifier.orange"), 0 0 20px theme("colors.rectifier.orange")',
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
			},
		},
	},
	plugins: [],
}
