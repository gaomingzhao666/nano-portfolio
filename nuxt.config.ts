// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  // server-side rendering
  ssr: true,
  // third part of modules
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module'
  ],
})
