<template>
	<header class="flex justify-between items-center m-5 border-b-gray-700">
		<NuxtLink
			to="https://github.com/gaomingzhao666"
			target="_blank"
			class="flex"
		>
			<ico-nano class="text-5xl rounded-full nano-rotate" />

			<section class="ml-3 hidden md:block">
				<p class="text-blue-600 text-lg font-semibold">{{ $t('name') }}</p>
				<p class="text-gray-500 text-sm">{{ $t('devDesc') }}</p>
			</section>
		</NuxtLink>

		<!-- search repo input -->
		<UInput
			id="searchRepoInput"
			v-model="searchReposKeywords"
			icon="i-mingcute:search-line"
			size="lg"
			name="searchReposName"
			color="white"
			trailing
			:placeholder="$t('placeholder')"
			class="w-1/3 hidden md:block"
			:ui="{ icon: { trailing: { pointer: '' } } }"
		>
			<template #trailing>
				<UKbd v-show="searchReposKeywords === ''" size="md">Q</UKbd>
				<UButton
					v-show="searchReposKeywords !== ''"
					size="sm"
					variant="solid"
					class="font-normal"
					@click="
						router.push({
							path: '/index',
							query: { searchKeywords: searchReposKeywords },
						})
					"
					>{{ $t('search') }}</UButton
				>
			</template>
		</UInput>

		<section class="flex items-center">
			<UDropdownMenu
				:items="languages"
				:popper="{ placement: 'bottom-start' }"
				:ui="{
					rounded: 'rounded-xl',
					item: { padding: 'p-3', rounded: 'rounded-xl' },
				}"
			>
				<UButton
					icon="i-heroicons:language"
					color="gray"
					variant="ghost"
					aria-label="Language Switch"
				/>
			</UDropdownMenu>

			<UButton
				:icon="
					isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
				"
				color="gray"
				variant="ghost"
				aria-label="Theme"
				class="mx-3"
				@click="isDark = !isDark"
			/>

			<NuxtLink v-if="!isLogin" to="/login">
				<UButton
					icon="i-heroicons:arrow-up-circle"
					color="white"
					variant="solid"
					size="lg"
				>
					{{ $t('login') }}
				</UButton>
			</NuxtLink>
			<UDropdownMenu
				v-else
				v-model:open="isUserOpen"
				:ui="{
					rounded: 'rounded-xl',
					item: { padding: 'p-3', rounded: 'rounded-xl' },
				}"
				:items="[
					[
						{
							label: $t('logout'),
							icon: 'i-heroicons:arrow-down-circle',
							onclick: logout,
						},
					],
				]"
				:popper="{ placement: 'bottom-start' }"
			>
				<UButton color="primary" variant="ghost">{{ username }}</UButton>
			</UDropdownMenu>

			<UButton
				icon="i-heroicons:ellipsis-horizontal"
				color="white"
				variant="solid"
				size="lg"
				class="md:hidden ml-3"
				@click="isModalOpen = true"
			/>
		</section>
	</header>

	<!-- modal for mobile devices-->
	<UModal v-model:open="isModalOpen" :default-open="false" fullscreen>
		<UCard
			:ui="{
				base: 'h-full flex flex-col',
				rounded: '',
				sectionide: 'sectionide-y sectionide-gray-200 dark:sectionide-gray-800',
				body: {
					base: 'grow',
				},
			}"
		>
			<template #header>
				<section class="flex items-center justify-between">
					<h3
						class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
					>
						{{ $t('navigation') }}
					</h3>
					<section>
						<UButton
							:icon="
								isDark
									? 'i-heroicons-moon-20-solid'
									: 'i-heroicons-sun-20-solid'
							"
							color="gray"
							variant="ghost"
							aria-label="Theme"
							class="mx-3"
							@click="isDark = !isDark"
						/>

						<UButton
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark-20-solid"
							@click="isModalOpen = false"
						/>
					</section>
				</section>
			</template>

			<UInput
				id="searchRepoInput"
				v-model="searchReposKeywords"
				icon="i-mingcute:search-line"
				size="xl"
				name="searchReposName"
				color="white"
				trailing
				:placeholder="$t('placeholder')"
				class="w-full block text-center"
				:ui="{ icon: { trailing: { pointer: '' } } }"
			>
				<template #trailing>
					<UKbd v-show="searchReposKeywords === ''" size="md">Q</UKbd>
					<UButton
						v-show="searchReposKeywords !== ''"
						size="sm"
						variant="solid"
						class="font-normal"
						@click="searchRepo"
						>{{ $t('search') }}</UButton
					>
				</template>
			</UInput>

			<NavBar @click="isModalOpen = false" />
		</UCard>
	</UModal>
</template>

<script lang="ts" setup>
import { UDropdownMenu } from '#components'

const { setLocale } = useI18n()
const toast = useToast()
// control modal of NavBar
const isModalOpen: Ref<boolean> = ref(false)
// control user dropdown
const isUserOpen: Ref<boolean> = ref(true)

const router = useRouter()

const languages = [
	[
		{
			label: 'English',
			icon: 'i-fluent-emoji-flat:flushed-face',
			onClick: () => {
				setLocale('en')
			},
		},
	],
	[
		{
			label: '简体中文',
			icon: 'i-fluent-emoji-flat:flushed-face',
			onClick: () => {
				setLocale('cn')
			},
		},
	],
	[
		{
			label: '日本語',
			icon: 'i-fluent-emoji-flat:flushed-face',
			onClick: () => {
				setLocale('jp')
			},
		},
	],
]

// keyword handler
onMounted(() => {
	window.addEventListener('keydown', async (e) => {
		if (e.key === 'q' || e.key === 'Q') {
			const input = document.querySelector<HTMLInputElement>('#searchRepoInput')

			if (input !== document.activeElement) {
				e.preventDefault()
				if (input) {
					input.focus()
				}
			}
		}
	})
})

const token: string | null | undefined = useCookie('token').value
const username: string | null | undefined = useCookie('username').value

const isLogin: Ref<boolean> = ref(false)
if (!token || !username) isLogin.value = false
else isLogin.value = true

const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})

// search keyword of repoName
const searchReposKeywords: Ref<string> = ref('')
const searchRepo = () => {
	router.push({
		path: '/index',
		query: { searchKeywords: searchReposKeywords.value },
	})
	isModalOpen.value = false
}

const logout = async () => {
	const { data } = await $fetch<logoutDelete>(`/api/auth/logout`, {
		method: 'DELETE',
		query: {
			token: token,
		},
	})

	toast.add({ title: data.message })
	router.push({ name: 'login' })
}
</script>

<style scoped>
.nano-rotate {
	transition: all 300ms ease;
}

.nano-rotate:hover {
	transform: rotate(360deg);
}
</style>
