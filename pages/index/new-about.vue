<template>
	<UContainer class="my-5 align-middle">
		<section
			class="mb-6 max-w-3xl flex flex-wrap justify-around items-center space-x-5"
		>
			<UCard class="w-full md:w-[450px] h-56 text-center rounded-3xl">
				<UAvatar
					:src="data?.data.data.avatar_url"
					alt="Avatar"
					icon="i-heroicons-photo"
					size="3xl"
				/>

				<h1 class="text-2xl my-3">Hello 👋 I am</h1>
				<h1 class="text-2xl my-3">Nano@Gaomingzhao</h1>
			</UCard>

			<UCard class="w-full md:w-64 h-56 rounded-3xl">
				<h1 class="text-2xl mb-3">Language</h1>
				<ul class="space-y-2">
					<li class="flex justify-between">
						English
						<UBadge color="primary" variant="soft">TOEIC 800</UBadge>
					</li>
					<li class="flex justify-between">
						Chinese
						<UBadge color="primary" variant="soft">NATIVE</UBadge>
					</li>
					<li class="flex justify-between">
						Japanese
						<UBadge color="primary" variant="soft">JLPT N1</UBadge>
					</li>
				</ul>
			</UCard>
		</section>

		<section></section>
		<UCard class="mb-6 text-center max-w-3xl rounded-3xl">
			<section class="flex justify-between items-center mb-5">
				<section class="nanoFlex border-cyan-800 border-2 rounded-full p-2">
					<UIcon name="i-fluent-emoji-flat:calendar" class="text-3xl" />
					<p class="nanoFont">2020-2024</p>
				</section>

				<section class="nanoFlex">
					<UIcon name="i-fluent-emoji-flat:military-medal" class="text-3xl" />
					<p class="nanoFont">{{ $t('degree') }}</p>
				</section>
			</section>

			<h1 class="text-xl font-bold text-left my-5">
				{{ $t('major') }}
			</h1>

			<section class="flex items-center my-3">
				<UIcon name="i-fluent-emoji-flat:school" class="text-3xl mr-2" />
				<p class="nanoFont">Qiqihar Institute of Engineering</p>
			</section>

			<section class="flex items-center mt-3">
				<UIcon name="i-fluent-emoji-flat:house" class="text-3xl mr-2" />
				<p class="nanoFont">Qiqihar, Heilongjiang, China</p>
			</section>
		</UCard>

		<UCard class="text-center max-w-3xl rounded-3xl">
			<!-- <section class="flex flex-wrap">
				<UBadge
					class="m-1"
					v-for="(item, index) in techStack"
					:key="index"
					:ui="{ rounded: 'rounded-lg' }"
					>{{ item }}</UBadge
				>
			</section> -->
			<img
				:src="`${index.baseSkillIconUrl}html,css,javascript,typescript,nuxtjs,vue,svelte,pinia,tailwindcss,vuetify,bootstrap,less,sass,vite,vitest,nodejs,express,mongodb,tauri,git,github,stackoverflow,vercel,vscode,postman,npm,pnpm,md,figma,&theme=${index.colorMode.value}`"
				alt="icons"
			/>
		</UCard>
	</UContainer>
</template>

<script lang="ts" setup>
useSeoMeta({
	title: 'About me',
	description:
		'About [Nano] - A Full-Stack Developer specializing in Vue3, Nuxt3, and modern web technologies. Discover my expertise in JavaScript, TypeScript, MongoDB, and more. Explore my projects and connect with me!',
})

const index = useIndexStore()

// const techStack = [
// 	'Html',
// 	'CSS',
// 	'JavaScript',
// 	'TypeScript',
// 	'Nuxt',
// 	'Vue',
// 	'vue-router',
// 	'Pinia',
// 	'TailwindCSS',
// 	'Bootstrap',
// 	'NuxtUI',
// 	'Less',
// 	'Sass',
// 	'Vite',
// 	'NodeJS',
// 	'Express',
// 	'MongoDB & Mongoose',
// 	'Git',
// 	'Docker',
// 	'Vercel',
// 	'VScode',
// 	'Postman',
// ]

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
.nanoFlex {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.nanoFont {
	margin-left: 5px;

	font-weight: bold;
	font-size: small;
}
</style>
