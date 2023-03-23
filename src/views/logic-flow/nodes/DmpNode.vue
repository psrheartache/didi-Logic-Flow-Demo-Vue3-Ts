<!--
 * @Author: Yufeng CHEN
 * @Date: 2023-03-23 16:41:55
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-23 17:41:17
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/views/logic-flow/nodes/DmpNode.vue
-->
<template>
  <div class="dmp-node">
    {{ times }}
    <div @click="times += 3">点我</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const times = ref(7)
</script>

<style lang="less" scoped>
.dmp-node {
  width: 300px;
  height: 300px;
  background-color: #000;
  color: #fff;
}
</style>
