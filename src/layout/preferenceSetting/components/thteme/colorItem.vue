<!--
 * @Author: PengYH
 * @Date: 2023-02-02
 * @Description: 颜色组件项
-->
<template>
    <div>
        <div
            class="flex-center w-full h-36px p-5px rounded-2px shadow cursor-pointer"
            :style="{ backgroundColor: color }"
            @click="appStore.theme = color"
        >
            <Icon
                v-if="appStore.theme === color"
                name="ep:select"
                :class="[appStore.themeMode === 'dark' ? 'text-gray-700' : 'text-white']"
            />
        </div>
        <div class="mt-5px text-center">{{ label }}</div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
import { useAppStore } from '@/store'
defineProps<{
    /** 颜色值 */
    color: string
    /** 文本 */
    label?: string
}>()

const appStore = useAppStore()
</script>
