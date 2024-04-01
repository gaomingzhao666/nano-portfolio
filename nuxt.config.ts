// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	typescript: {
		typeCheck: true,
		strict: true,
	},

	// plugin configuration
	modules: [
		'@nuxt/test-utils/module',
		'nuxt-mongoose',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@morev/vue-transitions/nuxt',
		'@nuxtjs/i18n',
		'nuxt-svgo',
	],
	svgo: {
		componentPrefix: 'ico',
		plugins: [
			{
				removeViewBox: {
					active: false,
				},
			},
		],
	},

	mongoose: {
		uri: 'mongodb://localhost/nano-portfolio',
		options: {},
		// modelsDir: 'models',
		// devtools: true,
	},
	// vueTransitions: {},
})
