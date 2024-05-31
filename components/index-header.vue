<template>
	<header class="flex justify-between items-center m-5 border-b-gray-700">
		<div class="flex">
			<ico-nano class="text-5xl rounded-full" />

			<div class="ml-3 hidden md:block">
				<p class="text-blue-600 text-lg">{{ $t('name') }}</p>
				<p class="text-gray-500 text-sm">{{ $t('devDesc') }}</p>
			</div>
		</div>

		<UInput
			icon="i-mingcute:search-line"
			size="lg"
			color="white"
			trailing
			:placeholder="$t('placeholder')"
			class="w-1/3 hidden md:block"
			@click="toast.add({ title: 'not work now' })"
		/>

		<section class="flex items-center">
			<UDropdown
				:items="languages"
				:popper="{ placement: 'bottom-start' }"
				:ui="{
					item: { padding: 'p-3', rounded: 'rounded-xl' },
				}"
			>
				<UIcon name="i-heroicons:language" dynamic size="24" />
			</UDropdown>

			<NuxtLink to="/login" class="mx-3" v-if="!isLogin">
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
				class="md:hidden"
				@click="isOpen = true"
			/>
		</section>
	</header>
	<UDivider />

	<UModal v-model="isOpen" fullscreen>
		<UCard
			:ui="{
				base: 'h-full flex flex-col',
				rounded: '',
				divide: 'divide-y divide-gray-200 dark:divide-gray-800',
				body: {
					base: 'grow',
				},
			}"
		>
			<template #header>
				<div class="flex items-center justify-between">
					<h3
						class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
					>
						{{ $t('navigation') }}
					</h3>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="isOpen = false"
					/>
				</div>
			</template>

			<section>
				<NuxtLink
					:to="item.to"
					v-for="(item, index) in navbar.links"
					:key="index"
					@click="isOpen = false"
				>
					<UButton
						block
						:icon="item.icon"
						variant="link"
						size="xl"
						class="flex justify-start my-3"
						>{{ item.label }}</UButton
					>
				</NuxtLink>
			</section>
		</UCard>
	</UModal>
</template>

<script lang="ts" setup>
const navbar = useNavbarStore()
const { setLocale } = useI18n()
const toast = useToast()

const isOpen: Ref<boolean> = ref(false)
let isLogin: Ref<boolean> = ref(false)
const token = await useCookie('token')

if (token.value === undefined || token.value === null) isLogin.value = false
else isLogin.value = true

const { data, pending, error } = useFetch<userInfoGet>('/api/user/userInfo', {
	method: 'get',
	query: {
		token: token,
	},
})

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
</script>
