<template>
	<NuxtLink :to="props.data.clone_url">
		<UCard
			class="rounded-3xl m-3 h-[350px] transition-all cursor-pointer hover:ring-2 hover:ring-green-400"
		>
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
						v-if="props.data.homepage"
						:deployed-url="props.data.homepage"
					/>
				</section>

				<h1 class="w-full text-center mt-8">
					{{ props.data.description }}
				</h1>
			</section>

			<section class="px-3 pb-3">
				<section class="flex justify-between m-3">
					<p class="font-semibold">{{ props.data.name }}</p>
					<UBadge variant="soft" :label="props.data.language" />
				</section>

				<UBadge
					v-for="(childItem, index) in props.data.topics"
					:key="index"
					class="m-1 space-y-3 rounded-lg"
					variant="subtle"
					:label="childItem"
				/>
			</section>
		</UCard>
	</NuxtLink>
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

<style scoped>
.nano-text {
	font-size: 12px;
	line-height: 20px;
}
</style>
