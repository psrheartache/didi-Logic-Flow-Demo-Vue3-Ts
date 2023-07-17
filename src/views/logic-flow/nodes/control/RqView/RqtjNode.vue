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
