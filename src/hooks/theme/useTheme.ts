import { useAppStore } from '@/store'

/** 主题模式切换 */
export function useTheme() {
    const appStore = useAppStore()

    const changeTheme = () => {
        let theme = 'light'
        if (appStore.followSystemTheme) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
