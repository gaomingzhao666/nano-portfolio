<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>

		<UNotifications />
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'nano-portfolio',
	description:
		'Nano-portfolio is a developer introduction web application integrated with Github Octokit and Nuxt3 ecosystem that includes Nuxt-UI  Nuxt-Mongoose Pinia i18n etc. All of the modules are officially compatible with Nuxt3, and all of the code inside of this project uses composition API and ESM.',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
