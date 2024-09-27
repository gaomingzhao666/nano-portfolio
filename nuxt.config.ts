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
		'@nuxt/icon',
	],

	svgo: {
		componentPrefix: 'ico',
	},

	icon: {
		serverBundle: 'local',
		clientBundle: {
			icons: [
				'skill-icons:html',
				'skill-icons:css',
				'skill-icons:javascript',
				'skill-icons:typescript',
				'skill-icons:vuejs-light',
				'skill-icons:nuxtjs-light',
				'skill-icons:svelte',
				'skill-icons:pinia-light',
				'skill-icons:tailwindcss-light',
				'skill-icons:sass',
				'skill-icons:less-light',
				'skill-icons:vuetify-light',
				'logos:headlessui-icon',
				'logos:element',
				'logos:daisyui',
				'simple-icons:shadcnui',
				'skill-icons:bootstrap',
				'skill-icons:tauri-light',
				'skill-icons:vite-light',
				'skill-icons:vitest-light',
				'skill-icons:vercel-dark',
				'skill-icons:npm-light',
				'skill-icons:pnpm-light',
				'skill-icons:yarn-light',
			],
			// scan all components in the project, include icons
			scan: true,
			includeCustomColletions: true,
			// limit the bundle size of icons to 256kb
			sizeLimitKb: 256,
		},
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

	compatibilityDate: '2024-09-23',
})
