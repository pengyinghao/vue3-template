import { defineStore } from 'pinia'

/** 动画类型 */
type animationType = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale'

interface AppStore {
    /** 主题模式 */
    themeMode: 'dark' | 'light'
    /** 跟随系统主题 */
    followSystemTheme: boolean
    /** 主题颜色 */
    theme: string
    /** 菜单是否收缩 */
    menuIsCollapse: boolean
    /** 菜单折叠的宽度 */
    menuCollapseWidth: number
    /** 菜单未折叠宽度 */
    menuWidth: number
    /** 是否禁用动画 */
    disableAnimation: boolean
    /** 页面切换动画类型 */
    animationType: animationType
    /** 是否打开偏好设置 */
    showPreferenceSetting: boolean
    /** 是否显示面包屑 */
    showBreadcrumb: boolean
    /** 是否显示标签页 */
    showTab: boolean
    /** 标签页是否缓存 */
    keepAlive: boolean
    /** 缓存组件个数 */
    keepAliveCounter: number
    /** 组件大小 */
    size: 'large' | 'default' | 'small'
}

export default defineStore({
    id: 'app',
    state: (): AppStore => ({
        themeMode: 'light',
        followSystemTheme: false,
        theme: '#1890ff',
        menuIsCollapse: false,
        menuCollapseWidth: 68,
        menuWidth: 220,
        disableAnimation: false,
        animationType: 'fade-slide',
        showPreferenceSetting: false,
        showBreadcrumb: true,
        showTab: true,
        keepAlive: true,
        keepAliveCounter: 10,
        size: 'default'
    }),
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'app',
                storage: localStorage
            }
        ]
    }
})
