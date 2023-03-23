/*
 * @Author: Yufeng CHEN
 * @Date: 2023-02-24 11:24:15
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-23 22:28:59
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/main.ts
 */
/* 基础依赖 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// login-flow css
import '@logicflow/core/dist/style/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
