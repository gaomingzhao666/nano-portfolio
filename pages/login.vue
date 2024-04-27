<template>
	<h1 class="text-3xl font-medium mb-4 text-center mt-44 my-8">Log in</h1>
	<UCard class="max-w-sm mx-auto">
		<!-- <UButton
			block
			class="mb-4"
			variant="outline"
			color="gray"
			to="/auth/google"
			external
		>
			<UIcon name="i-logos-google-icon" class="h-6 w-6 m-1" /> Log in with
			Google
		</UButton> -->
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
			<p class="text-sm mt-5">
				Don't have an account?
				<NuxtLink to="/register" class="text-primary"> Register </NuxtLink>
			</p>
		</UForm>
	</UCard>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'

const userInfo = reactive({
	username: '',
	password: '',
})

const validate = (userInfo: {
	username: string
	password: string
}): FormError[] => {
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
		const { status, data } = await $fetch<loginPost>('/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				username: userInfo.username,
				password: userInfo.password,
			},
		})

		if (status && data.token) {
			localStorage.setItem('token', data.token)
			toast.add({ title: data.message, color: 'green' })
			navigateTo('/')
		} else {
			errorMessage.value = data.message
		}
	} catch (err) {
		console.log('try catch err in onSubmit login.vue')
		console.log(err)
	}
}
</script>
