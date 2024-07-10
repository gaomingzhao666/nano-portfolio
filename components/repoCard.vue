<template>
	<UCard
		class="group rounded-3xl m-3 hover:shadow-lg transition-all"
		:ui="{ body: { padding: '' } }"
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
				<a :href="props.data.clone_url">{{ $t('clickToRepo') }}</a>
			</h1>

			<displayUrl
				:deployedUrl="props.data.homepage"
				v-if="props.data.homepage"
				class="block md:hidden absolute bottom-3 right-3 group-hover:block"
			/>
		</section>

		<section class="px-3 pb-3">
			<section class="flex justify-between m-3">
				<p>{{ props.data.name }}</p>
				<UBadge variant="soft" size="md" :label="props.data.language" />
			</section>

			<UBadge
				class="m-1 space-y-3"
				:ui="{ rounded: 'rounded-full' }"
				v-for="(childItem, index) in props.data.topics"
				:key="index"
				:label="childItem"
			/>
		</section>
	</UCard>
</template>

<script lang="ts" setup>
interface props {
	data: {
		clone_url: string
		homepage: string
		name: string
		language: string
		topics: string[]
	}
}
const props = defineProps<props>()
</script>

<style></style>
