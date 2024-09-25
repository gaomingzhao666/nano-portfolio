<template>
	<UContainer class="my-5">
		<!-- top -->
		<section
			class="space-y-3 md:space-y-0 my-3 md:mb-6 flex flex-wrap justify-around items-center md:space-x-3"
		>
			<!-- left card -->
			<UCard class="w-full md:w-[450px] h-56 text-center rounded-3xl">
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
				<ul class="space-y-2">
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
				class="w-full h-64 md:w-[450px] md:h-56 text-center flex items-center rounded-3xl"
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
				<h1 class="text-xl font-bold text-left mb-3">
					{{ $t('major') }}
				</h1>

				<!-- location -->
				<section class="flex items-center mb-3">
					<UIcon name="i-fluent-emoji-flat:house" class="text-3xl mr-2" />
					<p class="font-semibold ml-1">China</p>
				</section>

				<!-- tags group 1 -->
				<section
					class="mt-2 flex flex-wrap justify-start items-center space-x-2"
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
			<UCard class="w-full md:w-[384px] h-56 rounded-3xl text-center space-x-2">
				<div class="text-start">
					<UIcon
						v-for="(item, index) in frontendStackIcon"
						:key="index"
						:name="item"
						class="w-[40px] h-[40px] mx-1"
					/>
				</div>
			</UCard>

			<UCard class="w-full md:w-24 h-56 rounded-3xl text-center space-x-2">
				<div class="text-start">
					<UIcon
						v-for="(item, index) in backendStackIcon"
						:key="index"
						:name="item"
						class="w-[40px] h-[40px] mx-1"
					/>
				</div>
			</UCard>

			<UCard class="w-full md:w-48 h-56 rounded-3xl text-center space-x-2">
				<div class="text-start">
					<UIcon
						v-for="(item, index) in toolStackIcon"
						:key="index"
						:name="item"
						class="w-[40px] h-[40px] mx-1"
					/>
				</div>
			</UCard>
		</section>
	</UContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'About me',
	description:
		'About [Nano] - A Full-Stack Developer specializing in Frontend, Backend, UI/UX, and modern web technologies. Discover my expertise in Html, CSS, JavaScript, TypeScript, NodeJS, Express, MongoDB, and more. Explore my projects and connect with me!',
})
// static data to show my skills and fields of study
const courseTags: Ref<string[]> = ref([
	'Data Structure and Algorithms',
	'Networking',
	'Database principles',
])
const courseTags2: Ref<string[]> = ref([
	'Software Engineering',
	'Computer Architecture',
	'Operating Systems',
])

const mainStack: Ref<{ name: string; value: number }[]> = ref([
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
		name: 'DevOps',
		value: 50,
	},
])

const frontendStackIcon: Ref<string[]> = ref([
	'i-skill-icons:html',
	'i-skill-icons:css',
	'i-skill-icons:javascript',
	'i-skill-icons:typescript',
	'i-skill-icons:vuejs-light',
	'i-skill-icons:nuxtjs-light',
	'i-skill-icons:svelte',
	'i-skill-icons:pinia-light',
	'i-skill-icons:tailwindcss-light',
	'i-skill-icons:sass',
	'i-skill-icons:less-light',
	'i-skill-icons:vuetify-light',
	'i-logos:headlessui-icon',
	'i-logos:element',
	'i-logos:daisyui',
	'i-simple-icons:shadcnui',
	'i-skill-icons:bootstrap',
	'i-skill-icons:tauri-light',
	'i-skill-icons:vite-light',
	'i-skill-icons:vitest-light',
	'i-skill-icons:vercel-dark',
	'i-skill-icons:npm-light',
	'i-skill-icons:pnpm-light',
	'i-skill-icons:yarn-light',
])
const backendStackIcon: Ref<string[]> = ref([
	'i-skill-icons:nodejs-light',
	'i-skill-icons:expressjs-light',
	'i-skill-icons:mongodb',
	'i-skill-icons:postman',
])
const toolStackIcon: Ref<string[]> = ref([
	'i-skill-icons:vscode-light',
	'i-skill-icons:docker',
	'i-skill-icons:git',
	'i-skill-icons:github-dark',
	'i-skill-icons:stackoverflow-light',
	'i-skill-icons:figma-dark',
	'i-skill-icons:markdown-light',
	'i-skill-icons:windows-light',
	'i-skill-icons:linux-light',
	'i-logos:chrome',
	'i-logos:microsoft-edge',
])

const { data, error } = await useFetch<githubUserInfoGet>(
	'/api/user/githubUserInfo',
	{
		method: 'GET',
	}
)
const router = useRouter()
if (error.value) router.push({ name: 'error' })

const initNotice = () => {
	const router = useRouter()
	const toast = useToast()

	const toastAction = ref([
		{
			label: 'Never Show Again',
			click: () => {
				// here's false value is just the comment to programmers
				// actually, once it exist, it will never show again
				localStorage.setItem('isNotice', 'false')
			},
		},
		{
			label: 'Back to Legacy',
			click: () => {
				router.push({ name: 'about' })
			},
		},
	])

	if (!localStorage.getItem('isNotice'))
		toast.add({
			title: 'Hey there!',
			description:
				'Here is new About Page, click back button to legacy About Page',
			icon: 'i-fluent-emoji-flat:flushed-face',

			actions: toastAction.value,
		})
}

onMounted(() => {
	initNotice()
})
</script>
