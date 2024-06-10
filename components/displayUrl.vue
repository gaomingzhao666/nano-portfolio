<template>
	<div>
		<a
			:href="props.deployedUrl"
			class="text-sm p-1 hover:border-b-2 hover:border-b-sky-200"
		>
			{{ $t('clickToWebsite') }}
		</a>
	</div>
</template>

<script lang="ts" setup>
interface props {
	deployedUrl: string
}
const props = defineProps<props>()
</script>
