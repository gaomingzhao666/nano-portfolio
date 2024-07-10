<template>
	<main
		class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto"
	>
		<RepoCard v-for="(item, index) in data?.data" :key="index" :data="item" />
	</main>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'Index',
	description:
		'Explore a curated collection of GitHub repositories, organized by language and topic. Find the perfect project to inspire your next development endeavor.',
})

const { data, error } = await useFetch<repoInfoGet>('/api/repo/info', {
	method: 'GET',
})
const router = useRouter()
if (error.value) router.push({ name: 'error' })
</script>
