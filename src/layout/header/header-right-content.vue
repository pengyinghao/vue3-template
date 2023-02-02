<template>
    <div class="flex items-center h-full">
        <div class="header-item" @click="onFullScreen">
            <icon name="ep:full-screen" size="18"></icon>
        </div>
        <message class="header-item" />
        <avatar class="header-item !w-auto" />
    </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import Avatar from './components/avatar.vue'
import Message from './components/message.vue'
import { Icon } from '@/components'
defineOptions({
    name: 'HeaderRightContent'
})

const { toggle } = useFullscreen()

/** 全屏、退出全屏单击事件 */
const onFullScreen = () => {
    toggle()
}
</script>
