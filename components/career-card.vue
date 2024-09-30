<template>
	<UCard
		class="w-full rounded-3xl text-center space-x-2 first:ring-2 first:ring-green-400"
	>
		<section class="flex justify-between items-center">
			<h2 class="font-semibold">
				{{ props.data.startDate }} - {{ props.data.endDate }}
			</h2>

			<UBadge color="cyan" variant="soft" size="md">{{
				props.data.employType
			}}</UBadge>
		</section>

		<section class="flex flex-wrap md:flex-nowrap justify-around mt-2">
			<section class="w-full">
				<h1 class="font-bold text-xl text-start">{{ props.data.position }}</h1>

				<div class="flex items-center justify-start text-gray-600">
					<p>{{ props.data.company }}</p>
					&nbsp; | &nbsp;
					<p>{{ props.data.site }}</p>
				</div>
			</section>

			<section>
				<ul class="list-disc text-start ml-3">
					<!-- responsible for -->
					<li v-for="(item, index) in props.data.positionRoles" :key="index">
						{{ item }}
					</li>
				</ul>
			</section>
		</section>
	</UCard>
</template>

<script lang="ts" setup>
interface Props {
	data: {
		startDate: string
		endDate: string
		employType: string
		position: string
		company: string
		site: string
		positionRoles: string[]
	}
}
const props = defineProps<Props>()
</script>
