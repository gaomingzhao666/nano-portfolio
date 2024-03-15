<template>
  <nav>
    <UVerticalNavigation
      :links="links"
      class="w-64 m-3"
      :ui="{
        padding: 'p-5',
      }"
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
  }
]
</script>
