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

	icon: {
		serverBundle: 'local',
	},
	mongoose: {
		uri: 'mongodb+srv://vercel-admin-user:AUK7HEtudWfWbJt3@gaomingzhao.skelvi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		options: {},
	},

	i18n: {
		vueI18n: './i18n.config.ts', // if you are using custom path, default
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				language: 'en-US',
			},
			{
				code: 'jp',
				language: 'ja',
			},
			{
				code: 'cn',
				language: 'zh-CN',
			},
		],
	},

	compatibilityDate: '2024-09-06',
})
