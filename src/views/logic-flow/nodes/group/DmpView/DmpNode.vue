<template>
  <div class="group-node">
    <div class="node-header">AllGroup <img class="del-icon" :src="delIcon" @click="delNode" /></div>
    <div class="node-wrapper">
      <div>{{ times }}</div>
      <a-button type="primary" @click="visible = true">
        <template #icon>
          <icon-plus-circle />
        </template>
        <template #default>打开编辑页面</template>
      </a-button>
    </div>
    <a-drawer :width="340" :visible="visible" unmount-on-close @ok="handleOk" @cancel="handleCancel">
      <template #title> 编辑 </template>
      <div>你可以在这里进行编辑操作</div>
      <a-input v-model="times" />
    </a-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import delIcon from '../../../images/delete.png'

const times = ref('7')
const visible = ref(false)
const emit = defineEmits(['delNode'])

const delNode = () => {
  emit('delNode', Number(times.value as string))
}

const handleOk = () => {
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}
</script>

<style lang="less" scoped>
@import url('../group.less');
</style>
