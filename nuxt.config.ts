// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	typescript: {
		typeCheck: true,
		strict: true,
	},
	imports: {
		autoImport: true,
	},

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
		// plugins: [
		// 	{
		// 		removeViewBox: {
		// 			active: false,
		// 		},
		// 	},
		// ],
	},

	mongoose: {
		uri: 'mongodb://localhost:27017/nano-portfolio',
		options: {},
	},
	// vueTransitions: {},
	i18n: {
		vueI18n: './i18n.config.ts', // if you are using custom path, default
		defaultLocale: 'en',
		locales: ['en', 'cn', 'jp'],
	},
})
