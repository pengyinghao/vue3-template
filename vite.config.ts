import { defineConfig } from 'vite'
import { resolve } from 'path'
import { pluginsConfig } from './build/pluginConfig'

export default defineConfig(({ command }) => {
    return {
        plugins: pluginsConfig(command === 'build'),
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        server: {
            host: '0.0.0.0'
        },
        build: {
            outDir: 'dist',
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[hash].[ext]',
                    manualChunks(id: any) {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            },
            // sourcemap: true,
            brotliSize: false
        }
    }
})
