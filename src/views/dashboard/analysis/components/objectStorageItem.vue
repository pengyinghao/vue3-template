<template>
    <div class="item">
        <div class="flex items-end">
            <icon size="30" :name="iconName" class="c-primary" />
            <div class="item-wrap">
                <count-up class="item-counter" :end-val="counter" :options="options" />
                <div class="item-text">{{ desc + unitValue }}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import CountUp from 'vue-countup-v3'
import { Icon } from '@/components'

withDefaults(
    defineProps<{
        /** 图标名称 */
        iconName: string
        /** 数字 */
        counter: number | string
        /** 单位 */
        unitValue: string
        /** 描述 */
        desc: string
        /** 小数 */
        options?: {
            decimalPlaces: number
        }
    }>(),
    {
        options() {
            return { decimalPlaces: 0 }
        }
    }
)
</script>
<style lang="scss" scoped>
.item {
    border-radius: var(--border-radius);

    @apply flex-1 flex-center;

    &:not(:first-of-type) {
        margin-left: 12px;
    }

    &-wrap {
        @apply ml-15px;
    }

    &-counter {
        @apply text-20px;
    }

    &-text {
        color: var(--el-text-color-regular);
    }
}
</style>
