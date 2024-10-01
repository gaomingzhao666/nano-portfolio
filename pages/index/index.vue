<template>
	<main
		class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto"
	>
		<RepoCard
			v-for="(item, index) in data?.data"
			:key="index"
			:data="item"
			v-if="isFilteredRepoExists"
		/>
		<h1 class="fixed top-1/3 left-1/2 transform font-bold text-3xl" v-else>
			{{ noFilteredReposNotice }}
		</h1>
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

const route = useRoute()

// when search keyword changes, get filtered repos
let isFilteredRepoExists: Ref<boolean> = ref(true)
let noFilteredReposNotice: Ref<string> = ref('')
const getFilteredRepos = async (keywords: string) => {
	const filteredReposByName = await $fetch<repoSearchByNameGet>(
		`/api/repo/search/byName`,
		{
			method: 'GET',
			query: {
				repoName: keywords,
			},
		}
	)
	const filteredReposByTopics = await $fetch<repoSearchByTopicsGet>(
		`/api/repo/search/byTopics`,
		{
			method: 'GET',
			query: {
				repoTopics: keywords,
			},
		}
	)

	let filteredRepos: any | string = []
	filteredRepos = [
		...(filteredReposByName.status ? filteredReposByName.data : []),
		...(filteredReposByTopics.status ? filteredReposByTopics.data : []),
	]

	return {
		status: filteredReposByName.status || filteredReposByTopics.status,
		data: filteredRepos,
	}
}
watchEffect(async () => {
	if (route.query.searchKeywords) {
		const filteredRepos = await getFilteredRepos(
			route.query.searchKeywords.toString()
		)

		if (filteredRepos.status) {
			isFilteredRepoExists.value = true
			data.value = filteredRepos
		} else {
			isFilteredRepoExists.value = false
			noFilteredReposNotice.value = 'No repos found'
		}
	}
})
</script>
