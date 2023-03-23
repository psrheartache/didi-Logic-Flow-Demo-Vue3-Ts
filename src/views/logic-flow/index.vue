<!--
 * @Author: Yufeng CHEN
 * @Date: 2023-03-23 16:41:55
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-23 22:28:47
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/views/logic-flow/index.vue
-->
<template>
  <div class="logic-wrapper">
    <div id="logic-container"></div>
  </div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import { ref, onMounted } from 'vue'
import DmpNodeExtension from './index'

const lf = ref()

onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector('#logic-container') as HTMLElement,
    grid: true,
    snapline: true,
    history: true,
    plugins: [DmpNodeExtension],
  })
  lf.value.render({
    nodes: [
      {
        id: 'node_123_1',
        type: 'vue-html',
        x: 720,
        y: 400,
      },
    ],
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
