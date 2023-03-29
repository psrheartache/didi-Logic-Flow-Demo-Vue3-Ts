/*
 * @Author: Yufeng CHEN
 * @Date: 2023-02-24 11:24:15
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 19:21:02
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/main.ts
 */
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
