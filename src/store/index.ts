import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import useAppStore from './modules/appStore'
import useUserStore from './modules/userStore'
import useTabStore from './modules/tabStore'

export function setupPinia(app: App) {
    const pinia = createPinia()
    pinia.use(piniaPersist)
    app.use(pinia)
}

export { useAppStore, useUserStore, useTabStore }
