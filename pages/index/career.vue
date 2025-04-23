<template>
	<UContainer>
		<!-- if you have no career, set it's display property to true -->
		<!-- <h1 v-if="true" class="text-center mt-52 text-3xl">
			Wanna be the first? Please
			<NuxtLink to="/contact" class="text-blue-600">contact me</NuxtLink>
		</h1> -->

		<!-- title -->
		<h1 class="text-center font-bold text-3xl my-3">
			{{ $t('career') }}
		</h1>

		<!-- career contents -->
		<section class="mt-5 space-y-5">
			<CareerCard
				v-for="(item, index) in carrerContent"
				:key="index"
				:data="item"
			/>
		</section>
	</UContainer>
</template>

<script lang="ts" setup>
import carrerContentEN from '@/i18n/content/career/en'
import carrerContentJP from '@/i18n/content/career/jp'
import carrerContentCN from '@/i18n/content/career/cn'

const { t, locale } = useI18n()

useSeoMeta({
	title: computed(() => t('career.title')),
	description: computed(() => t('career.description')),
})

interface CareerContent {
	startDate: string
	endDate: string
	employType: string
	position: string
	company: string
	site: string
	positionRoles: string[]
}
// make carrerContent reactive in order to switch localization reactively
let carrerContent: CareerContent[] = reactive(carrerContentEN)

watch(
	() => locale.value,
	(newValue) => {
		switch (newValue) {
			case 'en':
				carrerContent = carrerContentEN
				break
			case 'jp':
				carrerContent = carrerContentJP
				break
			case 'cn':
				carrerContent = carrerContentCN
				break
			default:
				carrerContent = carrerContentEN
				break
		}
	}
)
</script>
