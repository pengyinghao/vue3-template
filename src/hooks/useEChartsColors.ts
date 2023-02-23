import { ComputedRef } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { isDark } from '@/utils/utils'
export interface EchartsColor {
    /** X轴Y轴分割线线条的颜色 */
    lineColor: ComputedRef<string>
    /** X轴文字颜色 */
    XLabelColor: ComputedRef<string>
    /** 数据开启时图例文案的颜色 */
    legendTextColor: ComputedRef<string>
    /** 数据关闭后图例文字的颜色 */
    legendCloseColor: ComputedRef<string>
    /** 标题文字的颜色 */
    titleColor: ComputedRef<string>
    /** 图例的颜色 */
    legendColor: ComputedRef<string>
    /** 提示框背景色 */
    tipBgColor: ComputedRef<string>
    /** 提示框边框颜色 */
    tipBorderColor: ComputedRef<string>
    /** 提示框文字颜色 */
    tipTextColor: ComputedRef<string>
    /** Y轴数据聚焦提示线的颜色 */
    axisPointerLineColor: ComputedRef<string>
    /** 饼图中心区域文字颜色 */
    pieCentreTextColor: ComputedRef<string>
}

/** 全局echarts 线条颜色 */
export function useEChartsColors(): EchartsColor {
    const appStore = useAppStore()
    const isDak = computed(() => {
        if (appStore.followSystemTheme) {
            return isDark()
        }
        return appStore.themeMode === 'dark'
    })
    const lineColor = computed(() => {
        if (isDak.value) return '#32373d'
        return '#edeff5'
    })
    const XLabelColor = computed(() => {
        if (isDak.value) return '#808080'
        return '#808080'
    })
    const legendTextColor = computed(() => {
        if (isDak.value) return '#808080'
        return '#808080'
    })
    const legendCloseColor = computed(() => {
        if (isDak.value) return '#666'
        return '#ccc'
    })
    const titleColor = computed(() => {
        if (isDak.value) return '#808080'
        return '#808080'
    })
    const legendColor = computed(() => {
        if (isDak.value) return '#556FF6'
        return '#556FF6'
    })
    const tipBgColor = computed(() => {
        if (isDak.value) return '#141414'
        return '#fff'
    })
    const tipBorderColor = computed(() => {
        if (isDak.value) return '#141414'
        return '#fff'
    })
    const tipTextColor = computed(() => {
        if (isDak.value) return '#fff'
        return '#808080'
    })
    const axisPointerLineColor = computed(() => {
        if (isDak.value) return '#333'
        return '#b3b3b3'
    })
    const pieCentreTextColor = computed(() => {
        if (isDak.value) return '#DCDCDC'
        return '#333333'
    })
    return {
        /** X轴Y轴分割线线条的颜色 */
        lineColor,
        /** X轴文字颜色 */
        XLabelColor,
        /** 数据开启时图例文案的颜色 */
        legendTextColor,
        /** 数据关闭后图例文字的颜色 */
        legendCloseColor,
        /** 标题文字的颜色 */
        titleColor,
        /** 图例的颜色 */
        legendColor,
        /** 提示框背景色 */
        tipBgColor,
        /** 提示框边框颜色 */
        tipBorderColor,
        /** 提示框文字颜色 */
        tipTextColor,
        /** Y轴数据聚焦提示线的颜色 */
        axisPointerLineColor,
        /** 饼图中心区域文字颜色 */
        pieCentreTextColor
    }
}
