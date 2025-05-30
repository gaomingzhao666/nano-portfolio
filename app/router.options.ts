import type { RouterConfig } from '@nuxt/schema'

import index from '@/router/index'
import auth from '@/router/auth'
import error from '@/router/error'

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
      path: '/index',
      component: () => import('@/pages/index.vue').then((r) => r.default || r),
      children: index,
    },
    ...error,
  ],
}
