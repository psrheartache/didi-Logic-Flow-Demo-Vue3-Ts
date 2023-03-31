<!--
 * @Author: Yufeng CHEN
 * @Date: 2023-03-23 16:41:55
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-31 17:51:28
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/views/logic-flow/index.vue
-->
<template>
  <div class="logic-wrapper">
    <div id="logic-container"></div>
  </div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import { toRaw, ref, onMounted } from 'vue'
import AutoNodeExtension from './index'

const lf = ref()
const currentNode = ref(null) // 存储当前节点数据

onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector('#logic-container') as HTMLElement,
    grid: true,
    snapline: true,
    history: true,
    plugins: [AutoNodeExtension],
  })
  const lfRaw = toRaw(lf.value)
  lfRaw.render({
    nodes: [
      // {
      //   id: 'node_123_1',
      //   type: 'vue-html',
      //   x: 720,
      //   y: 400,
      // },
    ],
  })

  // 全局绑定节点点击事件
  lf.value.on('node:click', ({ data }: { data: any }) => {
    window.console.log(data)
    currentNode.value = data
  })
})
</script>

<style lang="less">
.logic-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  #logic-container {
    width: 100%;
    height: 100%;
  }
}
</style>
