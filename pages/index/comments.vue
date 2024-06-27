<template>
	<main>
		<h1 class="text-center font-bold text-3xl my-3">
			{{ $t('comments') }}
		</h1>

		<section
			class="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
		>
			<CommentsCard
				v-for="(item, index) in data?.data || []"
				:key="index"
				:data="item"
			/>
		</section>
	</main>

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

			<section class="text-end">
				<UTextarea
					v-model="comment"
					padded
					placeholder="Write your comment here..."
					variant="outline"
					size="xl"
					class="w-full"
				/>
				<UButton @click="addComment" class="text-lg mt-5" block>Post</UButton>
			</section>
		</UCard>
	</UModal>
</template>

<script lang="ts" setup>
const isOpen: Ref<boolean> = ref(false)

const { data, error } = useFetch<getCommentGet>('/api/comment/getComment', {
	method: 'GET',
})
console.log(data)

const router = useRouter()
if (error.value) router.push({ name: 'error' })

const comment: Ref<string> = ref('')
const addComment = async () => {
	const toast = useToast()

	if (!comment.value) {
		toast.add({ title: 'Please fill in all fields' })
		return
	}
	const token = useCookie('token').value
	if (!token) {
		toast.add({ title: 'You must login to post a comment' })
		return
	}

	const username = useCookie('username').value
	const { data } = await $fetch<addCommentPost>('/api/comment/addComment', {
		method: 'POST',
		body: {
			username: username,
			comment: comment.value,
			device: getOS(),
		},
	})

	toast.add({ title: data.message })
}
</script>
