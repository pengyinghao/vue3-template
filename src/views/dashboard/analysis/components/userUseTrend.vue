<template>
    <el-card>
        <template #header>
            <span class="font-bold">用户使用趋势</span>
        </template>
        <div ref="refChart" class="h-320px w-full"></div>
    </el-card>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import echarts from '@/plugins/echarts'
import { useEChartsColors } from '@/hooks/useEChartsColors'
import { useAppStore } from '@/store'

const { lineColor, titleColor, tipBgColor, tipBorderColor, axisPointerLineColor } =
    useEChartsColors()

const getDates = () => {
    const dates: string[] = []
    for (let i = 6; i >= 0; i--) {
        dates.push(dayjs().add(-i, 'day').format('MM-DD'))
    }
    return dates
}

/** 获取echarts配置 */
const getOption = () => {
    const option = {
        title: {
            text: '单位(天/人)',
            textStyle: {
                fontSize: '12px',
                color: titleColor.value,
                fontWeight: 'normal'
            },
            left: 0
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: tipBgColor.value,
            borderColor: tipBorderColor.value,
            axisPointer: {
                lineStyle: {
                    color: axisPointerLineColor.value
                }
            }
        },
        grid: {
            top: '15%',
            left: '0',
            right: '18',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: getDates(),
            axisLabel: {
                interval: 0,
                color: '#808080'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor.value,
                    width: 1,
                    type: 'solid'
                }
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#808080'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor.value
                }
            },
            splitLine: {
                lineStyle: {
                    color: lineColor.value
                }
            }
        },
        series: [
            {
                data: [20, 43, 190, 39, 57, 90, 31],
                type: 'line',
                symbol: 'none',
                color: '#008aff',
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,138,255, 0.5)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,138,255, 0)' // 100% 处的颜色
                            }
                        ]
                    }
                },
                lineStyle: {
                    width: 1.5
                }
            }
        ]
    }
    return option
}

const refChart = ref<HTMLDivElement>()
const chart = computed(() => {
    if (refChart.value) {
        return echarts.init(refChart.value)
    }
    return null
})
const resize = () => {
    chart.value?.resize()
}

/** 获取统计数据信息 */
const getData = () => {
    setTimeout(() => {
        nextTick(() => {
            const options = getOption()
            chart.value?.setOption(options)
        })
    }, Math.random() * 1000)
}
getData()

const appStore = useAppStore()
watch(
    () => [appStore.themeMode, appStore.followSystemTheme],
    () => {
        getData()
    }
)
defineExpose({
    resize
})
</script>
