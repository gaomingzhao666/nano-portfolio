<template>
  <div>
    <h1 class="text-3xl font-medium mb-5 text-center mt-12 lg:mt-52 my-8">
      {{ $t('register') }}
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
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'

const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('app.title')),
  description: computed(() => t('app.description')),
})
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
})

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
const errorMessage: Ref<string> = ref('')
const onSubmit = async () => {
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
    toast.add({ title: data.message, color: 'green' })
    navigateTo('/login')
  } else errorMessage.value = data.message
}
</script>
