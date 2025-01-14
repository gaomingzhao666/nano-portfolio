<template>
  <UContainer class="mt-2">
    <!-- top -->
    <section
      class="space-y-3 md:space-y-0 my-3 md:mb-6 flex flex-wrap justify-around items-center md:space-x-3"
    >
      <!-- left card -->
      <UCard
        class="w-full md:w-[450px] h-56 text-center rounded-3xl nano-container"
      >
        <UAvatar
          :src="data?.data.data.avatar_url"
          alt="Avatar"
          icon="i-heroicons-photo"
          size="3xl"
        />

        <h1 class="text-2xl my-3">{{ $t('sayHey') }}</h1>
        <h1 class="text-2xl my-3">Nano@Gaomingzhao</h1>
      </UCard>

      <!-- right card -->
      <UCard class="w-full md:w-64 h-56 rounded-3xl">
        <h1 class="text-2xl mb-5">{{ $t('language') }}</h1>
        <ul class="space-y-2 font-semibold">
          <li class="flex justify-between">
            {{ $t('english') }}
            <UBadge color="primary" variant="soft">TOEIC 800</UBadge>
          </li>
          <li class="flex justify-between">
            {{ $t('chinese') }}
            <UBadge color="primary" variant="soft">NATIVE</UBadge>
          </li>
          <li class="flex justify-between">
            {{ $t('japanese') }}
            <UBadge color="primary" variant="soft">JLPT N1</UBadge>
          </li>
        </ul>
      </UCard>
    </section>

    <!-- middle -->
    <section
      class="space-y-3 md:space-y-0 my-3 md:mb-6 flex flex-wrap justify-around items-center md:space-x-3"
    >
      <!-- left card -->
      <UCard class="w-full md:w-64 h-56 rounded-3xl">
        <section
          v-for="(item, index) in mainStack"
          :key="index"
          class="flex justify-between items-center my-2"
        >
          <h1 class="text-md font-semibold">{{ item.name }}</h1>
          <UMeter size="xl" :value="item.value" class="w-32" />
        </section>
      </UCard>

      <!-- right card -->
      <UCard
        class="w-full h-64 md:w-[450px] md:h-56 flex justify-center items-center rounded-3xl"
      >
        <!-- calendar of study -->
        <section class="flex justify-between items-center mb-3">
          <section
            class="flex items-center border-cyan-800 border-2 rounded-full p-2"
          >
            <UIcon name="i-fluent-emoji-flat:calendar" class="text-3xl" />
            <p class="font-semibold ml-1">2020-2024</p>
          </section>

          <!-- degree title -->
          <section class="flex items-center">
            <UIcon name="i-fluent-emoji-flat:military-medal" class="text-3xl" />
            <p class="font-semibold ml-1">{{ $t('degree') }}</p>
          </section>
        </section>

        <!-- major title -->
        <h1 class="text-xl font-bold text-left my-3">
          {{ $t('major') }}
        </h1>

        <!-- location -->
        <section class="flex items-center my-3">
          <UIcon name="i-fluent-emoji-flat:house" class="text-3xl mr-2" />
          <p class="font-semibold ml-1">China</p>
        </section>

        <!-- tags group 1 -->
        <section
          class="mt-3 flex flex-wrap justify-start items-center space-x-2"
        >
          <span
            v-for="(item, index) in courseTags"
            :key="index"
            class="text-xs font-semibold"
            >#{{ item }}</span
          >
        </section>
        <!-- tags group 2 -->
        <section class="flex flex-wrap justify-start items-center space-x-2">
          <span
            v-for="(item, index) in courseTags2"
            :key="index"
            class="text-xs font-semibold"
            >#{{ item }}</span
          >
        </section>
      </UCard>
    </section>

    <!-- bottom -->
    <section
      class="space-y-3 md:space-y-0 my-3 md:mb-6 flex flex-wrap justify-around items-center md:space-x-3"
    >
      <!-- frontend stack -->
      <UCard class="w-full md:w-[384px] h-56 rounded-3xl text-center space-x-2">
        <div class="text-start">
          <UTooltip
            v-for="(item, index) in frontendStackIcon"
            :key="index"
            :text="item.name"
          >
            <UIcon :name="item.icon" class="w-[40px] h-[40px] mx-1" />
          </UTooltip>
        </div>
      </UCard>

      <!-- backend stack -->
      <UCard class="w-full md:w-24 h-56 rounded-3xl text-center space-x-2">
        <UTooltip>
          <div class="text-start">
            <UTooltip
              v-for="(item, index) in backendStackIcon"
              :key="index"
              :text="item.name"
            >
              <UIcon :name="item.icon" class="w-[40px] h-[40px] mx-1" />
            </UTooltip>
          </div>
        </UTooltip>
      </UCard>

      <!-- tool stack -->
      <UCard class="w-full md:w-48 h-56 rounded-3xl text-center space-x-2">
        <UTooltip>
          <div class="text-start">
            <UTooltip
              v-for="(item, index) in toolStackIcon"
              :key="index"
              :text="item.name"
            >
              <UIcon :name="item.icon" class="w-[40px] h-[40px] mx-1" />
            </UTooltip>
          </div>
        </UTooltip>
      </UCard>
    </section>
  </UContainer>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('about.title')),
  description: computed(() => t('about.description')),
})

// static data to show my skills and fields of study
const courseTags = [
  'Data Structure and Algorithms',
  'Networking',
  'Database principles',
]
const courseTags2 = [
  'Software Engineering',
  'Computer Architecture',
  'Operating Systems',
]

const mainStack = [
  {
    name: 'Frontend',
    value: 100,
  },
  {
    name: 'Backend',
    value: 65,
  },
  {
    name: 'UI/UX',
    value: 40,
  },
  {
    name: 'Testing',
    value: 60,
  },
  {
    name: 'CI/CD',
    value: 30,
  },
]

const frontendStackIcon = [
  {
    icon: 'i-skill-icons:html',
    name: 'html',
  },
  {
    icon: 'i-skill-icons:css',
    name: 'css',
  },
  {
    icon: 'i-skill-icons:javascript',
    name: 'javascript',
  },
  {
    icon: 'i-skill-icons:typescript',
    name: 'typescript',
  },
  {
    icon: 'i-skill-icons:vuejs-light',
    name: 'vue',
  },
  {
    icon: 'i-skill-icons:nuxtjs-light',
    name: 'nuxt',
  },
  {
    icon: 'i-skill-icons:svelte',
    name: 'svelte',
  },
  {
    icon: 'i-skill-icons:pinia-light',
    name: 'pinia',
  },
  {
    icon: 'i-skill-icons:tailwindcss-light',
    name: 'tailwindcss',
  },
  {
    icon: 'i-skill-icons:sass',
    name: 'sass',
  },
  {
    icon: 'i-skill-icons:less-light',
    name: 'less',
  },
  {
    icon: 'i-skill-icons:vuetify-light',
    name: 'vuetify',
  },
  {
    icon: 'i-logos:headlessui-icon',
    name: 'headlessui',
  },
  {
    icon: 'i-logos:element',
    name: 'element',
  },
  {
    icon: 'i-logos:daisyui',
    name: 'daisyui',
  },
  {
    icon: 'i-simple-icons:shadcnui',
    name: 'shadcnui',
  },
  {
    icon: 'i-skill-icons:bootstrap',
    name: 'bootstrap',
  },
  {
    icon: 'i-skill-icons:tauri-light',
    name: 'tauri',
  },
  {
    icon: 'i-skill-icons:vite-light',
    name: 'vite',
  },
  {
    icon: 'i-skill-icons:vitest-light',
    name: 'vitest',
  },
  {
    icon: 'i-skill-icons:vercel-dark',
    name: 'vercel',
  },
  {
    icon: 'i-skill-icons:npm-light',
    name: 'npm',
  },
  {
    icon: 'i-skill-icons:pnpm-light',
    name: 'pnpm',
  },
  {
    icon: 'i-skill-icons:yarn-light',
    name: 'yarn',
  },
]
const backendStackIcon = [
  { icon: 'i-skill-icons:nodejs-light', name: 'node' },
  { icon: 'i-skill-icons:expressjs-light', name: 'express' },
  { icon: 'i-skill-icons:mongodb', name: 'mongodb' },
  { icon: 'i-skill-icons:postman', name: 'postman' },
]
const toolStackIcon = [
  { icon: 'i-skill-icons:vscode-light', name: 'vscode' },
  { icon: 'i-skill-icons:docker', name: 'docker' },
  { icon: 'i-skill-icons:git', name: 'git' },
  { icon: 'i-skill-icons:github-dark', name: 'github' },
  { icon: 'i-skill-icons:stackoverflow-light', name: 'stackoverflow' },
  { icon: 'i-skill-icons:figma-dark', name: 'figma' },
  { icon: 'i-skill-icons:markdown-light', name: 'markdown' },
  { icon: 'i-skill-icons:windows-light', name: 'windows' },
  { icon: 'i-skill-icons:linux-light', name: 'linux' },
  { icon: 'i-logos:chrome', name: 'chrome' },
  { icon: 'i-logos:microsoft-edge', name: 'edge' },
]

const { data, error } = await useFetch<githubUserInfoGet>(
  '/api/user/githubUserInfo',
  {
    method: 'GET',
  }
)
const router = useRouter()
if (error.value) router.push({ name: 'error' })
</script>

<style scoped>
/* From Uiverse.io by kennyotsu-monochromia */
.nano-container {
  --color: #e1e1e1;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    );
  background-size: 55px 55px;
}
</style>
