export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: 'index',
    path: '/index',
    component: () =>
      import('@/pages/index/index.vue').then((r) => r.default || r),
  },
  {
    name: 'career',
    path: '/career',
    component: () =>
      import('@/pages/index/career.vue').then((r) => r.default || r),
  },
  {
    name: 'about',
    path: '/about',
    component: () =>
      import('@/pages/index/about.vue').then((r) => r.default || r),
  },
  {
    name: 'contact',
    path: '/contact',
    component: () =>
      import('@/pages/index/contact.vue').then((r) => r.default || r),
  },
  {
    name: 'comments',
    path: '/comments',
    component: () =>
      import('@/pages/index/comments.vue').then((r) => r.default || r),
  },
]
