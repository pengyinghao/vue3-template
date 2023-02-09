<template>
    <div class="c-table h-full flex-1 flex flex-col">
        <!-- 表格头区域 -->
        <div class="c-table-header mb-10px">
            <slot name="table-header"></slot>
        </div>
        <!-- 表格区域 -->
        <el-table v-bind="$attrs">
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
<script lang="ts" setup>
import { props } from './table-props'
defineOptions({ name: 'CTable', inheritAttrs: false })
defineProps(props)
const paginationState = reactive({
    currentPage: 1,
    pageSize: 20,
    total: 1000
})
</script>
<style scoped>
:deep(.el-table__header th) {
    background-color: #e9ebf3;
}
</style>
