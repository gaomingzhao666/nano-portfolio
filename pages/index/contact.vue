<template>
	<UContainer class="my-10">
		<h1 class="text-center font-bold text-3xl my-10">
			{{ $t('contactMe') }}
		</h1>

		<UCard class="rounded-3xl border-gray-100 my-6">
			<section class="flex items-center m-5">
				<ico-phone class="text-3xl mr-3" />
				<p>+86 13244687353</p>
			</section>

			<section class="flex items-center m-5">
				<ico-email class="text-3xl mr-3" />
				<p>gaomingzhao666@outlook.com</p>
			</section>

			<section class="flex items-center m-5">
				<ico-address class="text-3xl mr-3" />
				<p>{{ $t('earth') }}</p>
			</section>
		</UCard>

		<UCard class="text-center rounded-3xl border-gray-100 my-6">
			<a href="https://github.com/gaomingzhao666">
				<UButton
					icon="i-grommet-icons:github"
					size="sm"
					color="black"
					class="rounded-full"
				/>
			</a>
		</UCard>
	</UContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'Contact me',
	description: 'Find my contact information',
})
</script>
