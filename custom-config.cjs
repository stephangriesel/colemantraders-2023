module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'pathway-gothic-one':['"Pathway Gothic One"'],
			},
			height: {
				'128': '32rem',
				'144': '36rem',
				'164': '41rem',
				'168': '42rem',
				'172': '43rem',
				'200': '50rem',
			},
      width: {
        '128': '32rem',
      },
			keyframes: {
				fade: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
			animation: {
				'fade-in': 'fade 2s linear',
			},
    },
	},
	plugins: [
		require('flowbite/plugin')
	],
}