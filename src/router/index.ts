import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard'
import { routes } from './routes'
const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})
export default router
export function setupRoute(app: App) {
    app.use(router)
    createRouterGuard(router)
}
