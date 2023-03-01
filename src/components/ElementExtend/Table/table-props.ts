import { ExtractPropTypes, PropType } from 'vue'

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
    data: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    /** 请求参数 */
    params: {
        type: Object as PropType<Record<string, any>>,
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
    },
    /** 是否回到第一页 */
    firstPage: {
        type: Boolean,
        default: false
    },
    /** 默认显示列 */
    defaultColumns: {
        type: Array as PropType<string[]>,
        default: () => []
    }
}
export type TableProps = ExtractPropTypes<typeof tableProps>
