import { Ref } from 'vue'
export const methods = [
    'clearSelection',
    'getSelectionRows',
    'toggleRowSelection',
    'toggleAllSelection',
    'toggleRowExpansion',
    'setCurrentRow',
    'clearSort',
    'clearFilter',
    'doLayout',
    'sort',
    'scrollTo',
    'setScrollTop',
    'setScrollLeft'
]
const initMethods = (refTable: Ref) => {
    const methodObj: Record<string, (...args: any) => void> = {}
    methods.forEach((method) => {
        methodObj[method] = (...args: any) => {
            if (refTable.value && refTable.value[method]) {
                refTable.value[method](...args)
            }
        }
    })

    return methodObj
}

export default initMethods
