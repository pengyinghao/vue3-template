<!--
 * @Author: PengYH
 * @Date: 2023-01-31
 * @Description: 界面功能
-->
<template>
    <el-divider>界面功能</el-divider>
    <Description label="普通菜单宽度">
        <el-input-number v-model="appStore.menuWidth" :min="220" />
    </Description>
    <Description label="多页签缓存">
        <el-switch v-model="appStore.keepAlive" />
    </Description>
    <Description label="多页签缓存条数">
        <el-input-number
            v-model="appStore.keepAliveCounter"
            :min="1"
            :max="20"
            :disabled="!appStore.keepAlive"
        />
    </Description>
    <Description label="组件大小">
        <el-radio-group v-model="appStore.size">
            <el-radio-button label="large">大</el-radio-button>
            <el-radio-button label="default">默认</el-radio-button>
            <el-radio-button label="small">小</el-radio-button>
        </el-radio-group>
    </Description>
</template>

<script lang="ts" setup>
import Description from '@/layout/common/description.vue'
import { useAppStore } from '@/store'
defineOptions({ name: 'PageFunction' })
const appStore = useAppStore()
</script>
