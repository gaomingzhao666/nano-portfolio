export default [
	{
		name: 'register',
		path: '/register',
		component: () => import('~/pages/register.vue').then((r) => r.default || r),
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('~/pages/login.vue').then((r) => r.default || r),
	},
]
