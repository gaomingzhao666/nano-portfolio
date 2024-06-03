<template>
	<div class="h-full">
		<index-header />
		<div class="flex">
			<nav-bar class="hidden md:block" />
			<!-- in this case, index page where in index directory is default -->
			<NuxtPage />
		</div>
	</div>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'Index',
	description:
		'Discover a showcase of full-stack projects built with Nuxt 3 and its official libraries. Explore the work of passionate developers and find inspiration for your next web project.',
})
</script>
