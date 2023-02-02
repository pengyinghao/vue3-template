import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard/analysis',
        component: Layout,
        children: []
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/redirect/:path(.*)',
        name: 'redirect',
        component: () => import('@/views/common/redirect.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/common/noFound.vue')
    }
]
