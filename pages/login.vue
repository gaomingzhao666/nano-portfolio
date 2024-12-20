<template>
  <div>
    <h1 class="text-3xl font-medium mb-4 text-center mt-44 my-8">
      {{ $t('login') }}
    </h1>

    <UCard class="max-w-sm mx-auto">
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
        <UFormGroup :label="$t('username')" name="username">
          <UInput v-model="userInfo.username" />
        </UFormGroup>

        <UFormGroup :label="$t('password')" name="password">
          <UInput v-model="userInfo.password" type="password" />
        </UFormGroup>

        <UButton class="w-full text-center block h-10" type="submit">
          {{ $t('submit') }}
        </UButton>

        <p class="text-sm mt-5">
          {{ $t('noAccountDesc') }}
          <NuxtLink to="/register" class="text-primary">
            {{ $t('register') }}
          </NuxtLink>
        </p>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'

useSeoMeta({
  title: 'Login',
  description:
    '"Securely log in to your account and access exclusive content. Use your username and password or sign up for a new account.',
})
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
})

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
const errorMessage: Ref<string> = ref('')
const onSubmit = async () => {
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
  } else errorMessage.value = data.message
}
</script>
