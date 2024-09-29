<template>
	<UCard
		class="rounded-3xl m-3 h-[350px] transition-all hover:ring-2 hover:ring-green-400"
		:ui="{ body: { padding: '' } }"
	>
		<NuxtLink :to="props.data.clone_url">
			<section
				class="relative flex items-center text-white bg-slate-700 w-full min-h-48 p-5 rounded-3xl rounded-b-none"
			>
				<section
					class="absolute w-full top-0 left-0 p-5 flex justify-between items-center"
				>
					<section class="flex justify-start items-center">
						<UIcon name="i-grommet-icons:github" class="text-2xl mr-2" />
						<p>{{ $t('githubRepo') }}</p>
					</section>

					<DisplayUrl
						:deployedUrl="props.data.homepage"
						v-if="props.data.homepage"
					/>
				</section>

				<h1 class="text-center mt-8">
					{{ props.data.description }}
				</h1>
			</section>

			<section class="px-3 pb-3">
				<section class="flex justify-between m-3">
					<p class="font-semibold">{{ props.data.name }}</p>
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
		</NuxtLink>
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
		description: string
	}
}
const props = defineProps<props>()
</script>
