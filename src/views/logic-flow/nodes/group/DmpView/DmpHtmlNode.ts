/*
 * @Author: Yufeng CHEN
 * @Date: 2023-03-22 18:10:42
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 16:49:13
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts-/src/views/crm/logic-flow/flow-crud/nodes/group/DmpView/DmpHtmlNode.ts
 */
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
  setAttributes() {
    this.width = 300
    // this.height = 300
    this.text.value = '' // 清除 text
    this.text.editable = false
    this.properties.belong = 'group'
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
