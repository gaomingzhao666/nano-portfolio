<template>
  <header class="flex justify-between items-center m-5 border-b-gray-700">
    <div class="flex">
      <ico-nano class="text-5xl rounded-full" />

      <div class="ml-3">
        <p class="text-blue-600 text-lg">
          Nano
        </p>
        <p class="text-gray-500 text-sm">
          Front-end developer
        </p>
      </div>
    </div>

    <UInput
      icon="i-mingcute:search-line"
      size="lg"
      color="white"
      trailing
      placeholder="Search projects"
      class="w-1/3"
    />

    <UButton
      icon="i-material-symbols:login"
      color="white"
      variant="solid"
      size="md"
    >
      Login
    </UButton>
  </header>
  <UDivider />
</template>

<script lang="ts" setup></script>