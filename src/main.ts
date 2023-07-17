/* 基础依赖 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import router from './router'

/* U框架Arco-design */
import '@arco-design/web-vue/dist/arco.css'

// login-flow css
import '@logicflow/core/dist/style/index.css'

const app = createApp(App)

app.use(router).use(ArcoVue)

app.mount('#app')
