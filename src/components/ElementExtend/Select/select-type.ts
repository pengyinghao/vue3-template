import { PropType } from 'vue'
import { ComponentSize } from 'element-plus/lib/constants/size'
import { isValidComponentSize } from 'element-plus/lib/utils/vue/validator'
import { iconPropType } from 'element-plus/lib/utils/vue/icon'
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'

/** 请求方式 */
export type Method = 'get' | 'post'

export const elementProps = {
    /** Select 输入框的原生 name 属性 */
    name: String,
    /** Select 输入框的原生 autocomplete 属性 */
    autocomplete: {
        type: String,
        default: 'off'
    },
    /** 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单 */
    automaticDropdown: Boolean,
    /** 输入框尺寸 */
    size: {
        type: String as PropType<ComponentSize>,
        validator: isValidComponentSize
    },
    /** Tooltip 主题，内置了 dark / light 两种 */
    effect: {
        type: String as PropType<'light' | 'dark' | string>,
        default: 'light'
    },
    /** 是否禁用 */
    disabled: Boolean,
    /** 是否可以清空选项 */
    clearable: Boolean,
    /** Select 组件是否可筛选 */
    filterable: Boolean,
    /** 是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效 */
    allowCreate: Boolean,
    /** 是否正在从远程获取数据 */
    loading: Boolean,
    popperClass: {
        type: String,
        default: ''
    },
    remote: Boolean,
    /** 从服务器加载内容时显示的文本 */
    loadingText: String,
    /** 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置 */
    noMatchText: String,
    /** 无选项时显示的文字，也可以使用 empty 插槽设置自定义内容 */
    noDataText: String,
    /** 自定义远程搜索方法 */
    remoteMethod: Function,
    /** 自定义筛选方法 */
    filterMethod: Function,
    /** 是否多选 */
    multiple: Boolean,
    /** multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制 */
    multipleLimit: {
        type: Number,
        default: 0
    },
    /** 占位文字 */
    placeholder: {
        type: String
    },
    /** 是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用 */
    defaultFirstOption: Boolean,
    /** 当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词 */
    reserveKeyword: {
        type: Boolean,
        default: true
    },
    /** 作为 value 唯一标识的键名，绑定值为对象类型时必填 */
    valueKey: {
        type: String,
        default: 'value'
    },
    /** 多选时是否将选中值按文字的形式展示 */
    collapseTags: Boolean,
    /** 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true */
    collapseTagsTooltip: {
        type: Boolean,
        default: false
    },
    /** 当下拉选择器未被激活并且persistent设置为false，选择器会被删除。 */
    persistent: {
        type: Boolean,
        default: true
    },
    /** 自定义清除图标 */
    clearIcon: {
        type: iconPropType,
        default: CircleClose
    },
    /** 下拉框的宽度是否与输入框相同 */
    fitInputWidth: {
        type: Boolean,
        default: false
    },
    suffixIcon: {
        type: iconPropType,
        default: ArrowDown
    },
    /** 是否触发表单验证 */
    validateEvent: {
        type: Boolean,
        default: true
    },
    /** 远程搜索方法显示后缀图标 */
    remoteShowSuffix: {
        type: Boolean,
        default: false
    },
    /** 下拉菜单显示/消失时后缀图标的动画 */
    suffixTransition: {
        type: Boolean,
        default: true
    }
}

/** 下拉数据参数 */
export const selectProps = {
    ...elementProps,
    /** url请求地址 */
    url: {
        type: String,
        default: ''
    },
    /** 额外参数 */
    params: {
        type: Object as PropType<Record<string, string>>,
        default: () => ({})
    },
    /** 请求方式 */
    method: {
        type: String as PropType<Method>,
        default: 'get'
    },
    /** 隐藏值 */
    displayValue: {
        type: String,
        default: 'value'
    },
    /** 显示值 */
    displayLabel: {
        type: String,
        default: 'label'
    },
    /** 静态 数据源 */
    dataSource: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    /** 追加的数据(一般用于动态数据源) */
    appendData: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    /** 字典编号 */
    dictNo: {
        type: String,
        default: ''
    },
    /** 是否重新加载 */
    reload: {
        type: Boolean,
        default: false
    },
    /** 是否初始化请求 */
    init: {
        type: Boolean,
        default: true
    }
}

export const emits = ['change', 'update:reload']
