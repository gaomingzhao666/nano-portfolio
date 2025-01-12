// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  typescript: {
    typeCheck: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
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
        'A modern and open-source developers portfolio template that can automatically import Github profile and repository information, made by Nuxt ecosystem and Octokit APIs',
      themeColor: [
        { content: '#111827', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],

      colorScheme: 'dark light',
    },
  },

  robots: {
    disallow: ['/test'],
  },
  ogImage: {
    enabled: false,
  },

  compatibilityDate: '2025-01-12',
})
