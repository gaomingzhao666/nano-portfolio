// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  typescript: {
    typeCheck: true,
    strict: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
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

  compatibilityDate: '2024-11-06',
})
