<!--
 * @Author: PengYH
 * @Date: 2023-01-31
 * @Description:继承iconify/vue-ant design 的图标组件
-->
<template>
    <iconify v-bind="$attrs" :icon="name" :width="size" :height="size" :color="color"></iconify>
</template>
<script lang="ts" setup>
import { Icon as Iconify } from '@iconify/vue'
defineOptions({
    name: 'Icon'
})
withDefaults(
    defineProps<{
        /** 图标名称 */
        name: string
        /** 图标大小 */
        size?: number | string
        /** 图标颜色 */
        color?: string
    }>(),
    {
        size: 16,
        color: undefined
    }
)
</script>
