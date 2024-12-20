<template>
  <UContainer class="my-10">
    <h1 class="text-center font-bold text-3xl my-10">
      {{ $t('contactForm') }}
    </h1>

    <UCard class="rounded-3xl my-6">
      <UFormGroup
        :label="$t('contactFormSubject')"
        size="lg"
        :description="$t('contactFormSubjectDesc')"
        required
        class="m-5 w-[320px]"
      >
        <UInput
          v-model="formData.title"
          :placeholder="$t('contactFormPlaceholder')"
          icon="i-heroicons-envelope"
          class="font-semibold"
        />
      </UFormGroup>

      <UFormGroup
        size="lg"
        :label="$t('contactEmail')"
        :hint="$t('contactEmailOptional')"
        :description="$t('contactEmailDesc')"
        class="m-5 w-[320px]"
      >
        <UInput
          v-model="formData.email"
          placeholder="You@example.com"
          icon="i-heroicons-envelope"
          class="font-semibold"
        />
      </UFormGroup>

      <UFormGroup size="lg" label="Content" required class="m-5 w-[320px]">
        <UTextarea
          v-model="formData.contents"
          :placeholder="$t('contactFormContent')"
          class="font-semibold"
        />
      </UFormGroup>
    </UCard>

    <UButton
      class="text-lg rounded-2xl mt-6"
      block
      :disabled="isSended"
      @click="send"
    >
      {{ $t('send') }}
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
