<template>
	<UContainer class="w-screen h-screen text-center mt-64">
		<h1 class="text-5xl">{{ $t('errorDesc') }}</h1>
		<NuxtLink to="/">
			<UButton variant="outline" size="xl" class="mt-10">{{
				$t('backToHome')
			}}</UButton>
		</NuxtLink>
	</UContainer>
</template>
