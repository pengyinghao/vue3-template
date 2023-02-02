import {
    defineConfig,
    presetUno,
    presetAttributify,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    exclude: ['node_modules', '.git', 'dist'],
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-center': 'flex justify-center items-center',
        'flex-x-center': 'flex justify-center',
        'flex-y-center': 'flex items-center',
        'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
        'ellipsis-text': 'nowrap-hidden text-ellipsis',
        'transition-base': 'transition-all duration-300 ease-in-out'
    },
    theme: {
        colors: {
            dark: {
                DEFAULT: '#21252a',
                1: 'var(--dark1)',
                2: 'var(--el-border-color)',
                3: 'var(--el-bg-color-overlay)'
            },
            primary: {
                DEFAULT: 'var(--el-color-primary)',
                light: {
                    3: 'var(--el-color-primary-light-3)',
                    5: 'var(--el-color-primary-light-5)',
                    7: 'var(--el-color-primary-light-7)',
                    9: 'var(--el-color-primary-light-9)'
                },
                dark: 'var(--el-color-primary-dark-2)'
            }
        }
    },
    rules: [
        [/^flex-grow-(\d)$/, ([, d]) => ({ 'flex-grow': d })],
        [/^plr-(.*)$/, ([, p]) => ({ 'padding-left': p, 'padding-right': p })],
        [/^ptb-(.*)$/, ([, p]) => ({ 'padding-top': p, 'padding-bottom': p })]
    ]
})
