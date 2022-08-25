import { createApp } from 'vue'
import App from './App.vue'
import pinia from './plugins/pinia'
import router from './router'

// 基础样式
import './assets/css/public.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
