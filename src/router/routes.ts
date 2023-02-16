import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard/analysis',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                name: 'PersonInformation',
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
