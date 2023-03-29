<!--
 * @Author: Yufeng CHEN
 * @Date: 2023-03-22 16:17:26
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 19:19:45
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/views/logic-flow/nodes/control/RqView/RqtjNode.vue
-->
<template>
  <div class="control-node">
    <div class="node-header">Group控制器 <img class="del-icon" :src="delIcon" @click="delNode" /></div>
    <div class="node-wrapper"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import delIcon from '../../../images/delete.png'

const times = ref(7)
const emit = defineEmits(['delNode'])

const delNode = () => {
  emit('delNode', times.value as number)
}
</script>

<style lang="less" scoped>
@import url('../control.less');
</style>
