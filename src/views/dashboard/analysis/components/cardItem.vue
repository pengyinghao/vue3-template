<template>
    <el-col :span="6" :md="6" :sm="12" :xs="24" class="mb-12px">
        <el-card>
            <div class="card-item">
                <div class="card-icon w-80px h-80px flex-center rounded-el-border">
                    <icon :name="iconName" :color="iconColor" size="48"></icon>
                </div>
                <div>
                    <div class="text-16px c-#8c8c8c text-center">{{ label }}</div>
                    <div class="text-20px mt-12px c-#7b7b7b text-center">{{ value }}</div>
                </div>
            </div>
        </el-card>
    </el-col>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
interface Props {
    /** 图标 */
    iconName: string
    /** 图标颜色 */
    iconColor: string
    /** 文本 */
    label: string
    /** 统计值 */
    value: string | number
}
const props = defineProps<Props>()
const iconcolor = computed(() => props.iconColor)
</script>
<style lang="scss" scoped>
.card-item {
    @apply h-120px flex-y-center justify-between p-20px cursor-pointer rounded-el-border;

    &:hover .card-icon {
        background-color: v-bind(iconcolor);
    }
}

.card-icon,
:deep(.c-icon .iconify) {
    transition: all 0.3s;
}

.card-item:hover :deep(.c-icon .iconify) {
    color: #fff !important;
}
</style>
