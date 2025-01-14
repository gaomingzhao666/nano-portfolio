<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />

      <NuxtPage />

      <UNotifications />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('app.title')),
  description: computed(() => t('app.description')),
})

// see https://i18n.nuxtjs.org/docs/guide/seo#feature-details
// const i18nHead = useLocaleHead({
//   seo: {
//     canonicalQueries: ['foo'],
//   },
// })
// useHead(() => ({
//   htmlAttrs: {
//     lang: i18nHead.value.htmlAttrs!.lang,
//   },
//   link: [...(i18nHead.value.link || [])],
//   meta: [...(i18nHead.value.meta || [])],
// }))

useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  // This is how progress is calculated by default
  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
})
</script>
