<template>
	<main class="grid grid-cols-4 gap-4">
		<div
			class="rounded-2xl shadow m-3"
			v-for="(item, index) in data"
			:key="index"
		>
			<USkeleton class="min-w-full h-1/2" />
			<div class="px-3 pb-3">
				<div class="flex justify-between m-3">
					<USkeleton class="h-4 w-[80px] mx-3" />
					<USkeleton class="h-4 w-[80px] mx-3" />
				</div>

				<USkeleton
					class="m-1 my-3 w-[50px]"
					v-for="(childItem, index) in topicData"
					:key="index"
				/>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
const data: [number] = [0]
for (let index = 0; index < 9; index++) {
	data[index] = 0
}

const topicData: [number] = [0]
for (let index = 0; index < 4; index++) {
	topicData[index] = 0
}
</script>
