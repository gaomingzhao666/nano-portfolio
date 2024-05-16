<template>
	<UContainer class="my-5 align-middle">
		<section class="mb-6 text-center max-w-3xl rounded-3xl shadow-lg p-6">
			<UAvatar
				:src="data?.data.data.avatar_url"
				alt="Avatar"
				icon="i-heroicons-photo"
				size="3xl"
			/>
			<h1 class="text-2xl my-3">Hey, there is {{ data?.data.data.name }}!</h1>
			<p class="text-neutral-500 text-sm">
				I am a front-end developer whose with love to using modern technologies,
				I can do also in back-end section using Nodejs ecosystem. I do these
				things with a bachelor degree of computer science and technology.I say
				Chinese natively, and also can say English & Japanese.
			</p>
		</section>

		<section class="mb-6 text-center max-w-3xl rounded-3xl shadow-lg p-6">
			<section class="flex justify-between items-center my-5">
				<section class="nanoFlex border-cyan-800 border-2 rounded-full p-2">
					<UIcon name="i-fluent-emoji-flat:calendar" class="text-3xl" />
					<p class="nanoFont">2020-2024</p>
				</section>
				<section class="nanoFlex">
					<UIcon name="i-fluent-emoji-flat:military-medal" class="text-3xl" />
					<p class="nanoFont">Bachelor</p>
				</section>
			</section>
			<h1 class="text-xl font-bold text-left my-5">
				Computer Science and Technology
			</h1>
			<section class="flex items-center my-3">
				<UIcon name="i-fluent-emoji-flat:school" class="text-3xl mr-2" />
				<p class="nanoFont">Qiqihar Institute of Engineering</p>
			</section>
			<section class="flex items-center mt-3">
				<UIcon name="i-fluent-emoji-flat:house" class="text-3xl mr-2" />
				<p class="nanoFont">Qiqihar, Heilongjiang, China</p>
			</section>
		</section>

		<section class="text-center max-w-3xl rounded-3xl shadow-lg p-6">
			<section class="flex flex-wrap">
				<UBadge
					class="m-1"
					v-for="(item, index) in techStack"
					:key="index"
					size="md"
					>{{ item }}</UBadge
				>
			</section>
		</section>
	</UContainer>
</template>

<script lang="ts" setup>
const techStack = [
	'Html5',
	'CSS3',
	'JavaScript',
	'TypeScript',
	'Nuxt3',
	'Vue3',
	'vue-router',
	'Pinia',
	'TailwindCSS',
	'Bootstrap',
	'NuxtUI',
	'Less',
	'Sass',
	'Vite',
	'NodeJS',
	'Express',
	'MongoDB & Mongoose',
	'Git',
	'Docker',
	'Vercel',
	'VScode',
	'Postman',
]

const { data, pending, error } = await useFetch<githubUserInfoGet>(
	'/api/user/githubUserInfo',
	{
		method: 'GET',
		onResponse({ request, response }) {
			console.log(response.body)
		},
	}
)
console.log(data.value)
</script>

<style>
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
