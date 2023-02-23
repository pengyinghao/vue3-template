import { Router, RouteRecordRaw } from 'vue-router'
import { LOGIN_PATH, ALLOW_LIST } from '@/core/config'
import NProgress from '@/plugins/nprogress'
import { useUserStore } from '@/store'

/** 创建路由守卫 */
export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, form, next) => {
        const userStore = useUserStore()
        NProgress.start()
        if (ALLOW_LIST.includes(to.path)) {
            next()
        } else if (userStore.info.userName) {
            if (userStore.dynamicRoute.length === 0) {
                const routes = await userStore.generateRoutes()
                routes.forEach((r: RouteRecordRaw) => {
                    userStore.dynamicRoute.push(router.addRoute(r))
                })
                next({ ...to, replace: true })
            } else {
                next()
            }
        } else {
            next(LOGIN_PATH)
        }
    })

    router.afterEach(() => {
        NProgress.done()
    })
}
