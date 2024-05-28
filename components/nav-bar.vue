<template>
	<nav class="flex m-3 h-full">
		<UVerticalNavigation
			:links="navbar.links"
			class="h-full"
			:ui="{
				padding: 'p-5',
				width: 'w-64',
				rounded: 'rounded-lg',
			}"
		/>
		<UDivider orientation="vertical" class="m-3 h-full" />
	</nav>
</template>

<script lang="ts" setup>
const navbar = useNavbarStore()
</script>
