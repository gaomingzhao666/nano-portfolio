export const useIndexStore = defineStore('index', () => {
	const baseSkillIconUrl: string = 'https://skillicons.dev/icons?i='

	const colorMode = ref(useColorMode())

	return { baseSkillIconUrl, colorMode }
})
