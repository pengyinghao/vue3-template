<!--
 * @Author: PengYH
 * @Date: 2023-02-02
 * @Description: 系统主题
-->
<template>
    <el-divider>系统主题</el-divider>
    <!-- 主题选择 -->
    <theme-select />
    <div class="mt-10px">
        <el-button type="default" class="w-full" @click="moreThemeVisible = true">
            更多颜色
        </el-button>
    </div>
    <!-- 更多颜色弹窗 -->
    <more-theme-modal v-model="moreThemeVisible" />
</template>
<script lang="ts" setup>
import ThemeSelect from './themeSelect.vue'
import MoreThemeModal from './moreThemeModal.vue'
const moreThemeVisible = ref(false)
</script>
