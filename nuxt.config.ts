// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
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
		'@nuxtjs/i18n',
		'nuxt-svgo',
	],
	svgo: {
		componentPrefix: 'ico',
	},

	mongoose: {
		uri: 'mongodb://localhost:27017/nano-portfolio',
		options: {},
	},

	i18n: {
		vueI18n: './i18n.config.ts', // if you are using custom path, default
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				iso: 'en-US',
			},
			{
				code: 'jp',
				iso: 'ja',
			},
			{
				code: 'cn',
				iso: 'zh-CN',
			},
		],
	},
})
