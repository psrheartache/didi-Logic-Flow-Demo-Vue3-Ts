<template>
  <div class="logic-wrapper">
    <div class="edit-box">
      <div class="left-area">
        <icon-left-circle :size="28" style="color: #777; cursor: pointer" />
        <a-input class="ml-20" placeholder="输入活动名称" allow-clear>
          <template #suffix>
            <icon-pen-fill :size="16" />
          </template>
        </a-input>
      </div>
      <div class="right-area">
        <a-button type="primary" shape="round" @click="saveNodesAndEdges">保存</a-button>
        <a-button type="primary" status="success" shape="round" class="ml-20">发布</a-button>
      </div>
    </div>
    <div id="logic-container"></div>
  </div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import { toRaw, ref, onMounted } from 'vue'
import { Message } from '@arco-design/web-vue'
import AutoNodeExtension from './index'

interface nodesParams {
  id: string
  type: string
  x: number
  y: number
  text: object
  properties: object
}

interface edgesParams {
  id: string
  type: string
  sourceNodeId: string
  targetNodeId: string
  startPoint: any
  endPoint: any
  text: any
  pointsList: any
  properties: object
}

const lf = ref()
const currentNode = ref(null) // 存储当前节点数据

// 存储画布节点
const saveNodesAndEdges = () => {
  const graphRawData = lf.value.getGraphRawData()
  const { nodes, edges } = graphRawData
  window.sessionStorage.setItem('logic-nodes', JSON.stringify(nodes))
  window.sessionStorage.setItem('logic-edges', JSON.stringify(edges))
}

// 连线逻辑判断
const linkJudge = (current: nodesParams) => {
  window.console.log(current)
  const faNode = lf.value.getNodeIncomingNode(current?.id) // 获取所有父级节点
  window.console.log(faNode)
}

onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector('#logic-container') as HTMLElement,
    grid: true,
    snapline: true,
    history: true,
    plugins: [AutoNodeExtension],
  })

  let lfRaw = toRaw(lf.value)

  // 保存节点数据加载
  const renderNodes = JSON.parse(window.sessionStorage.getItem('logic-nodes') as string) || []
  const renderEdges = JSON.parse(window.sessionStorage.getItem('logic-edges') as string) || []

  // 画布数据渲染
  lfRaw.renderRawData({
    nodes: renderNodes,
    edges: renderEdges,
  })

  // 全局绑定节点点击事件
  lf.value.on('node:click', ({ data }: { data: any }) => {
    window.console.log(data)
    currentNode.value = data
  })

  // 连接线样式处理
  lf.value.on(
    'anchor:drop',
    ({ data, e, nodeModel, edgeModel }: { data: any; e: any; nodeModel: any; edgeModel: any }) => {
      const { type } = data
      // console.log(edgeModel.edgeText)

      edgeModel.setProperties({
        type,
      })

      if (type === 'yes') {
        // edgeModel.updateText('是')
        edgeModel.text.value = '是'
      }
      if (type === 'no') {
        edgeModel.updateText('否')
      }
    }
  )

  // 禁止连接报错提示
  lf.value.on('connection:not-allowed', ({ data, msg }: { data: any; msg: string }) => {
    if (msg) {
      Message.error({
        content: msg,
        duration: 3 * 1000,
      })
    }
  })

  // Node节点拖拽监听事件
  lf.value.on('node:drop', ({ data, e }: { data: any; e: string }) => {
    lfRaw = toRaw(lf.value)
  })
})
</script>

<style lang="less">
.ml-20 {
  margin-left: 20px;
}
.lf-line-text {
  width: 36px !important;
  height: 36px !important;
  stroke: #e5e6eb;
  stroke-width: 1px;
  rect {
    width: 36px !important;
    height: 36px !important;
    transform: translate(14px, -9px);
  }
}
.logic-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .edit-box {
    height: 64px;
    width: 100%;
    // background-color: #f7f7f8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-area {
      display: flex;
      align-items: center;
    }
    .right-area {
    }
  }
  #logic-container {
    width: 100%;
    height: calc(100% - 64px);
  }
}
</style>
