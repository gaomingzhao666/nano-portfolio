<template>
	<main class="grid grid-cols-4 gap-4" v-if="!pending">
		<div
			class="rounded-2xl shadow m-3 hover:shadow-lg transition"
			v-for="(item, index) in data?.data.data"
			:key="index"
		>
			<img
				src="../../assets/images/repoImage/reposImage.svg"
				class="rounded-2xl rounded-b-none"
			/>

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
// get github repos information
const { data, pending, error } = await useFetch<repoInfoGet>('/api/repo/info', {
	method: 'GET',
	// onResponse({ request, response }) {
	// 	console.log(response.status)
	// },
})

// watchEffect(() => {
// 	if (error) navigateTo('/error')
// })
</script>
