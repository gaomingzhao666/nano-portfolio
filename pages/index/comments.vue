<template>
  <main class="w-full">
    <h1 class="text-center font-bold text-3xl my-3">
      {{ $t('comments') }}
    </h1>

    <!-- comments -->
    <section
      class="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
    >
      <CommentsCard
        v-for="(item, index) in data?.data || []"
        v-if="status === 'success'"
        :key="index"
        :data="item"
        @fresh-data="deleteComment"
      />

      <!-- skeleton -->
      <SkeletonComments v-for="(item, index) in skeletonItems" :key="index" />
    </section>

    <!-- post button -->
    <UButton
      :ui="{ rounded: 'rounded-full' }"
      size="xl"
      class="fixed bottom-5 right-5 p-3"
      @click="isOpen = true"
      >{{ $t('postComment') }}</UButton
    >

    <!-- modal component for fill the contents of comment -->
    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
        class="p-3"
      >
        <template #header>
          <h1 class="font-semibold text-lg">{{ $t('postComment') }}</h1>
        </template>

        <section class="text-end">
          <UTextarea
            v-model="comment"
            :placeholder="$t('writeYourCommentHere')"
            size="xl"
            class="w-full"
          />
          <UButton class="text-lg mt-5" block @click="addComment">
            {{ $t('post') }}
          </UButton>
        </section>
      </UCard>
    </UModal>
  </main>
</template>

<script lang="ts" setup>
const isOpen: Ref<boolean> = ref(false)

const skeletonItems: string[] = []
for (let i = 0; i < 10; i++) skeletonItems[i] = ''

const { data, error, status } = useFetch<getCommentGet>(
  '/api/comment/getComment',
  {
    method: 'GET',
    server: false,
  }
)

const router = useRouter()
if (error.value) router.push({ name: 'error' })

const comment: Ref<string> = ref('')
const addComment = async () => {
  const toast = useToast()

  // validate the comment and user login condition
  if (!comment.value) {
    toast.add({ title: 'Please fill in all fields' })
    return
  }
  if (comment.value.length > 300) {
    toast.add({ title: 'Comment too much characters' })
    return
  }
  const token: string | null | undefined = useCookie('token').value
  const username: string | null | undefined = useCookie('username').value
  if (!token || !username) {
    toast.add({ title: 'You must login to post a comment' })
    router.push({ name: 'login' })
    return
  }

  // clean all of the break in a string
  const cleanedComment = comment.value.replace(/[\r\n]+/g, ' ').trim()
  const res = await $fetch<addCommentPost>('/api/comment/addComment', {
    method: 'POST',
    body: {
      username: username,
      comment: cleanedComment,
      device: getOS(),
    },
  })

  toast.add({ title: res.data.message })
  isOpen.value = false

  await refreshNuxtData()
}

const deleteComment = (needFresh: boolean) => {
  if (needFresh) refreshNuxtData()
}
</script>
