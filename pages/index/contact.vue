<template>
  <UContainer class="mt-5">
    <!-- tabs -->
    <UTabs v-model="selected" :items="items" class="w-full" />

    <!-- content -->
    <ContactInfo v-if="selected === 0" />
    <ContactForm v-if="selected === 1" />
  </UContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Contact me',
  description: 'Find my contact information',
})

const items = [
  {
    label: 'Contact Info',
    component: 'ContactInfo',
    icon: 'i-heroicons:finger-print',
  },
  {
    label: 'Contact Form',
    component: 'ContactForm',
    icon: 'i-heroicons:folder-plus',
  },
]

const route = useRoute()
const router = useRouter()
const selected = computed({
  get() {
    const index = items.findIndex((item) => item.label === route.query.tab)
    if (index === -1) {
      return 0
    }

    return index
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: items[value].label },
      hash: '#control-the-selected-index',
    })
  },
})
</script>
