/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter','system-ui' ,'sans-serif'],
			mono: ['Red Hat Mono','Consolas', 'SFMono-Regular'],
		},
	},
	plugins: [ require('@tailwindcss/typography'),],
}
