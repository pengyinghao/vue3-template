import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard/analysis',
        component: Layout,
        children: [
            {
                name: 'personInformation',
                path: '/personInformation',
                component: () =>
                    import('@/views/systemManage/userInfo/personInformation/personInformation.vue'),
                meta: {
                    title: '个人信息'
                }
            }
        ]
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
