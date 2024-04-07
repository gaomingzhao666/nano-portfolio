<script setup lang="ts">
// setTimeout(async () => {
// 	const res = await useFetch('/api/register')
// 	console.log('there is res content')
// 	console.log(res)
// }, 10000)

const registerTest = async () => {
	try {
		const res = await useFetch('/api/register')
		console.log(res)
	} catch (err) {
		console.log(err)
	}
}
</script>

<template>
	<div>
		<h1>TEST</h1>
		<UButton
			icon="i-material-symbols:login"
			color="white"
			variant="solid"
			size="md"
			@click="registerTest"
		>
			test json
		</UButton>
	</div>
</template>
