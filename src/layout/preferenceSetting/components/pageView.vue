<!--
 * @Author: PengYH
 * @Date: 2023-01-31
 * @Description: 界面展示
-->
<template>
    <el-divider>界面展示</el-divider>
    <Description label="标签页">
        <el-switch v-model="appStore.showTab" />
    </Description>
    <Description label="面包屑">
        <el-switch v-model="appStore.showBreadcrumb" />
    </Description>
    <Description label="禁用动画">
        <el-switch v-model="appStore.disableAnimation" />
    </Description>
    <Description label="动画类型">
        <el-select v-model="appStore.animationType" :disabled="appStore.disableAnimation">
            <el-option
                v-for="item in animationTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </Description>
</template>

<script lang="ts" setup>
import Description from '@/layout/common/description.vue'
import { useAppStore } from '@/store'
defineOptions({
    name: 'PageView'
})

/** 页面切换动画类型 下拉数据源 */
const animationTypeOptions = [
    { value: 'zoom-fade', label: '渐变' },
    { value: 'zoom-out', label: '闪现' },
    { value: 'fade-slide', label: '滑动' },
    { value: 'fade', label: '消退' },
    { value: 'fade-bottom', label: '底部消退' },
    { value: 'fade-scale', label: '缩放消退' }
]
const appStore = useAppStore()
</script>
