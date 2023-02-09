import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useAppStore from './modules/appStore'
import useUserStore from './modules/userStore'
import useTabStore from './modules/tabStore'

export function setupPinia(app: App) {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
}

export { useAppStore, useUserStore, useTabStore }
