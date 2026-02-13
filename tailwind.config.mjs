/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Base - Deep Space
				space: {
					900: '#020810', // Void Black
					800: '#061020', // Deep Space
					700: '#0c1a30', // Space Blue
				},
				// Tron Blue Spectrum
				neon: {
					cyan: '#00e5ff',    // Bright cyan glow
					blue: '#00b8ff',    // Electric blue
					white: '#e0f7ff',   // Light beam
					sky: '#4dc9ff',     // Sky blue accent
				},
				// Blue Accents
				accent: {
					deep: '#0066cc',    // Deep blue
					navy: '#003d7a',    // Navy
					ice: '#b3e5fc',     // Ice blue
				},
				// LCARS Blue Theme
				lcars: {
					primary: '#00aaff',   // Primary display
					secondary: '#0088cc', // Secondary panel
					tertiary: '#66ccff',  // Tertiary accent
					dark: '#004488',      // Dark panel
					light: '#99ddff',     // Light indicator
					glow: '#00ffff',      // Glow effect
				}
			},
			fontFamily: {
				heading: ['Orbitron', 'sans-serif'],
				body: ['Rajdhani', 'sans-serif'],
				mono: ['Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace'],
			},
			boxShadow: {
				'neon-blue': '0 0 8px theme("colors.neon.cyan"), 0 0 25px theme("colors.neon.cyan"), 0 0 40px theme("colors.neon.blue")',
				'neon-soft': '0 0 8px theme("colors.neon.sky"), 0 0 20px theme("colors.lcars.primary")',
				'lcars-glow': '0 0 10px theme("colors.lcars.glow"), 0 0 30px theme("colors.lcars.primary")',
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
			},
		},
	},
	plugins: [],
}
