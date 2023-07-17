import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Logic-Flow',
    component: () => import('@/views/logic-flow/index.vue'),
    meta: { title: 'Logic-Flow' },
  },
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      path: '/main',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
