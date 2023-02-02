import NProgress from 'nprogress'
import { Router, RouteRecordRaw } from 'vue-router'
NProgress.configure({ showSpinner: false })

const loginPath = '/login' // 登录地址
const allowList = ['/login', '/404']
/** 创建路由守卫 */
export function createRouterGuard(router: Router) {
    router.beforeEach(async (to, form, next) => {
        const userStore = useUserStore()
        NProgress.start()
        if (allowList.includes(to.path)) {
            next()
        } else if (userStore.info.userName) {
            if (userStore.dynmicRoute.length === 0) {
                const routes = await userStore.generateRoutes()
                routes.forEach((r: RouteRecordRaw) => {
                    userStore.dynmicRoute.push(router.addRoute(r))
                })
                next({ ...to, replace: true })
            } else {
                next()
            }
        } else {
            next(loginPath)
        }
    })

    router.afterEach(() => {
        NProgress.done()
    })
}
