<!--
 * @Author: PengYH
 * @Date: 2023-01-31
 * @Description:继承iconify/vue-ant design 的图标组件
-->
<template>
    <div class="c-icon flex-y-center">
        <iconify v-bind="$attrs" :icon="name" :width="size" :height="size" :color="color"></iconify>
        <div v-if="$slots.default" class="ml-5px">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon as Iconify } from '@iconify/vue'
import { IconProps } from './icon-type'
defineOptions({ name: 'Icon' })
withDefaults(defineProps<IconProps>(), {
    size: 16,
    color: undefined
})
</script>
