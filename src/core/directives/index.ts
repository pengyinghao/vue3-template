import { App } from 'vue'
import MouseLeave from './MouseLeave'

export function setupDirective(app: App) {
    app.directive('OnMouseLeave', MouseLeave)
}
