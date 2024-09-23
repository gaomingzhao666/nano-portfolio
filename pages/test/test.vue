<script setup lang="ts">
// for api response test
const testResend = async () => {
	const res = await $fetch('/api/form/send', {
		method: 'GET',
	})

	console.log(res)
}
</script>

<template>
	<section class="text-center">
		<UButton
			icon="i-material-symbols:login"
			color="white"
			variant="solid"
			size="md"
			@click="testResend"
		>
			test resend
		</UButton>
	</section>
</template>
