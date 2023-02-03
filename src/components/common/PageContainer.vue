<template>
    <div class="h-full flex flex-col rounded-5px flex-1 flex flex-col">
        <div v-if="header" class="header">
            <div class="header-title">
                <div>
                    <!-- 标题 -->
                    <div class="flex-y-center text-size-14px">
                        <div class="font-bold">
                            <slot name="title"></slot>
                        </div>
                    </div>
                    <!-- 左侧插槽 -->
                    <slot name="left"></slot>
                </div>
                <div class="flex-y-center justify-end">
                    <!--  右侧插槽 -->
                    <slot name="right"></slot>
                    <div v-if="goBack" class="go-back" @click="onGoBack">
                        <Icon name="ep:arrow-left" />
                        <span class="ml-5px">返回</span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex-1 light:bg-white dark:bg-dark1"
            :class="[contentPadding ? 'padding' : '']"
            :style="{ height: `'calc(100% - 44px)' : '100%'` }"
        >
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
interface Props {
    /** 是否显示header */
    header?: boolean
    /** 内容区域是否有padding */
    contentPadding?: boolean
    /** 是否显示返回按钮 */
    goBack?: boolean
}
withDefaults(defineProps<Props>(), { contentPadding: true, header: false, goBack: false })
const emits = defineEmits(['go-back'])

const router = useRouter()
/** 返回上一页 */
const onGoBack = () => {
    emits('go-back')
    router.back()
}
</script>

<style scoped>
.header {
    height: auto;
    transition: all 0.3s;

    @apply h-44px light:bg-white dark:bg-dark1 rounded-5px mb-8px;
}

.header-title {
    @apply h-46px leading-46px plr-15px flex-y-center justify-between;
}

.padding {
    padding: 15px;
}

.go-back {
    @apply flex-y-center ml-10px cursor-pointer hover:c-primary transition-base;
}
</style>
