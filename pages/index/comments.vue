<template>
	<UContainer>
		<h1 class="text-center font-bold text-3xl my-5">
			{{ $t('comments') }}
		</h1>

		<CommentsCard v-for="(item, index) in data" :key="index" />
	</UContainer>

	<UButton
		:ui="{ rounded: 'rounded-full' }"
		size="xl"
		@click="isOpen = true"
		class="fixed bottom-5 right-5 p-3"
		>Post Comment</UButton
	>

	<UModal v-model="isOpen">
		<UCard
			:ui="{
				ring: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
			}"
			class="p-3"
		>
			<template #header>
				<h1 class="font-bold text-lg">Post Comment</h1>
			</template>

			<UInputMenu v-model="userType" :options="options" size="lg" />
			<UTextarea
				padded
				placeholder="Write your comment here..."
				variant="outline"
				size="xl"
				class="w-full mt-6"
			/>
		</UCard>
	</UModal>
</template>

<script lang="ts" setup>
const isOpen: Ref<boolean> = ref(false)
const options = ['userName', 'Anonymous']
const userType: Ref<string> = ref(options[0])

const { data, error } = useFetch<getCommentGet>('/api/comment/getComment', {
	method: 'GET',
})

const router = useRouter()
if (error.value) router.push({ name: 'error' })
</script>
