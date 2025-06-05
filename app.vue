<template>
	<div>
		<NuxtLayout>
			<!-- <NuxtLoadingIndicator /> -->

			<UApp>
				<NuxtPage />
			</UApp>

			<!-- <UNotifications /> -->
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
	title: computed(() => t('app.title')),
	description: computed(() => t('app.description')),
})

useLoadingIndicator({
	duration: 2000,
	throttle: 200,
	// This is how progress is calculated by default
	estimatedProgress: (duration, elapsed) =>
		(2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
})
</script>
