/*
 * @Author: Yufeng CHEN
 * @Date: 2023-03-17 11:25:49
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-23 17:55:33
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/env.d.ts
 */
/**
 * 解释vue 文件类型
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
