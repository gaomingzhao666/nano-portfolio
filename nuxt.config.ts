// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // server-side rendering
  ssr: true,
  // third part of modules
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
    'nuxt-mongoose',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@morev/vue-transitions/nuxt',
    '@nuxtjs/i18n',
  ],

  mongoose: {
    uri: 'process.env.MONGODB_URI',
    options: {},
    modelsDir: 'models',
  },
  // vueTransitions: {},
})
