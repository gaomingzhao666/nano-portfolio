<template>
	<main
		class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto"
	>
		<section
			class="group rounded-3xl shadow-md m-3 hover:shadow-lg transition-all"
			v-for="(item, index) in data?.data"
			:key="index"
		>
			<section
				class="relative text-white bg-slate-700 w-full min-h-48 p-5 rounded-3xl rounded-b-none"
			>
				<section class="flex justify-start items-center">
					<UIcon name="i-grommet-icons:github" class="text-3xl mr-2" />
					<p>{{ $t('githubRepo') }}</p>
				</section>

				<h1
					class="text-2xl text-center my-10 transition-all group-hover:text-3xl"
				>
					<a :href="item.clone_url">{{ $t('clickToRepo') }}</a>
				</h1>

				<displayUrl
					:deployedUrl="item.homepage"
					v-if="item.homepage"
					class="block md:hidden absolute bottom-3 right-3 group-hover:block"
				/>
			</section>

			<section class="px-3 pb-3">
				<section class="flex justify-between m-3">
					<p>{{ item.name }}</p>
					<UBadge variant="soft" size="md" :label="item.language" />
				</section>

				<UBadge
					class="m-1 space-y-3"
					:ui="{ rounded: 'rounded-full' }"
					v-for="(childItem, index) in item.topics"
					:key="index"
					:label="childItem"
				/>
			</section>
		</section>
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
