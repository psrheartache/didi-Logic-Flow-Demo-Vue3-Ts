<template>
  <div class="dmp-atuo-collapse">
    <div class="collapse-item">
      <div class="collapse-item-name">人群</div>
      <div class="collapse-item-group">
        <div
          v-for="(userItem, userIdx) in userNodes"
          :key="`user-item-${userIdx}`"
          class="collapse-item-group-item"
          @mousedown="startDrag(userItem)"
        >
          <div class="img-wrapper green">
            <img class="icon" :src="userItem.icon" />
          </div>
          <p>{{ userItem.text }}</p>
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
import DmpIcon from '../images/user/dmp.png'
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
  const { lf } = props
  lf.dnd.startDrag({
    type: item.type,
    text: item.text,
  })
}

const userNodes = ref([
  {
    id: 'dmp_node',
    type: 'vue-html',
    text: '人群',
    icon: DmpIcon,
  },
])

const channelNodes = ref([
  {
    id: 'dx_node',
    type: 'vue-html',
    text: '短信',
    icon: DxIcon,
  },
  {
    id: 'hd_node',
    type: 'vue-html',
    text: '活动',
    icon: HdIcon,
  },
  {
    id: 'gg_node',
    type: 'vue-html',
    text: '广告位',
    icon: GgIcon,
  },
])

const controlNodes = ref([
  {
    id: 'rqtj_node',
    type: 'vue-html',
    text: '人群条件',
    icon: RqIcon,
  },
  {
    id: 'sjtj_node',
    type: 'vue-html',
    text: '事件条件',
    icon: SjIcon,
  },
  {
    id: 'dmp_node',
    type: 'vue-html',
    text: '目标条件',
    icon: MbIcon,
  },
])
</script>

<style lang="less" scoped>
.dmp-atuo-collapse {
  position: absolute; // 设置定位即可拖拽，不用冲突内置库样式。
  top: 0;
  left: 0;
  width: 150px;
  height: 85vh;
  margin-top: 10px;
  border-radius: 7px;
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
        margin-bottom: 15px;
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
