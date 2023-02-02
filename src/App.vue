<template>
    <el-config-provider :size="appStore.size">
        <router-view></router-view>
        <!-- 偏好设置 -->
        <preference-setting v-model="appStore.showPreferenceSetting" />
    </el-config-provider>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import PreferenceSetting from '@/layout/preferenceSetting/preferenceSetting.vue'
import { useTheme } from './hooks/theme/useTheme'
import { useChangeTheme } from './hooks/theme/useChangeTheme'
const appStore = useAppStore()
useTheme()
useChangeTheme()

window.$message = ElMessage
window.$messageBox = ElMessageBox
window.$notifiCation = ElNotification
</script>
