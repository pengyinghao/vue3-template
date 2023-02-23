import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

/** 自动按需引入组件 */
export function autoComponent() {
    return Components({
        resolvers: [ElementPlusResolver()],
        extensions: ['vue'],
        dirs: [],
        dts: 'typings/auto-components.d.ts'
    })
}

/** 自动按需引入依赖 */
export function autoImport() {
    return AutoImport({
        dts: 'typings/auto-imports.d.ts',
        dirs: [],
        imports: ['vue', 'vue-router']
    })
}
