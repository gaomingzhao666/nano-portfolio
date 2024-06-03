<template>
	<section>
		<h1>{{ props.message }}</h1>
	</section>
</template>

<script lang="ts" setup>
interface props {
	message: string
}
const props = defineProps<props>()
</script>

<style scoped></style>
