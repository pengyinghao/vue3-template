import { SetupContext } from 'vue'
import { fetchTableData } from '../fetch'
import { TableProps } from '../table-props'
interface TableReactive {
    /** 数据是否加载中 */
    loading: boolean
    /** 数据源  */
    dataSource: any[]
    /** 排序字段 */
    sortDataField?: string
    /** 是否正序 */
    asc?: boolean
}

interface PaginationReactive {
    /** 当前页数 */
    currentPage: number
    /** 每页条数 */
    pageSize: number
    /**  总条数 */
    total: number
}

export function useDataSource(props: TableProps, context: SetupContext) {
    const { emit } = context
    const table = reactive<TableReactive>({
        loading: false,
        dataSource: [],
        sortDataField: undefined,
        asc: undefined
    })

    const paginationState = reactive<PaginationReactive>({
        currentPage: 1,
        pageSize: 20,
        total: 0
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
        emit('load', result.list)
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
            emit('update:reload', false)
        }
        if (props.firstPage) {
            paginationState.currentPage = 1
            emit('update:firstPage', false)
        }
    })

    onBeforeMount(() => {
        if (props.init && props.url) {
            getTableData()
        } else if (props.data) {
            table.dataSource = props.data
        }
    })

    return {
        table,
        paginationState,
        onSortChange
    }
}
