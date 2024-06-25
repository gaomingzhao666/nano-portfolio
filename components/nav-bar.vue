<template>
	<nav class="flex m-3 h-full w-full md:w-[65px] lg:w-[250px]">
		<UVerticalNavigation
			:links="[
				{
					label: $t('explore'),
					icon: 'i-heroicons:home-solid',
					to: '/',
				},
				{
					label: $t('career'),
					icon: 'i-heroicons:briefcase',
					to: '/career',
				},
				{
					label: $t('about'),
					icon: 'i-heroicons:information-circle',
					to: '/about',
				},
				{
					label: $t('contact'),
					icon: 'i-heroicons:globe-alt',
					to: '/contact',
				},
			]"
			:ui="{
				padding: 'p-6',
				rounded: 'rounded-lg',
			}"
		/>
	</nav>
</template>
