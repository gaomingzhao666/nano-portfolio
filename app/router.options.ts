import type { RouterConfig } from '@nuxt/schema'

import index from '~/router/index'
import auth from '~/router/auth'

// custom router paths for better router control
export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
		{
			path: '/',
			redirect: '/index',
		},
		...auth,
		{
			name: 'index',
			path: '/index',
			component: () => import('~/pages/index.vue').then((r) => r.default || r),
			children: index,
		},
	],
}