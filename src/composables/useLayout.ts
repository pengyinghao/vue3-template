import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Ref } from 'vue'

interface UseLayout {
    /** 是否移动端 */
    isMobile: Ref<boolean>
}
export function useLayout(): UseLayout {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile = breakpoints.smaller('sm')
    return {
        isMobile
    }
}
