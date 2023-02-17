/*
 * @Author: PengYH
 * @Date: 2022-03-21
 * @Description:动态构建路由
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

/** 导入模块 */
const allPages = import.meta.glob('@/views/**/**/*.vue') // views 下的所有vue文件

/** 导入模块 */
function importModule(path: string | undefined) {
    if (!path) return null
    const moduleUrl = `/src/views/${path}.vue`
    return allPages[moduleUrl] || null
}

/** 路由 参数 */
function markRoute(page: SystemMenu, component: any) {
    const {
        title,
        id,
        parentId,
        icon,
        openType,
        url,
        hidden,
        redirect,
        showIndex,
        componentName,
        outPageUrl,
        keepAlive,
        href
    } = page
    const currentRouter: RouteRecordRaw = {
        name: componentName,
        path: url || '',
        children: [],
        redirect,
        component,
        meta: {
            title,
            id: id.toString(),
            parentId,
            icon,
            openType,
            hidden,
            outPageUrl,
            keepAlive,
            href,
            showIndex
        }
    }
    return currentRouter
}

/** 构建单级路由 */
function generatorSingleLevelRoute(page: SystemMenu): RouteRecordRaw {
    const { title, component } = page
    const currentRouter: RouteRecordRaw = markRoute(page, importModule(component))
    return {
        component: Layout,
        path: '',
        meta: {
            title,
            singleLevel: true
        },
        children: [currentRouter]
    }
}

/** 生成树形接口 */
const generateTree = (data: SystemMenu[]) => {
    if (!data || data.length === 0) return []
    const obj: any = {} // 根据parentid 来保存他的所有下级
    data.forEach((item) => {
        const { parentId } = item
        if (!obj[parentId]) {
            obj[parentId] = []
        }
        obj[parentId].push(item)
    })
    data.forEach((item) => {
        item.children = obj[item.id] || []
    })
    const result = data.filter((item) => item.parentId === 0)
    return result
}

/** 构建动态路由 */
function generatorDynamicRouter(pages: SystemMenu[]): RouteRecordRaw[] {
    const routers = pages.map((page) => {
        const { parentId, component, children } = page

        // 嵌套一层layout 用于来装载单级路由页面
        if (page.parentId === 0 && page.children?.length === 0) {
            return generatorSingleLevelRoute(page)
        }

        // 多级菜单，顶级用来装载layout
        const currentRouter: RouteRecordRaw = markRoute(
            page,
            parentId === 0 ? Layout : importModule(component)
        )
        // 存在子级
        if (children && children.length > 0) {
            currentRouter.children = generatorDynamicRouter(children)
        } else {
            currentRouter.children = []
        }
        return currentRouter
    })
    return routers
}

export default function createRoute(pages: SystemMenu[]) {
    pages = generateTree(pages)
    return generatorDynamicRouter(pages)
}
