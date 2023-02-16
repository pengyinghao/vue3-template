export const tableProps = {
    /** 是否显示分页 */
    pagination: {
        type: Boolean,
        default: true
    },
    /** 请求地址 */
    url: {
        type: String,
        default: ''
    },
    /** 默认数据源 */
    dataSource: {
        type: Array,
        default: () => []
    },
    /** 请求参数 */
    params: {
        type: Object,
        default: () => ({})
    },
    /** 是否立即请求 */
    init: {
        type: Boolean,
        default: true
    },
    /** 是否重新加载 */
    reload: {
        type: Boolean,
        default: false
    }
}

// export type PaginationProps = ExtractPropTypes<typeof paginationProps>
