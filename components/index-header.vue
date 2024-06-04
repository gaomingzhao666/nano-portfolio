<template>
	<header class="flex justify-between items-center m-5 border-b-gray-700">
		<section class="flex">
			<ico-nano class="text-5xl rounded-full" />

			<section class="ml-3 hidden md:block">
				<p class="text-blue-600 text-lg">{{ $t('name') }}</p>
				<p class="text-gray-500 text-sm">{{ $t('devDesc') }}</p>
			</section>
		</section>

		<UInput
			icon="i-mingcute:search-line"
			size="lg"
			color="white"
			trailing
			:placeholder="$t('placeholder')"
			class="w-1/3 hidden md:block"
			@click="notice('Not support now')"
		/>

		<section class="flex items-center">
			<UDropdown
				:items="languages"
				:popper="{ placement: 'bottom-start' }"
				:ui="{
					item: { padding: 'p-3', rounded: 'rounded-xl' },
				}"
			>
				<UButton icon="i-heroicons:language" color="gray" variant="ghost" />
			</UDropdown>

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

			<NuxtLink to="/login" v-if="!isLogin">
				<UButton
					icon="i-material-symbols:login"
					color="white"
					variant="solid"
					size="lg"
				>
					{{ $t('login') }}
				</UButton>
			</NuxtLink>
			<UButton color="primary" variant="ghost" v-else>{{
				data?.data.username
			}}</UButton>

			<UButton
				icon="i-heroicons:ellipsis-horizontal"
				color="white"
				variant="solid"
				size="lg"
				class="md:hidden ml-3"
				@click="isOpen = true"
			/>
		</section>
	</header>
	<Usectionider />

	<UModal v-model="isOpen" fullscreen>
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
							@click="isOpen = false"
						/>
					</section>
				</section>
			</template>

			<nav-bar @click="isOpen = false" />
		</UCard>
	</UModal>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()
const toast = useToast()
const isOpen: Ref<boolean> = ref(false)
const token = await useCookie('token')

const languages = [
	[
		{
			label: 'English',
			icon: 'i-fluent-emoji-flat:flushed-face',
			click: () => {
				setLocale('en')
			},
		},
	],
	[
		{
			label: '简体中文',
			icon: 'i-fluent-emoji-flat:flushed-face',
			click: () => {
				setLocale('cn')
			},
		},
	],
	[
		{
			label: '日本語',
			icon: 'i-fluent-emoji-flat:flushed-face',
			click: () => {
				setLocale('jp')
			},
		},
	],
]

const { data, error } = useFetch<userInfoGet>('/api/user/userInfo', {
	method: 'GET',
	query: {
		token: token,
	},
})
const router = useRouter()
if (error.value) router.push({ name: 'error' })

let isLogin: Ref<boolean> = ref(false)
if (token.value === undefined || token.value === null) isLogin.value = false
else isLogin.value = true

const notice = (text: string) => {
	if (!sessionStorage.getItem('isFirstDisplay')) {
		toast.add({ title: text })
		sessionStorage.setItem('isFirstDisplay', '1')
	}
}

const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})
</script>
