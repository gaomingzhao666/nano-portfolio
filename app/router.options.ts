import type { RouterConfig } from '@nuxt/schema'

// custom router paths
export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
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
	],
}
