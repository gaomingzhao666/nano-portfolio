<template>
	<main
		class="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"
		v-if="!pending"
	>
		<div
			class="group rounded-3xl shadow-md m-3 hover:shadow-lg transition-all"
			v-for="(item, index) in data?.data"
			:key="index"
		>
			<section
				class="relative text-white bg-slate-700 w-full min-h-48 p-5 rounded-3xl rounded-b-none"
			>
				<section class="flex justify-start items-center">
					<UIcon name="i-grommet-icons:github" class="text-3xl mr-2" />
					<p>Github Repo</p>
				</section>

				<h1
					class="text-2xl text-center my-10 transition-all group-hover:text-3xl"
				>
					<a :href="item.clone_url">Click to Repo</a>
				</h1>

				<displayUrl
					:deployedUrl="item.homepage"
					v-if="item.homepage"
					class="hidden absolute bottom-3 right-3 group-hover:block"
				/>
			</section>

			<div class="px-3 pb-3">
				<div class="flex justify-between m-3">
					<p>{{ item.name }}</p>
					<UBadge variant="soft" size="md" :label="item.language" />
				</div>

				<UBadge
					class="m-1 space-y-3"
					:ui="{ rounded: 'rounded-full' }"
					v-for="(childItem, index) in item.topics"
					:key="index"
					:label="childItem"
				/>
			</div>
		</div>
	</main>

	<skeleton v-else />
</template>

<script lang="ts" setup>
const { data, pending, error } = await useFetch<repoInfoGet>('/api/repo/info', {
	method: 'GET',
})
</script>
