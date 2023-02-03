<template>
    <!-- 文本框 -->
    <ControlInput
        v-if="props.search?.type === 'input'"
        ref="refInputControl"
        :search="(search as any)"
        @search="onSearch"
    />
    <!-- 日期 -->
    <ControlDate
        v-else-if="['date', 'date-range'].includes(props.search?.type as string)"
        ref="refDateControl"
        :search="(search as any)"
        @search="onSearch"
    />
</template>
<script lang="ts" setup>
import ControlInput from './ControlInput/ControlInput.vue'
import ControlDate from './ControlDate/ControlDate.vue'
import { SearchOptions } from './CotrolType'
import { Condition } from '../search-type'
const props = defineProps<{ search?: SearchOptions }>()
const emits = defineEmits(['search'])

const refInputControl = ref<InstanceType<typeof ControlInput>>()
const refDateControl = ref<InstanceType<typeof ControlDate>>()

const query = () => {
    const type = props.search?.type
    nextTick(() => {
        if (type === 'input') {
            refInputControl.value?.search()
        } else if (type === 'date' || type === 'date-range') {
            refDateControl.value?.search()
        }
    })
}

/**
 * input 查询事件
 * @param value 返回的原始值
 * @param searchParams 处理过的查询条件
 */
const onSearch = (value: Record<string, any>, searchParams: Record<string, any>) => {
    const obj: Condition = {
        selectConditionRow: props.search as SearchOptions,
        displayValue: value.displayValue,
        value: value.originValue,
        searchParams
    }
    emits('search', obj)
}

defineExpose({
    query
})
</script>
