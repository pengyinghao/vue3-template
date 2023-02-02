import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/el-message.css'
import 'uno.css'
import './styles/index.scss'
import { setupRoute } from './router'
import { setupDirective } from './core/directives'

const app = createApp(App)
setupPinia(app)
setupRoute(app)
setupDirective(app)

app.mount('#app')
