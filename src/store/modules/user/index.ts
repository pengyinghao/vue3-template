import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash'
import { menuInfos } from '../../../menus'
import createRoute from '@/router/guard/generatorDynamicRouter'

interface UserInfo {
    /** 用户名称 */
    userName: string
    /** 头像地址 */
    avatar: string
    /** 用户名 */
    account: string
}
interface userStore {
    info: UserInfo
    /** 默认系统菜单 */
    originMenus: SystemMenu[]
    /** element 菜单 */
    elementMenus: RouteRecordRaw[]
    /** 处理果的路由信息 */
    routes: RouteRecordRaw[]
    /** 动态路由 */
    dynamicRoute: (() => void)[]
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): userStore => ({
        info: {
            account: 'account',
            avatar: 'https://picsum.photos/200',
            userName: ''
        },
        routes: [],
        originMenus: [],
        elementMenus: [],
        dynamicRoute: []
    }),
    actions: {
        /** 退出登录 */
        loginOut() {
            // 通过动态路由移出 路由信息
            this.dynamicRoute.forEach((fn) => fn())
            this.$reset()
        },
        /** 创建路由 */
        generateRoutes() {
            this.originMenus = cloneDeep(menuInfos)
            const routes = createRoute(menuInfos)
            this.routes = routes
            this.markElementRoute(routes)
            return Promise.resolve(routes)
        },
        /** 处理element菜单  */
        markElementRoute(routes: RouteRecordRaw[]) {
            const newRouter = cloneDeep(routes) // 将单级路由解析出来，用到element 菜单中
            this.elementMenus = newRouter.map((item) => {
                if (item.meta?.singleLevel && item.children && item.children.length > 0) {
                    return item.children[0]
                }
                return item
            })
        }
    },
    persist: {
        key: 'user',
        storage: sessionStorage,
        paths: ['info']
    }
})
