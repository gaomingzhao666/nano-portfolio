<template>
  <nav class="flex m-3 h-full">
    <UVerticalNavigation
      :links="links"
      class="h-full"
      :ui="{
        padding: 'p-5',
        width: 'w-64',
        rounded: 'rounded-lg',
      }"
    />
    <UDivider
      orientation="vertical"
      class="m-3 h-full"
    />
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()

const links = [
  {
    label: 'explore',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  }, {
    label: 'experience',
    icon: 'i-heroicons-chart-bar',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  },
  {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  },
   {
    label: 'explore',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  },
]
</script>
