// 引入vue-router对象
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/store'

/**
 * 定义路由数组
 */
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    // 404路由
    path: '/not-found',
    name: '404',
    component: () => import('@/views/not-found/404.vue')
  },
  {
    // 404路由
    path: '/:catchAll(.*)',
    redirect: '/not-found'
  }
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**
 * 路由守卫
 */
// router.beforeEach(() => {});

/**
 * 输出对象
 */
export default router
