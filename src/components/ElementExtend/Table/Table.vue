<template>
    <div class="c-table h-full flex-1 flex flex-col">
        <!-- 表格头区域 -->
        <div class="c-table-header mb-10px">
            <slot name="table-header"></slot>
        </div>
        <!-- 表格区域 -->
        <el-table
            v-loading="table.loading"
            :data="table.dataSource"
            v-bind="$attrs"
            @sort-change="onSortChange"
        >
            <slot></slot>
        </el-table>
        <!-- 表格尾区域 -->
        <div class="c-table-footer">
            <slot name="table-footer">
                <el-pagination
                    v-if="pagination"
                    v-model:current-page="paginationState.currentPage"
                    v-model:page-size="paginationState.pageSize"
                    :page-sizes="[10, 20, 30, 50]"
                    :total="paginationState.total"
                    layout="total, sizes, prev, pager, next, jumper"
                    class="mt-10px justify-end"
                />
            </slot>
        </div>
    </div>
</template>
<script lang="tsx" setup>
import { fetchTableData } from './fetch'
import { tableProps } from './table-props'
defineOptions({ name: 'CTable', inheritAttrs: false })
const props = defineProps(tableProps)
const emits = defineEmits(['load', 'update:reload'])

const paginationState = reactive({
    currentPage: 1,
    pageSize: 20,
    total: 0
})

const table = reactive<any>({
    loading: false,
    dataSource: [],
    sortDataField: undefined,
    asc: undefined
})

const getTableData = async () => {
    table.loading = true
    const result = await fetchTableData(props.url, {
        pageNo: paginationState.currentPage,
        pageSize: paginationState.pageSize,
        asc: table.asc,
        sortDataField: table.sortDataField,
        ...props.params
    })
    paginationState.total = result.total
    table.dataSource = result.list
    table.loading = false
    emits('load', result.list)
}

/** 表格排序时间 */
const onSortChange = ({ prop, order }: any) => {
    if (order) {
        table.sortDataField = prop
        table.asc = order === 'ascending'
    } else {
        table.sortDataField = undefined
        table.asc = undefined
    }
    getTableData()
}

watch(
    () => [paginationState.currentPage, paginationState.pageSize],
    () => {
        getTableData()
    }
)

watchEffect(() => {
    if (props.reload) {
        getTableData()
        emits('update:reload', false)
    }
})

onBeforeMount(() => {
    if (props.init && props.url) {
        getTableData()
    } else if (props.dataSource) {
        table.dataSource = props.dataSource
    }
})
</script>
<style scoped>
:deep(.el-table__header) th {
    @apply bg-#e9ebf3 dark:bg-#292e34;
}
</style>
