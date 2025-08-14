// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: true,
	typescript: {
		typeCheck: true,
	},

	routeRules: {
		'/': { prerender: true },
		'/index': { prerender: true },
	},

	app: {
		head: {
			templateParams: {
				separator: '·',
			},
		},
	},

	alias: {
		// in nuxt3, there have no src folder to storage codes that devs write, so the @ is using for root path
		'@': import.meta.dirname,
	},

	modules: [
		'@nuxt/test-utils/module',
		'nuxt-mongoose',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@nuxtjs/i18n',
		'nuxt-svgo',
		'@nuxt/icon',
		'@nuxt/eslint',
		'@nuxtjs/seo',
	],

	svgo: {
		// enable custom icons from img file
		componentPrefix: 'ico',
	},

	icon: {
		// default: set automatically by nuxt, when deploy on a serverless platform such as vercel, set to local, if deploy on a server, set to remote
		// here to spesifically set to local because all of the icon-sets are installed locally, that is also a recommend way
		serverBundle: 'local',
	},

	mongoose: {
		uri: 'mongodb+srv://vercel-admin-user:AUK7HEtudWfWbJt3@gaomingzhao.skelvi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		options: {},
	},

	// see https://i18n.nuxtjs.org/docs/guide/seo
	i18n: {
		defaultLocale: 'en',
		baseUrl: 'https://nano-portfolio-ruby.vercel.app',

		locales: [
			{
				code: 'en',
				name: 'English',
				language: 'en-US',
			},
			{
				code: 'jp',
				name: '日本語',
				language: 'ja',
			},
			{
				code: 'cn',
				name: '简体中文',
				language: 'zh-CN',
			},
		],
	},

	// see https://nuxtseo.com/
	site: {
		title: 'Nano Portfolio',
		url: 'https://nano-portfolio-ruby.vercel.app',
	},

	schemaOrg: {
		identity: 'Person',
	},

	seo: {
		meta: {
			description:
				'A modern and open-source developers portfolio template that can automatically import Github profile and repository information, made by Vue/Nuxt ecosystem and Octokit APIs',
			themeColor: [
				{ content: '#111827', media: '(prefers-color-scheme: dark)' },
				{ content: 'white', media: '(prefers-color-scheme: light)' },
			],

			colorScheme: 'dark light',
		},
	},

	robots: {
		// tell Google.com do not indexing /error pages
		disallow: ['/error'],
	},
	ogImage: {
		enabled: false,
	},

	compatibilityDate: '2025-08-14',
})
