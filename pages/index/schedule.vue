<template>
	<UContainer>
		<!-- title -->
		<h1 class="text-center font-bold text-3xl my-3">
			{{ $t('schedule') }}
		</h1>

		<!-- schedule contents -->
		<section class="mt-5 space-y-5">
			<ScheduleCard
				v-for="(item, index) in scheduleContent"
				:key="index"
				:data="item"
			/>
		</section>
	</UContainer>
</template>

<script lang="ts" setup>
import scheduleContentEN from '@/i18n/content/schedule/en'
import scheduleContentJP from '@/i18n/content/schedule/jp'
import scheduleContentCN from '@/i18n/content/schedule/cn'

const { t, locale } = useI18n()

useSeoMeta({
	title: computed(() => t('schedule.title')),
	description: computed(() => t('schedule.description')),
})

interface ScheduleContent {
	reference: string
	description: string
	version: number
	title: string
	list: {
		text: string
		isDone: boolean
	}[]
}
// make scheduleContent reactive in order to switch localization reactively
let scheduleContent: ScheduleContent[] = reactive(
	locale.value === 'en'
		? scheduleContentEN
		: locale.value === 'cn'
		? scheduleContentCN
		: scheduleContentJP
)

watch(
	() => locale.value,
	(newValue) => {
		switch (newValue) {
			case 'en':
				scheduleContent = scheduleContentEN
				break
			case 'jp':
				scheduleContent = scheduleContentJP
				break
			case 'cn':
				scheduleContent = scheduleContentCN
				break
			default:
				scheduleContent = scheduleContentEN
				break
		}
	}
)
</script>
