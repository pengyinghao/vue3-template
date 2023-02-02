/*
 * @Author: PengYH
 * @Date: 2022-03-19
 * @Description:全局提示
 */

interface Window {
    $message: import('element-plus').Message
    $messageBox: import('element-plus').IElMessageBox
    $notifiCation: import('element-plus').Notify
}

/** 系统菜单 */
interface SystemMenu {
    /** id */
    id: number
    /** 页面名称 */
    title: string
    /** 打开方式(0:系统内打开,1:打开外部页,2:打开内嵌网页) */
    openType: number
    /** 上级id */
    parentId: number
    /** 显示顺序 */
    showIndex: number
    /** 页面地址 */
    url: string
    /** 是否隐藏菜单 */
    hidden: boolean
    /** 下级 */
    children?: SystemMenu[]
    /** 图标 */
    icon?: string
    /** 额外参数 */
    params?: string
    /** 重定向地址 */
    redirect?: string
    /** 组件地址 */
    component?: string
    /** 组件名称 */
    componentName?: string
    /** 内部网页链接地址 */
    href?: string
}
