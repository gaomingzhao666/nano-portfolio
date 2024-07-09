<template>
	<div>
		<NuxtLayout>
			<NuxtLoadingIndicator />

			<NuxtPage />

			<UNotifications />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'nano-portfolio',
	description:
		'Nano-portfolio is a full-stack and open-source web application for developer introduction integrated with Github Octokit and Nuxt3 ecosystem that includes Nuxt-UI Nuxt-Mongoose Pinia i18n etc. All of the modules are officially compatible with Nuxt3, and all of the code inside of this project uses composition API and ESM.',
})

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
	duration: 2000,
	throttle: 200,
	// This is how progress is calculated by default
	estimatedProgress: (duration, elapsed) =>
		(2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
})
</script>
