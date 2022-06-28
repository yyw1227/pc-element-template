import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
// 引入公共样式
import './assets/css/public.scss'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
