<template>
	<UCard
		class="p-1 group rounded-3xl transition-all hover:ring-2 hover:ring-green-500"
	>
		<section class="flex justify-between items-center">
			<section class="flex justify-start items-center">
				<UIcon name="i-heroicons:user-circle" size="24" />
				<h3 class="ml-1">{{ props.data.username }}</h3>
			</section>

			<section class="flex justify-end items-center">
				<UButton
					icon="i-heroicons:trash"
					color="red"
					variant="soft"
					size="sm"
					class="mr-1 sm:visible md:invisible group-hover:visible"
					@click="deleteComment"
				/>

				<UButton color="primary" variant="soft" size="sm">{{
					props.data.device
				}}</UButton>
			</section>
		</section>

		<h1 class="text-lg font-bold my-6">{{ props.data.comment }}</h1>

		<section class="flex justify-between items-center">
			<section
				class="flex justify-start items-center transition-all duration-75 hover:cursor-pointer active:scale-110"
				@click="likeComment"
			>
				<heart />
				<p class="ml-1">{{ props.data.like }}</p>
			</section>

			<section class="flex justify-start items-center">
				<UIcon name="i-heroicons:calendar" size="24" />
				<p class="text-sm ml-1">{{ localTime }}</p>
			</section>
		</section>
	</UCard>
</template>

<script lang="ts" setup>
interface props {
	data: {
		username: string
		comment: string
		like: number
		device: string
		addTime: string
	}
}
const props = defineProps<props>()

const localTime: string = getLocalTime(props.data.addTime)

const toast = useToast()
const likeComment = async () => {
	const { data } = await $fetch<likePut>('/api/comment/like', {
		method: 'PUT',
		body: { username: props.data.username, comment: props.data.comment },
	})

	toast.add({ title: data.message })
	props.data.like = props.data.like + 1
}

const emit = defineEmits<{
	(e: 'freshData', needFresh: boolean): void
}>()
const deleteComment = async () => {
	const { data } = await $fetch<delCommentDelete>(`/api/comment/delComment`, {
		method: 'DELETE',
		query: {
			username: props.data.username,
			comment: props.data.comment,
		},
	})

	toast.add({ title: data.message })

	if (useCookie('token').value && useCookie('username').value)
		emit('freshData', true)
}
</script>
