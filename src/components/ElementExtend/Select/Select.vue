<template>
    <el-select v-bind="{ ...$attrs, ...props }" @change="onChange">
        <template v-if="!$slots.default && !$slots.custom">
            <el-option v-for="(item, index) in options" :key="index" :value="item[displayValue]">
                {{ item[displayLabel] }}
            </el-option>
        </template>
        <!-- 通过后台返回数据，自定义渲染 -->
        <slot name="custom" :data="options"></slot>
        <slot v-for="name in Object.keys(slots)" :name="name"></slot>
    </el-select>
</template>
<script lang="ts" setup>
import { selectProps, Method, emits as Emits } from './select-type'
const slots = useSlots()
const props = defineProps(selectProps)
const emits = defineEmits(Emits)
defineOptions({ name: 'CSelect', inheritAttrs: false })
// 字典查询url地址
const DICT_URL = '/api/dict/list'

/** 下拉数据源 */
const options = ref<any[]>([])

// 后台方法，
const fetchSelectDataSource = (url: string, method: Method, params: any) => {
    return Promise.resolve({
        url,
        method,
        params
    }) as any
}

/** 获取下拉数据源 */
const getSelectDataInfos = async () => {
    let result = null
    if (props.dictNo) {
        result = await fetchSelectDataSource(DICT_URL, 'get', { no: props.dictNo })
    } else {
        result = await fetchSelectDataSource(props.url, props.method, props.params)
    }

    if (result) {
        options.value = [...result, ...props.appendData]
    } else {
        options.value = [...props.appendData]
    }
}

/** 设置下拉数据源 */
const setOptions = () => {
    options.value = props.dataSource
}

onMounted(() => {
    if (!props.url && props.dataSource.length === 0 && !slots.default)
        throw new Error('url or dataSource is required')

    if (props.dataSource.length > 0) {
        setOptions()
    } else if (props.url) {
        if (props.init) {
            getSelectDataInfos() // 请求后台
        }
    }
})

watch(
    () => props.dataSource,
    () => setOptions()
)

watchEffect(() => {
    if (props.reload) {
        getSelectDataInfos()
        emits('update:reload', false)
    }
})

/** 下拉值改变事件 */
const onChange = (value: any) => {
    let selectRows: any = []
    if (props.multiple) {
        selectRows = options.value.filter((item) => value.includes(item[props.displayValue]))
    } else {
        selectRows = options.value.find((item) => item[props.displayValue] === value)
    }
    emits('change', value, selectRows)
}
</script>
