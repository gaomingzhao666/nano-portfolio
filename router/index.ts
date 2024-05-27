export default [
	{
		path: '/',
		redirect: '/index',
	},
	{
		name: 'index',
		path: '/index',
		component: () =>
			import('~/pages/index/index.vue').then((r) => r.default || r),
	},
	{
		name: 'experience',
		path: '/experience',
		component: () =>
			import('~/pages/index/experience.vue').then((r) => r.default || r),
	},
	{
		name: 'about',
		path: '/about',
		component: () =>
			import('~/pages/index/about.vue').then((r) => r.default || r),
	},
	{
		name: 'contact',
		path: '/contact',
		component: () =>
			import('~/pages/index/contact.vue').then((r) => r.default || r),
	},
]
