import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/not-found',
      name: '404',
      component: () => import('@/views/not-found/404.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/not-found'
    }
  ]
})

export default router
