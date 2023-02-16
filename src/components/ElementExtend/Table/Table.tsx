import { SetupContext } from 'vue'
import { ElTable, ElPagination, vLoading } from 'element-plus'
import { TableProps, tableProps } from './table-props'

import './table.scss'
import { useDataSource } from './composable/userDataSource'
import tableColumn from './TableColumn'

export default defineComponent({
    directives: { loading: vLoading },
    props: tableProps,
    emits: ['load', 'update:reload'],
    setup(props: TableProps, context: SetupContext) {
        const { slots, attrs } = context

        const tableHeader = slots['table-header']
        const tableFooter = slots['table-footer']

        const { paginationState, table, onSortChange } = useDataSource(props, context)
        const { renderVNode } = tableColumn(props, context)

        return () => {
            // 分页器
            const paginationEl = (
                <ElPagination
                    v-model:current-page={paginationState.currentPage}
                    v-model:page-size={paginationState.pageSize}
                    page-sizes={[10, 20, 30, 50]}
                    total={paginationState.total}
                    layout="total, sizes, prev, pager, next, jumper"
                    class="mt-10px justify-end"
                />
            )

            return (
                <div class="c-table h-full flex-1 flex flex-col">
                    {/* 表格头区域 */}
                    <div class="c-table-header mb-10px">{tableHeader && tableHeader()}</div>
                    {/* 表格区域 */}
                    <ElTable
                        v-loading={table.loading}
                        data={table.dataSource}
                        {...attrs}
                        onSort-change={onSortChange}>
                        {renderVNode.value}
                    </ElTable>

                    {/* 表格尾区域 */}
                    <div class="c-table-footer">
                        {tableFooter && tableFooter()}
                        {props.pagination && paginationEl}
                    </div>
                </div>
            )
        }
    }
})
