<template>
    <el-input v-model="value" :maxlength="search.maxLength || 64" @change="onInputChange" />
</template>
<script lang="ts" setup>
import { InputOption } from '../CotrolType'
const props = withDefaults(defineProps<{ search: InputOption }>(), {})
const emits = defineEmits(['search'])
const value = ref(props.search.value)

const onInputChange = () => {
    emits(
        'search',
        {
            displayValue: value.value,
            originValue: value.value
        },
        {
            [props.search.field]: value.value
        }
    )
}

watchEffect(() => {
    value.value = props.search.value
})
defineExpose({
    search: onInputChange
})
</script>
