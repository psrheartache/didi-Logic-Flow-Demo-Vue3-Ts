/* eslint max-classes-per-file: ["error", 2] */
import { HtmlNode, HtmlNodeModel } from '@logicflow/core'
import { createApp, ref, h, App } from 'vue'
import DmpNode from './DmpNode.vue'

class DmpHtmlNode extends HtmlNode {
  app: App<Element>

  constructor(props: any) {
    super(props)
    // graphModel 视图对象， model， 操作节点
    const { graphModel, model } = props
    const r = ref()
    r.value = h(DmpNode, {
      text: props.model.inputData,
      onDelNode: (i: any) => {
        // 监听子组件dom事件
        graphModel.deleteNode(model.id)
      },
    })
    this.app = createApp({
      render: () => r.value,
    })
  }

  setHtml(rootEl: HTMLElement) {
    const node = document.createElement('div')

    rootEl.appendChild(node)
    this.app.mount(node)
  }
}

class DmpHtmlNodeModel extends HtmlNodeModel {
  getTextStyle() {
    const style = super.getTextStyle()
    style.fontSize = 16
    style.color = 'red'
    return style
  }

  getAnchorStyle(anchorInfo: any) {
    const style = super.getAnchorStyle(anchorInfo)
    if (anchorInfo.type === 'no') {
      style.fill = '#f53f3f'
      style.stroke = '#f53f3f'
      style.className = 'no'
    }
    if (anchorInfo.type === 'yes') {
      style.fill = '#00b42a'
      style.stroke = '#00b42a'
      style.className = 'yes'
    }
    style.r = 5
    style.hover.r = 5
    style.fillOpacity = 1
    return style
  }

  // eslint-disable-next-line class-methods-use-this
  getAnchorShape(anchorData: any) {
    const { x, y, type } = anchorData
    return h('rect', {
      x: x - 5,
      y: y - 5,
      width: 10,
      height: 10,
      className: `custom-anchor ${type === 'no' ? 'incomming-anchor' : 'outgoing-anchor'}`,
    })
  }

  getDefaultAnchor() {
    const { width, height, x, y, id } = this
    return [
      {
        x: x + width / 2,
        y: y + height / 4,
        type: 'no',
        edgeAddable: true, // 控制锚点是否可以从此锚点手动创建连线。默认为true。
        id: `${id}_0`,
        text: '132',
      },
      {
        x: x + width / 2,
        y: y - height / 4,
        type: 'yes',
        id: `${id}_1`,
      },
    ]
  }

  getConnectedTargetRules() {
    const rules = super.getConnectedTargetRules()
    const notAsTarget = {
      message: '起始节点不能作为边的终点',
      validate: () => false,
    }
    rules.push(notAsTarget)
    return rules
  }

  setAttributes() {
    this.width = 300
    // this.height = 300
    this.text.value = '' // 清除 text
    this.text.editable = false
    this.properties.belong = 'user'
  }

  getOutlineStyle() {
    const style = super.getOutlineStyle()
    style.stroke = 'none'
    // style.hover.stroke = 'none'
    return style
  }

  getData() {
    const data = super.getData()
    return data
  }
}

export default {
  type: 'dmp-node',
  model: DmpHtmlNodeModel,
  view: DmpHtmlNode,
}
