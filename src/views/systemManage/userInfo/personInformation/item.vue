<template>
    <div class="item">
        <div class="item-content">
            <div>
                <icon :name="icon" class="pl-6px" style="vertical-align: baseline">
                    <span class="item-title">{{ title }}</span>
                </icon>
            </div>
            <div class="item-desc">
                <slot></slot>
            </div>
        </div>
        <el-button type="primary" link class="!pr-20px" @click="onBtnClick">
            <icon :name="btnIcon">
                {{ btnText }}
            </icon>
        </el-button>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
interface Props {
    /** 图标 */
    icon: string
    /** 标题 */
    title: string
    /** 按钮文字 */
    btnText?: string
    /** 按钮图标 */
    btnIcon?: string
}

withDefaults(defineProps<Props>(), {
    btnText: '修改',
    btnIcon: 'ep:edit-pen'
})
const emits = defineEmits(['click'])
/** 按钮单击事件 */
const onBtnClick = () => {
    emits('click')
}
</script>
<style lang="scss" scoped>
.item {
    @apply flex justify-between pb-10px mt-50px;

    border-bottom: 1px solid var(--el-border-color);

    &-title {
        @apply font-bold ml-5px;
    }

    &-content {
        @apply flex-center;
    }

    &-desc {
        @apply flex ml-20px c-gray;
    }
}

// .dark .item {
//     border-color: var(--color-dark2);
// }
</style>
