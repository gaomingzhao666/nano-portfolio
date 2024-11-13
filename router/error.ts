export default [
  {
    name: 'error',
    path: '/error',
    component: () =>
      import('@/pages/error/error.vue').then((r) => r.default || r),
  },
]
