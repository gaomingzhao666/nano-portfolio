<template>
	<!-- make the most recent activity highlight -->
	<NuxtLink :to="props.data.reference">
		<UCard
			class="w-full rounded-3xl space-x-2 group hover:ring transition-all cursor-pointer"
		>
			<section
				class="flex border-b-[1px] border-gray-200 dark:border-gray-600 pb-4 justify-between items-center"
			>
				<h2 class="font-semibold group-hover:underline">
					{{ props.data.title }}
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
						`v${props.data.version}`
					}}</UBadge>
				</section>
			</section>

			<section
				class="flex flex-wrap md:flex-nowrap space-x-2 justify-between mt-4"
			>
				<section class="w-full flex flex-col items-start justify-between">
					<h1 class="text-sm text-gray-600 mb-2 text-start w-3xl">
						{{ props.data.description }}
					</h1>
				</section>

				<ul class="list-disc text-start ml-3">
					<li
						v-for="(item, index) in props.data.list"
						:key="index"
						:class="[
							'min-w-96',
							'max-w-[428px]',
							{ 'line-through': item.isDone },
						]"
					>
						{{ item.text }}
					</li>
				</ul>
			</section>
		</UCard>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	data: {
		reference: string
		description: string
		version: number
		title: string
		list: {
			text: string
			isDone: boolean
		}[]
	}
}
const props = defineProps<Props>()
</script>
