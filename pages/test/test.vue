<script setup lang="ts">
// setTimeout(async () => {
// 	const res = await useFetch('/api/register')
// 	console.log('there is res content')
// 	console.log(res)
// }, 10000)

const registerTest = async () => {
	setTimeout(async () => {
		const res = await $fetch('/api/auth/register', {
			method: 'post',
			body: {
				username: 'gmzYaa',
				password: 'gmz11',
			},
		})
		console.log(res)
	}, 3000)
}
const testToken = async () => {
	const { data } = await useFetch('/api/test/apiTest?aaaaaaaa=222222')
	console.log('log api test !')
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
