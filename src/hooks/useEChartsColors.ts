import { ComputedRef } from 'vue'
import { useAppStore } from '@/store'
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
    const lineColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#32373d'
        return '#edeff5'
    })
    const XLabelColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#808080'
        return '#808080'
    })
    const legendTextColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#808080'
        return '#808080'
    })
    const legendCloseColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#666'
        return '#ccc'
    })
    const titleColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#808080'
        return '#808080'
    })
    const legendColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#556FF6'
        return '#556FF6'
    })
    const tipBgColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#141414'
        return '#fff'
    })
    const tipBorderColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#141414'
        return '#fff'
    })
    const tipTextColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#fff'
        return '#808080'
    })
    const axisPointerLineColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#333'
        return '#b3b3b3'
    })
    const pieCentreTextColor = computed(() => {
        if (appStore.themeMode === 'dark') return '#DCDCDC'
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
