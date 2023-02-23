import { AppStore } from '@/store/modules/app'

/** 登录地址 */
export const LOGIN_PATH = '/login'

/** 白名单地址 */
export const ALLOW_LIST = ['/login', '/404']

/**  默认值 */
export const DEFAULT_APP_STORE: AppStore = {
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
}
