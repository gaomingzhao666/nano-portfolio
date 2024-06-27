<template>
	<UCard class="p-1">
		<section class="flex justify-between items-center">
			<section class="flex justify-start items-center">
				<UIcon name="i-heroicons:user-circle" size="24" />
				<h3 class="ml-1">{{ props.data.username }}</h3>
			</section>
			<UButton color="primary" variant="soft">{{ props.data.device }}</UButton>
		</section>

		<h1 class="text-lg font-bold my-6">{{ props.data.comment }}</h1>

		<section class="flex justify-between items-center">
			<section
				class="flex justify-start items-center transition-all duration-75 hover:cursor-pointer active:scale-110"
			>
				<UIcon name="i-twemoji:sparkling-heart" size="24" />
				<p class="ml-1">{{ props.data.like }}</p>
			</section>
			<section class="flex justify-start items-center">
				<UIcon name="i-heroicons:calendar" size="24" />
				<p class="text-sm ml-1">{{ getLocalTime(props.data.addTime) }}</p>
			</section>
		</section>
	</UCard>
</template>

<script lang="ts" setup>
interface props {
	data: {
		username: string
		comment: comment
		like: number
		device: string
		addTime: string
	}
}
const props = defineProps<props>()
</script>
