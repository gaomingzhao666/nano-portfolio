<template>
	<div class="h-full">
		<UProgress size="sm" animation="carousel" v-if="isProgress" />
		<index-header />
		<div class="flex">
			<nav-bar />
			<!-- in this case, index page where in index directory is default-->
			<NuxtPage />
		</div>
	</div>
</template>

<script lang="ts" setup>
const isProgress: Ref<boolean> = ref(false)
</script>

<style></style>
