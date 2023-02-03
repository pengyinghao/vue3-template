<template>
    <div class="search">
        <div class="search-body">
            <c-select
                v-model="conditionValue"
                :data-source="options"
                :style="{ width: `${searchSelectWidth}px` }"
                display-value="field"
                @change="onSelectChanage"
            />
            <el-divider direction="vertical" />
            <div class="flex-1">
                <control ref="refControl" :search="searchOptions" @search="onSearch" />
            </div>
            <!-- 搜索 -->
            <icon
                name="ep:search"
                class="hover:c-primary cursor-pointer"
                @click="refControl?.query()"
            />
            <slot></slot>
        </div>
        <div class="search-conditions">
            <div
                v-for="(condition, index) in conditions"
                :key="condition.selectConditionRow.field"
                class="search-conditions-item"
            >
                <span>{{ condition.selectConditionRow.label }}：{{ condition.displayValue }}</span>
                <icon
                    name="ep:close"
                    size="12"
                    class="close-icon"
                    @click="onRemoveCondition(index)"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CSelect, Icon } from '@/components'
import Control from './Control/Control.vue'
import { SearchOptions } from './Control/CotrolType'
import { Condition, searchInputProps } from './search-type'
defineOptions({ name: 'Search' })
const props = defineProps(searchInputProps)
const emits = defineEmits(['search'])

const refControl = ref<InstanceType<typeof Control>>()

/** 所有查询条件 */
const conditions = ref<Condition[]>([])
const emitSearchParams = () => {
    // 组装查询条件
    let searchParams = {}
    conditions.value.forEach((condition) => {
        searchParams = { ...searchParams, ...condition.searchParams }
    })
    emits('search', searchParams)
}

/** 移出查询条件 */
const onRemoveCondition = (index: number) => {
    const { field } = conditions.value[index].selectConditionRow
    const options = props.options.filter((item) => item.field === field)
    options[0].value = undefined

    conditions.value.splice(index, 1)
    emitSearchParams()
}

/** 查询条件 查询事件 */
const onSearch = (condition: Condition) => {
    const { field } = condition.selectConditionRow

    // 值为空的情况下
    if (!condition.value) {
        conditions.value = conditions.value.filter(
            (item) => item.selectConditionRow.field !== field
        )
    } else {
        const index = conditions.value.findIndex((it) => it.selectConditionRow.field === field)
        // 存在，则替换原有的值
        if (index > -1) conditions.value.splice(index, 1, condition)
        else {
            conditions.value.push(condition)
        }

        const options = props.options.filter((item) => item.field === field)
        if (options.length > 0) {
            options[0].value = condition.value
        }
    }
    emitSearchParams()
}

/** 条件字段 下拉值 */
const conditionValue = ref('')
/** 通过条件值 拿到 条件控件的渲染信息 */
const searchOptions = ref<SearchOptions>()
/** 条件下拉 值改变事件 */
const onSelectChanage = () => {
    const result = props.options.find((item) => item.field === conditionValue.value)
    searchOptions.value = result
}

const init = () => {
    if (props.options.length > 0) {
        if (props.default) {
            const result = props.options.find((it) => it.field === props.default)
            searchOptions.value = result ?? props.options[0]
        } else {
            searchOptions.value = props.options[0]
        }

        conditionValue.value = searchOptions.value.field
    }
}
init()
</script>

<style lang="scss" scoped>
:deep(.el-input .el-input__wrapper),
:deep(.el-select .el-input.is-focus .el-input__wrapper),
:deep(.el-date-editor.el-input__wrapper) {
    box-shadow: none !important;
}

.search-body {
    border-bottom: 1px solid var(--el-color-primary);

    @apply flex items-center;
}

.search-conditions {
    @apply mt-10px flex flex-wrap items-center;

    &-item {
        border: 1px solid #f1f2f7;
        background-color: #f1f2f7;

        @apply h-24px flex items-center plr-7px  mr-10px rounded-2px;

        &:last-of-type {
            margin-right: 0;
        }

        .close-icon {
            color: #00000073;
            transition: all 0.3s;

            @apply ml-5px cursor-pointer;

            &:hover {
                color: var(--color-dark);
            }
        }
    }
}
</style>
