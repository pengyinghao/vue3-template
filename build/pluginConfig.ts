import { PluginOption } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import defineOptions from 'unplugin-vue-define-options/vite'
import viteCompression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import { autoImport, autoComponent } from './plugins/autoComponent'

// eslint-disable-next-line no-unused-vars
export function pluginsConfig(isBuild: boolean) {
    const plugins: PluginOption[] = [vue(), vueJsx(), defineOptions(), unocss()]

    plugins.push(viteCompression())
    plugins.push(autoImport())
    plugins.push(autoComponent())
    plugins.push(eslintPlugin())
    return plugins
}
