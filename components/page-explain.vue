<template>
	<div>
		<h1>{{ props.message }}</h1>
	</div>
</template>

<script lang="ts" setup>
interface props {
	message: string
}
const props = defineProps<props>()
</script>

<style scoped></style>
