<template>
	<UContainer>
		<!-- <h1 v-if="true" class="text-center mt-52 text-3xl">
			Wanna be the first? Please
			<NuxtLink to="/contact" class="text-blue-600">contact me</NuxtLink>
		</h1> -->

		<!-- I have no career since 2025, I probably start my career in winter of 2025 in japan, so temporarily hide this by set vif as false -->
		<!-- title -->
		<h1 class="text-center font-bold text-3xl my-3" v-if="true">
			{{ $t('career') }}
		</h1>

		<!-- career contents -->
		<section class="mt-5 space-y-5" v-if="true">
			<CareerCard
				v-for="(item, index) in [
					{
						startDate: '2022.01',
						endDate: '2022.12',
						employType: 'Full-time',
						position: 'Software Engineer',
						company: 'Xiaomi',
						site: 'New york, US',
						positionRoles: [
							// role 1
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							// role 2
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						],
					},
					{
						startDate: '2020.01',
						endDate: '2021.12',
						employType: 'Full-time',
						position: 'Software Engineer',
						company: 'Xiaomi',
						site: 'New york, US',
						positionRoles: [
							// role 1
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							// role 2
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						],
					},
					{
						startDate: '2018.01',
						endDate: '2020.01',
						employType: 'Full-time',
						position: 'Software Engineer',
						company: 'Xiaomi',
						site: 'New york, US',
						positionRoles: [
							// role 1
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							// role 2
							'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						],
					},
				]"
				:key="index"
				:data="item"
			/>
		</section>
	</UContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'Career',
	description: 'Discover my professional journey.',
})
</script>
