import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        /** 页面id */
        id?: string
        /** 标题 */
        title?: string
        /** 上级id */
        parentId?: number
        /** 图标 */
        icon?: string
        /** 打开方式,0:普通页面，1：内嵌网页，2：外部网页 */
        openType?: number
        /** 页面是否在菜单中隐藏 */
        hidden?: boolean
        /** 页面是否缓存 */
        keepAlive?: boolean
        /** 如果是网页，网页打开url */
        href?: string
        /** 是否为单级页面 */
        singleLevel?: boolean
        /** iframe页面url */
        outPageUrl?:string
    }
}
