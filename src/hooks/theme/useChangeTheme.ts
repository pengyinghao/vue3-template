/* eslint-disable no-param-reassign */
import { PRE, PRE_DARK, PRE_LIGHT, WHITE, BLACK } from './cssConstant'

const html = document.documentElement

/** 主题切换 */
export function useChangeTheme() {
    const appStore = useAppStore()

    /**
     * 混合颜色
     */
    const mix = (color1: string, color2: string, weight: number) => {
        const tmpWeight = Math.max(Math.min(Number(weight), 1), 0)
        const r1 = parseInt(color1.substring(1, 3), 16)
        const g1 = parseInt(color1.substring(3, 5), 16)
        const b1 = parseInt(color1.substring(5, 7), 16)
        const r2 = parseInt(color2.substring(1, 3), 16)
        const g2 = parseInt(color2.substring(3, 5), 16)
        const b2 = parseInt(color2.substring(5, 7), 16)

        const r = Math.round(r1 * (1 - tmpWeight) + r2 * tmpWeight)
        const g = Math.round(g1 * (1 - tmpWeight) + g2 * tmpWeight)
        const b = Math.round(b1 * (1 - tmpWeight) + b2 * tmpWeight)

        const red = `0${(r || 0).toString(16)}`.slice(-2)
        const green = `0${(g || 0).toString(16)}`.slice(-2)
        const blue = `0${(b || 0).toString(16)}`.slice(-2)
        return `#${red}${green}${blue}`
    }

    /**
     * 更换颜色的方法
     * @param color 颜色
     */
    const changeTheme = (color?: string) => {
        if (!color) return
        appStore.theme = color
        // 设置主要颜色
        html.style.setProperty(PRE, color)

        // 主色
        const arr = [3, 5, 7, 8, 9]
        for (let i = 0; i < arr.length; i += 1) {
            html.style.setProperty(`${PRE_LIGHT}-${arr[i]}`, mix(color, WHITE, arr[i] * 0.1))
        }

        // 暗黑色设置
        const dark = mix(color, BLACK, 0.2)
        html.style.setProperty(`${PRE_DARK}-2`, dark)
    }

    watchEffect(() => {
        if (appStore.theme) {
            changeTheme(appStore.theme)
        }
    })

    return {
        changeTheme
    }
}
