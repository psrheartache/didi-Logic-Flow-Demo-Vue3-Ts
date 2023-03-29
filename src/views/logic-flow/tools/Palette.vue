<!--
 * @Author: Yufeng CHEN
 * @Date: 2023-03-22 18:10:42
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 19:23:17
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/views/logic-flow/tools/Palette.vue
-->
<template>
  <div class="dmp-atuo-collapse">
    <div class="collapse-item">
      <div class="collapse-item-name">人群</div>
      <div class="collapse-item-group">
        <div
          v-for="(groupItem, groupIdx) in groupNodes"
          :key="`group-item-${groupIdx}`"
          class="collapse-item-group-item"
          @mousedown="startDrag(groupItem)"
        >
          <div class="img-wrapper green">
            <img class="icon" :src="groupItem.icon" />
          </div>
          <p>{{ groupItem.text }}</p>
        </div>
      </div>
    </div>
    <div class="collapse-item">
      <div class="collapse-item-name">通道</div>
      <div class="collapse-item-group">
        <div
          v-for="(channelItem, channelIdx) in channelNodes"
          :key="`channel-item-${channelIdx}`"
          class="collapse-item-group-item"
          @mousedown="startDrag(channelItem)"
        >
          <div class="img-wrapper blue">
            <img class="icon" :src="channelItem.icon" />
          </div>
          <p>{{ channelItem.text }}</p>
        </div>
      </div>
    </div>
    <div class="collapse-item">
      <div class="collapse-item-name">控制器</div>
      <div class="collapse-item-group">
        <div
          v-for="(controlItem, controlIdx) in controlNodes"
          :key="`control-item-${controlIdx}`"
          class="collapse-item-group-item"
          @mousedown="startDrag(controlItem)"
        >
          <div class="img-wrapper orange">
            <img class="icon" :src="controlItem.icon" />
          </div>
          <p>{{ controlItem.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogicFlow from '@logicflow/core'
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import DmpIcon from '../images/group/dmp.png'
import DxIcon from '../images/channel/dx.png'
import HdIcon from '../images/channel/hd.png'
import GgIcon from '../images/channel/gg.png'
import RqIcon from '../images/control/rqtj.png'
import SjIcon from '../images/control/sjtj.png'
import MbIcon from '../images/control/mbtj.png'

const props = defineProps({
  lf: {
    type: LogicFlow,
    required: true,
  },
})

const startDrag = (item: any) => {
  let isAddFlag = true
  const { lf } = props
  const nodes = lf?.graphModel?.nodes || []
  if (nodes?.length) {
    nodes.forEach((ele: any) => {
      if (ele?.properties?.belong === 'group' && item?.belong === 'group') {
        Message.error({
          content: '不能重复创建群体',
          duration: 3 * 1000,
        })
        isAddFlag = false // 不进行此次拖拽渲染
        throw Error('人群只能创建一次') // 终止循坏
      }
    })
    // isAddFlag = true
  } else if (item?.belong !== 'group') {
    Message.error({
      content: '必须先创建人群',
      duration: 3 * 1000,
    })
    isAddFlag = false // 不进行此次拖拽渲染
  }

  if (isAddFlag) {
    lf.dnd.startDrag({
      type: item.type,
      text: item.text,
    })
  }
}

const groupNodes = ref([
  {
    id: 'dmp-node-01',
    type: 'dmp-node',
    belong: 'group',
    text: '请先拽我',
    icon: DmpIcon,
  },
])

const channelNodes = ref([
  {
    id: 'dx-node-01',
    type: 'dx-node',
    belong: 'channel',
    text: '控制器1',
    icon: DxIcon,
  },
  {
    id: 'hd_node',
    type: 'vue-html',
    text: '控制器2',
    icon: HdIcon,
  },
  {
    id: 'gg_node',
    type: 'vue-html',
    text: '控制器3',
    icon: GgIcon,
  },
])

const controlNodes = ref([
  {
    id: 'rqtj-node-01',
    type: 'rqtj-node',
    belong: 'control',
    text: '控制条件1',
    icon: RqIcon,
  },
  {
    id: 'sjtj_node',
    type: 'vue-html',
    text: '控制条件2',
    icon: SjIcon,
  },
  {
    id: 'dmp_node',
    type: 'vue-html',
    text: '控制条件3',
    icon: MbIcon,
  },
])
</script>

<style lang="less" scoped>
.dmp-atuo-collapse {
  width: 150px;
  height: 85vh;
  margin-top: 10px;
  border-radius: 7px;
  position: absolute; // 设置定位即可拖拽，不用冲突内置库样式。
  z-index: 999; // .lf-tool-overlay 默认style: position:absolute; z-index:2; pointer-events: none;
  .collapse-item {
    .collapse-item-name {
      text-align: center;
      border-radius: 5px;
      background-color: #f7f7f7;
      height: 40px;
      line-height: 40px;
      color: #333;
    }
    .collapse-item-group {
      box-sizing: border-box;
      padding: 10px 0;
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .collapse-item-group-item {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: move;
        margin-bottom: 10px;
        .img-wrapper {
          width: 36px;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          &.green {
            background-color: #75dfae;
          }
          &.blue {
            background-color: #679bff;
          }
          &.orange {
            background-color: #ffa644;
          }
          img.icon {
            width: 32px;
            height: 32px;
          }
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
