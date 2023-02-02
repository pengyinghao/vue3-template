<template>
    <el-drawer v-bind="$attrs" title="偏好设置" :size="350">
        <div class="pb-20px">
            <!-- 主题模式 -->
            <ThemeMode />
            <!-- 系统主题 -->
            <Theme />
            <!-- 界面功能 -->
            <PageFunction />
            <!-- 界面展示 -->
            <PageView />
            <el-button type="danger" class="w-100% mt-15px" @click="appStore.$reset()">
                重置
            </el-button>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import ThemeMode from './components/themeMode.vue'
import Theme from './components/thteme/theme.vue'
import PageView from './components/pageView.vue'
import PageFunction from './components/pageFunction.vue'
defineOptions({
    name: 'PreferenceSetting'
})
const appStore = useAppStore()
</script>
