import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// 引入公共样式
import './assets/css/public.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
