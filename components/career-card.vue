<template>
	<!-- make the most recent activity highlight -->
	<UCard
		class="w-full rounded-3xl space-x-2 first:ring-2 first:ring-green-400 group"
	>
		<section class="flex border-b-[1px] pb-4 justify-between items-center">
			<h2 class="font-semibold">
				{{ props.data.startDate }} - {{ props.data.endDate }}
			</h2>

			<section class="flex gap-x-2">
				<UBadge
					color="lime"
					variant="soft"
					size="md"
					class="hidden group-first:block"
					>{{ $t('recent') }}</UBadge
				>

				<UBadge color="amber" size="md" variant="soft">{{
					props.data.employType
				}}</UBadge>
			</section>
		</section>

		<section
			class="flex flex-wrap md:flex-nowrap space-x-2 justify-between mt-4"
		>
			<section class="w-full">
				<h1 class="font-semibold text-xl mb-2 text-start">
					{{ props.data.position }}
				</h1>

				<div
					class="flex items-center justify-start text-sm flex-wrap text-gray-600"
				>
					<p>{{ props.data.company }}</p>
					&nbsp;
					<p class="opacity-30">|</p>
					&nbsp;
					<p>{{ props.data.site }}</p>
				</div>
			</section>

			<section>
				<ul class="list-disc text-start ml-3">
					<!-- responsible for -->
					<li
						v-for="(item, index) in props.data.positionRoles"
						:key="index"
						class="min-w-64 max-w-[428px]"
					>
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
