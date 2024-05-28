export const useNavbarStore = defineStore('navbar', () => {
	const links = [
		{
			label: 'Explore',
			icon: 'i-heroicons:home-solid',
			to: '/',
		},
		{
			label: 'Experience',
			icon: 'i-heroicons:briefcase',
			to: '/experience',
		},
		{
			label: 'About',
			icon: 'i-heroicons:information-circle',
			to: '/about',
		},
		{
			label: 'Contact',
			icon: 'i-heroicons:globe-alt',
			to: '/contact',
		},
	]
	return { links }
})
