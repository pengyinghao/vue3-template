<template>
    <el-divider>主题模式</el-divider>
    <Description label="跟随系统">
        <el-switch v-model="appStore.followSystemTheme" />
    </Description>
    <Description label="深色主题">
        <el-switch
            v-model="appStore.themeMode"
            :disabled="appStore.followSystemTheme"
            active-value="dark"
            inactive-value="light"
        />
    </Description>
</template>
<script lang="ts" setup>
import Description from '@/layout/common/description.vue'
import { useAppStore } from '@/store'
const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.theme-mode :deep(.el-switch__core) {
    border: none;
}
</style>
