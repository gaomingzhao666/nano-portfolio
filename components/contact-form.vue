<template>
	<UContainer class="my-10">
		<h1 class="text-center font-bold text-3xl my-10">
			{{ $t('contactForm') }}
		</h1>

		<UCard class="rounded-3xl my-6">
			<UFormGroup
				label="Subject"
				size="lg"
				description="Enter your title or subject for this form"
				required
				class="m-5 w-[320px]"
			>
				<UInput
					placeholder="Job Invitation"
					icon="i-heroicons-envelope"
					v-model="formData.title"
				/>
			</UFormGroup>

			<UFormGroup
				size="lg"
				label="Email"
				hint="Optional"
				description="Leave an email so that I can contact you"
				class="m-5 w-[320px]"
			>
				<UInput
					placeholder="You@example.com"
					icon="i-heroicons-envelope"
					v-model="formData.email"
				/>
			</UFormGroup>

			<UFormGroup size="lg" label="Content" required class="m-5 w-[320px]">
				<UTextarea
					placeholder="We have decided to invite you for a brief interview, you can access this address..."
					v-model="formData.contents"
				/>
			</UFormGroup>
		</UCard>

		<UButton
			@click="send"
			class="text-lg rounded-2xl mt-6"
			block
			:disabled="isSended"
		>
			{{ $t('sendEmail') }}
		</UButton>
	</UContainer>
</template>

<script lang="ts" setup>
const isSended: Ref<boolean> = ref(false)
interface FormData {
	username: string
	email: string
	title: string
	contents: string
}
const formData: FormData = reactive({
	username: useCookie('username').value || 'unlogined',
	email: '',
	title: '',
	contents: '',
})
const send = async () => {
	const { data, status } = await $fetch<formSendGet>('/api/form/send', {
		method: 'GET',
		query: {
			username: formData.username,
			email: formData.email || 'Email not provided',
			title: formData.title,
			contents: formData.contents,
		},
	})

	if (status) isSended.value = true

	const toast = useToast()
	toast.add({ title: data.message })
}
</script>
