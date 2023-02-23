import { useAppStore } from '@/store'
import { isDark } from '@/utils/utils'

/** 主题模式切换 */
export function useTheme() {
    const appStore = useAppStore()

    const changeTheme = () => {
        let theme = 'light'
        if (appStore.followSystemTheme) {
            if (isDark()) {
                theme = 'dark'
            }
        } else {
            theme = appStore.themeMode
        }
        document.documentElement.className = theme
    }

    watch(
        () => [appStore.themeMode, appStore.followSystemTheme],
        () => {
            changeTheme()
        },
        { immediate: true }
    )
}
