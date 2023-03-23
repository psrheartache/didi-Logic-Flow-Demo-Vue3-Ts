/*
 * @Author: Yufeng CHEN
 * @Date: 2022-10-21 14:22:00
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-23 21:49:25
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/router/index.ts
 */
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
