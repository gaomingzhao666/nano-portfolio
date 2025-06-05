<template>
	<nav class="m-3 h-full md:w-[65px] lg:min-w-[200px] xl:min-w-[250px]">
		<UNavigationMenu
			:items="[
				{
					label: $t('explore'),
					icon: 'i-heroicons:cpu-chip',
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
				{
					label: $t('comments'),
					icon: 'i-heroicons:chat-bubble-oval-left-ellipsis',
					to: '/comments',
				},
			]"
			:ui="{
				padding: 'p-6',
				rounded: 'rounded-lg',
			}"
			orientation="vertical"
		/>
	</nav>
</template>
