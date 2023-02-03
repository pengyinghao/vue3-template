import { PropType } from 'vue'
import { SearchOptions } from './Control/CotrolType'

/** 组件参数 */
export const searchInputProps = {
    /** 查询条件集合 */
    options: {
        type: Array as PropType<SearchOptions[]>,
        default: () => []
    },
    /** 查询条件下拉宽度 */
    searchSelectWidth: {
        type: Number,
        default: 100
    },
    /** 默认项 */
    default: {
        type: String,
        default: ''
    }
}

/**  条件信息 */
export interface Condition {
    /** 下拉条件行 */
    selectConditionRow: SearchOptions
    /** 显示值 */
    displayValue: string
    /** input value值 (用户回显) */
    value: string | number | undefined | boolean
    /** 处理过的字段,用户后台查询 */
    searchParams: any
}
