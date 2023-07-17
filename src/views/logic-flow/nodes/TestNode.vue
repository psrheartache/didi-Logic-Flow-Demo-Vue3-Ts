<template>
  <div class="dmp-node">
    {{ times }}
    <div @click="times += 3">点我</div>
    <div style="margin-top: 20px; color: red" @click.stop="delNode">我是删除按钮</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const times = ref(7)
const emit = defineEmits(['delNode'])

const delNode = () => {
  emit('delNode', times.value as number)
}
</script>

<style lang="less" scoped>
.dmp-node {
  width: 300px;
  height: 300px;
  background-color: #000;
  color: #fff;
}
</style>
