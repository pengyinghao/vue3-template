<template>
    <el-date-picker
        v-model="value"
        :editable="false"
        :type="search.mode"
        :format="search.format"
        :value-format="search.valueFormat ?? 'YYYY-MM-DD'"
        :clearable="false"
        @change="onDateChange"
    />
</template>
<script lang="ts" setup>
import { DateOption } from '../CotrolType'
const props = withDefaults(defineProps<{ search: DateOption }>(), {})
const emits = defineEmits(['search'])

const range = computed(() => {
    return ['daterange', 'datetimerange', 'monthrange'].includes(props.search.mode as string)
})
const value = ref<any>(range.value ? [] : undefined)

const onDateChange = () => {
    const data: Record<string, any> = {}

    if (range.value) {
        data[props.search.startField] = value.value[0]
        data[props.search.endField] = value.value[1]
    } else {
        data.displayValue = value.value
    }

    emits(
        'search',
        {
            originValue: value.value,
            displayValue: range.value ? value.value.join('~') : value.value
        },
        data
    )
}

watchEffect(() => {
    value.value = props.search.value
})
defineExpose({
    search: onDateChange
})
</script>
<style scoped>
:deep(.el-input__prefix) {
    display: none;
}
</style>
