import { SetupContext, VNode } from 'vue'
import { ElPopover, ElCheckbox, ElCheckboxGroup, ElButton } from 'element-plus'

import { Icon } from '@/components'
import { TableProps } from './table-props'

// 默认固定列
const fixedColumn = ['selection', 'index', 'operation']
export default function useColumn(props: TableProps, context: SetupContext) {
    // 默认列
    const defaultVNode = ref<VNode[]>([])
    // 需要渲染的列
    const renderVNode = ref<VNode[]>([])
    // 复选框选中的列名
    const checkboxGroupValue = ref<string[]>([])

    const getProps = (node: VNode) => node.props as any

    /** 数据列 */
    const dataColumn = computed(() =>
        defaultVNode.value.filter((node) => !fixedColumn.includes(getProps(node).type))
    )

    /** 表格列 用作 作为 多选框数据源 */
    const checkboxData = computed(() => {
        return dataColumn.value.map((item) => {
            const props = getProps(item)
            return {
                field: props.prop,
                label: props.label
            }
        })
    })

    /** 设置渲染列 */
    const setColumn = () => {
        const result = defaultVNode.value.filter((node) => {
            const props = getProps(node)
            if (fixedColumn.includes(props.type)) return node
            return checkboxGroupValue.value.includes(getProps(node).prop)
        })
        renderVNode.value = result
    }

    /** 重置渲染列 */
    const resetColumn = () => {
        // 如果设置默认显示列
        if (props.defaultColumns.length > 0) {
            checkboxGroupValue.value = props.defaultColumns
        } else {
            checkboxGroupValue.value = dataColumn.value.map((node) => getProps(node).prop)
        }
        setColumn()
    }

    const init = () => {
        if (context.slots.default) {
            defaultVNode.value = context.slots.default()
            resetColumn()
        }
    }

    init()

    // 获取操作列
    const operation = defaultVNode.value.filter((node) => getProps(node).type === 'operation')
    if (operation.length > 0) {
        // 获取操作列 所有插槽
        const operationSorts = operation[0].children as any

        // 通过操作 header插槽 自定义内容
        operationSorts.header = () => {
            const popoverSlots = {
                reference: () => <Icon name="ic:round-more-vert" class="ml-5px cursor-pointer" />
            }
            const popoverContent = () => {
                return (
                    <>
                        <ElCheckboxGroup v-model={checkboxGroupValue.value}>
                            {checkboxData.value.map((item) => {
                                return <ElCheckbox label={item.field}>{item.label}</ElCheckbox>
                            })}
                        </ElCheckboxGroup>
                        <div class="mt-5px">
                            <ElButton type="primary" size="small" onClick={setColumn}>
                                确定
                            </ElButton>
                            <ElButton class="ml-5px" size="small" onClick={resetColumn}>
                                重置
                            </ElButton>
                        </div>
                    </>
                )
            }

            return (
                <div class="flex flex-y-center">
                    {(operation[0].props as any).label}
                    <ElPopover v-slots={popoverSlots}>{popoverContent()}</ElPopover>
                </div>
            )
        }
    } else {
        renderVNode.value = defaultVNode.value
    }

    return {
        renderVNode
    }
}
