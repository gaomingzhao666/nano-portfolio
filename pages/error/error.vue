<!-- GPT4 generate -->
<template>
	<div class="error-container">
		<div class="error-title">404</div>
		<div class="error-description">
			The page you're looking for can't be found.
		</div>
		<nuxt-link to="/">
			<UButton class="error-button" size="xl">Go Home</UButton>
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Error',
	description: 'Error page.',
})
</script>

<style scoped>
.error-container {
	text-align: center;
	padding: 30px;
	width: 380px;
	background-color: #ffffff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
}

.error-title {
	color: red;
	font-size: 5rem;
	margin: 0;
}
.error-description {
	color: gray;
	margin: 16px 0;
}
</style>
