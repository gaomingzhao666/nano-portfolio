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

	// Optional, wait for locale before scrolling for a smoother transition with Router Options
	async scrollBehavior(to, from, savedPosition) {
		const nuxtApp = useNuxtApp()

		// make sure the route has changed.
		if (nuxtApp.$i18n && to.name !== from.name) {
			// `$i18n` is injected in the `setup` of the nuxtjs/i18n module.
			// `scrollBehavior` is guarded against being called even when it is not completed
			await nuxtApp.$i18n.waitForPendingLocaleChange()
		}

		return savedPosition || { top: 0 }
	},
}
