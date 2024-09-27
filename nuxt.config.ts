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
				'i-skill-icons:html',
				'i-skill-icons:css',
				'i-skill-icons:javascript',
				'i-skill-icons:typescript',
				'i-skill-icons:vuejs-light',
				'i-skill-icons:nuxtjs-light',
				'i-skill-icons:svelte',
				'i-skill-icons:pinia-light',
				'i-skill-icons:tailwindcss-light',
				'i-skill-icons:sass',
				'i-skill-icons:less-light',
				'i-skill-icons:vuetify-light',
				'i-logos:headlessui-icon',
				'i-logos:element',
				'i-logos:daisyui',
				'i-simple-icons:shadcnui',
				'i-skill-icons:bootstrap',
				'i-skill-icons:tauri-light',
				'i-skill-icons:vite-light',
				'i-skill-icons:vitest-light',
				'i-skill-icons:vercel-dark',
				'i-skill-icons:npm-light',
				'i-skill-icons:pnpm-light',
				'i-skill-icons:yarn-light',
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
