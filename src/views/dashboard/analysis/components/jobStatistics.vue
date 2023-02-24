<template>
    <el-card>
        <template #header>
            <span class="font-bold">作业实时统计</span>
        </template>
        <div ref="refChart" class="h-400px w-full"></div>
    </el-card>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import { useEChartsColors } from '@/hooks/useEChartsColors'
import echarts from '@/plugins/echarts'
import { useAppStore } from '@/store'

const { lineColor, legendTextColor, tipBgColor, tipBorderColor, axisPointerLineColor } =
    useEChartsColors()

const getDates = () => {
    const dates: string[] = []
    for (let i = 6; i >= 0; i--) {
        dates.push(dayjs().add(-i, 'day').format('MM-DD'))
    }
    return dates
}

const getOptions = () => {
    return {
        grid: {
            top: '14%',
            left: '0',
            right: '18',
            bottom: '0',
            containLabel: true
        },
        color: ['#3e82ff', '#3db7f0', '#1fc9a7', '#f9a731'],
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
        legend: {
            itemHeight: 3,
            itemWidth: 12,
            icon: 'rect',
            textStyle: {
                color: legendTextColor.value,
                fontSize: 12
            },
            data: ['总作业数', '完成作业数', '运行作业数', '排队作业数']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: getDates(),
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#808080'
            },
            axisLine: {
                lineStyle: {
                    color: lineColor.value
                }
            }
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
                name: '总作业数',
                data: [28, 90, 150, 163, 78, 20, 65],
                smooth: true,
                symbol: 'none',
                type: 'line',
                lineStyle: {
                    width: 1.5
                },
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
                }
            },
            {
                name: '完成作业数',
                data: [20, 80, 100, 76, 24, 5, 23],
                smooth: true,
                symbol: 'none',
                type: 'line',
                lineStyle: {
                    width: 1.5
                }
            },
            {
                name: '运行作业数',
                data: [4, 5, 30, 10, 45, 5, 7],
                smooth: true,
                symbol: 'none',
                type: 'line',
                lineStyle: {
                    width: 1.5
                }
            },
            {
                name: '排队作业数',
                data: [3, 5, 20, 77, 9, 5, 35],
                smooth: true,
                symbol: 'none',
                type: 'line',
                lineStyle: {
                    width: 1.5
                }
            }
        ]
    }
}

const refChart = ref<HTMLDivElement>()
const chart = computed(() => {
    if (refChart.value) return echarts.init(refChart.value)
    return null
})
/** 获取统计数据信息 */
const getData = () => {
    setTimeout(() => {
        nextTick(() => {
            const options = getOptions()
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
const resize = () => {
    chart.value?.resize()
}

defineExpose({
    resize
})
</script>
