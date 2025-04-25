<template>
	<div>
		<NuxtLink
			:to="props.deployedUrl"
			class="hover:border-b-2 hover:border-b-sky-200"
			target="_blank"
			@click.prevent
		>
			{{ $t('clickToWebsite') }}
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
interface props {
	deployedUrl: string
}
const props = defineProps<props>()
</script>
