/** input查询条件 */
export interface InputProps {
    type: 'input'
    /** 输入的最大字符（默认64） */
    maxLength?: number
}

/** 日期查询条件 */
export interface DateProps {
    type: 'date'
}

export interface DateRangeProps {
    type: 'date-range'
    /** 开始时间字段 */
    startField: string
    /** 结束时间字段 */
    endField: string
}

/** 下拉需要的字段 */
interface OptionsBaseSelect {
    /** 后台查询url */
    url?: string
    /** 后台查询的参数 */
    params?: Record<string, any>
    /** 查询条件静态数据源 */
    dataSource?: any[]
    /** 隐藏值 */
    displayValue?: string
    /** 显示值 */
    displayLabel?: string
}

/** 下拉查询条件 */
export interface OptionsSelect extends OptionsBaseSelect {
    type: 'select'
    /** 字典编号 */
    dictNo?: string
    /** 设置 Select 的模式为多选或标签 */
    selectMode?: 'multiple' | 'tags' | 'combobox'
}

export type DateTimeProps = (DateProps | DateRangeProps) & {
    /** 选择值显示格式 */
    valueFormat?: string
    /** 日期面板的状态 */
    mode?:
        | 'month'
        | 'date'
        | 'datetime'
        | 'week'
        | 'decade'
        | 'datetimerange'
        | 'daterange'
        | 'monthrange'
    /** 设置日期格式 */
    format?: string
}
export type Option = {
    /** 查询的显示名 */
    label: string
    /** 需要查询的字段名 */
    field: string
    /** 提示内容 */
    placeholder?: string | string[]
    /** 默认值 */
    value?: any
}

/** 每个类型需要传递的参数 */
export type SearchOptions = (InputProps | DateTimeProps | OptionsSelect) & Option

export type InputOption = InputProps & Option

export type DateOption = DateTimeProps & Option & DateRangeProps
