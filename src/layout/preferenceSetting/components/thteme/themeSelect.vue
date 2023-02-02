<!--
 * @Author: PengYH
 * @Date: 2023-02-02
 * @Description: 主题选择
-->
<template>
    <Color>
        <color-item v-for="color in themeColorList" :key="color" :color="color"></color-item>
    </Color>
</template>
<script lang="ts" setup>
import { themeColorList } from './themeList'
import Color from './color.vue'
import colorItem from './colorItem.vue'
defineOptions({ name: 'ThemeSelect' })
</script>
