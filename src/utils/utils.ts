/** 是否暗黑模式 */
export function isDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}
