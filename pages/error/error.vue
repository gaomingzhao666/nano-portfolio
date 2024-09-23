<template>
	<UContainer class="w-screen h-screen text-center mt-64">
		<h1 class="text-5xl">Seems like something went wrong</h1>
		<NuxtLink to="/">
			<UButton variant="outline" size="xl" class="mt-10">Back to Home</UButton>
		</NuxtLink>
	</UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Error',
	description: 'Error page.',
})
</script>
