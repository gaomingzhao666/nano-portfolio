<template>
	<div class="max-w-screen max-h-screen">
		<IndexHeader />

		<main class="flex">
			<NavBar class="hidden md:block" />
			<!-- in this case, index page where in index directory is default -->
			<NuxtPage />
		</main>
	</div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
	title: computed(() => t('index.title')),
	description: computed(() => t('index.description')),
})
</script>
