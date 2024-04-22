<template>
	<main>
		<h1>index content with default</h1>
		<!-- test image for project -->
		<h1 v-if="!pending">not pending</h1>
		<h2>{{ data }}</h2>
	</main>
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch<repoInfoGet>('/api/repo/info', {
	method: 'GET',
	// server: false,
})
</script>
