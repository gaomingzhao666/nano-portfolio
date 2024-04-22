<template>
	<h1 class="text-3xl font-medium mb-5 text-center mt-12 lg:mt-52 my-8">
		User Register
	</h1>
	<UCard class="max-w-sm mx-auto">
		<UDivider class="my-5" label="Type Information" />
		<UAlert
			v-if="errorMessage"
			:title="errorMessage"
			class="mb-2"
			variant="soft"
			color="orange"
		/>
		<UForm
			:validate="validate"
			:state="userInfo"
			class="space-y-4"
			@submit="onSubmit"
		>
			<UFormGroup label="Username" name="username">
				<UInput v-model="userInfo.username" />
			</UFormGroup>

			<UFormGroup label="Password" name="password">
				<UInput v-model="userInfo.password" type="password" />
			</UFormGroup>

			<UButton class="w-full text-center block h-10" type="submit">
				Submit
			</UButton>
		</UForm>
	</UCard>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'

const userInfo = reactive({
	username: '',
	password: '',
})

const validate = (userInfo: any): FormError[] => {
	const errors = []
	if (!userInfo.username)
		errors.push({ path: 'username', message: 'Username Required' })
	if (!userInfo.password)
		errors.push({ path: 'password', message: 'Password Required' })
	return errors
}

const toast = useToast()
let errorMessage: Ref<string> = ref('')

const onSubmit = async () => {
	try {
		const { status, data } = await $fetch<registerPost>('/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				username: userInfo.username,
				password: userInfo.password,
			},
		})

		if (status) {
			toast.add({ title: data.message })
		} else {
			errorMessage.value = data.message
		}
	} catch (err) {
		console.log('try catch err in onSubmit register.vue')
		console.log(err)
	}
}
</script>
