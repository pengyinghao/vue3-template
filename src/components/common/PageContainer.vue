<template>
    <div class="h-full flex flex-col rounded-5px flex-1 flex flex-col">
        <section v-if="slots.header" ref="refHeader" class="header">
            <div class="plr-16px pt-16px">
                <slot name="header"></slot>
            </div>
            <div class="flex-y-center justify-end">
                <!--  右侧插槽 -->
                <slot name="right"></slot>
                <div v-if="goBack" class="go-back" @click="onGoBack">
                    <Icon name="ep:arrow-left" />
                    <span class="ml-5px">返回</span>
                </div>
            </div>
        </section>
        <section
            class="content"
            :style="{ height: contentHeight }"
            :class="[contentPadding ? 'padding' : '']"
        >
            <slot></slot>
        </section>
    </div>
</template>
<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
import { PageContainerProps } from './comm-type'
withDefaults(defineProps<PageContainerProps>(), {
    contentPadding: true,
    header: false,
    goBack: false
})
const slots = useSlots()
const emits = defineEmits(['go-back'])

const refHeader = ref<HTMLElement>()
const contentHeight = ref('100%')
const setContentHeight = () => {
    if (refHeader.value) {
        contentHeight.value = `calc(100% - ${refHeader.value.offsetHeight + 10}px)`
    }
}
window.addEventListener('resize', () => {
    setContentHeight()
})

onMounted(() => {
    setContentHeight()
})
const router = useRouter()
/** 返回上一页 */
const onGoBack = () => {
    emits('go-back')
    router.back()
}
</script>

<style lang="scss" scoped>
.header {
    height: auto;
    box-shadow: 0 1px 13px 1px rgba(62, 72, 160, 10%);
    transition: all 0.3s;

    @apply rounded-el-border light:bg-white dark:bg-dark1 mb-10px;
}

.content {
    @apply flex-1 flex flex-col flex-shrink-0 p-16px rounded-el-border light:bg-white dark:bg-dark1;
}

.padding {
    box-shadow: 0 1px 13px 1px rgba(62, 72, 160, 10%);

    @apply plr-15px;
}

.go-back {
    @apply rounded-el-border flex-y-center ml-10px cursor-pointer hover:c-primary transition-base;
}
</style>
