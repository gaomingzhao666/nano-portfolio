<script setup lang="ts">
// for api response test
const TestRepo = async () => {
	const res = await $fetch('/api/repo/info', {
		method: 'GET',
	})
	console.log(res)
}
const TestLanguage = async () => {
	const res = await $fetch(`/api/repo/languages?repo=nano-portfolio`, {
		method: 'GET',
	})
	console.log('this is languages interface response')
	console.log(res)
}

const TestContributors = async () => {
	const res = await $fetch('/api/repo/contributors?repo=nano-portfolio', {
		method: 'GET',
	})
	console.log('this is Contributors interface response')
	console.log(res)
}
</script>

<template>
	<div class="text-center">
		<h1 class="text-center font-bold m-5">TEST</h1>
		<UButton
			icon="i-material-symbols:login"
			color="white"
			variant="solid"
			size="md"
			@click="TestLanguage"
		>
			test languages
		</UButton>
		<UButton
			icon="i-material-symbols:login"
			color="white"
			variant="solid"
			size="md"
			@click="TestContributors"
		>
			test contributors
		</UButton>
	</div>
</template>
