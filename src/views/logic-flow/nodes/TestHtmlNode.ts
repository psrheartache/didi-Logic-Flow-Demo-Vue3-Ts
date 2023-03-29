/*
 * @Author: Yufeng CHEN
 * @Date: 2023-03-23 16:41:55
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 19:13:50
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/views/logic-flow/nodes/TestHtmlNode.ts
 */

/* eslint max-classes-per-file: ["error", 2] */
import { HtmlNode, HtmlNodeModel } from '@logicflow/core'
import { createApp, ref, h, App } from 'vue'
import VueNode from './TestNode.vue'

class VueHtmlNode extends HtmlNode {
  app: App<Element>

  constructor(props: any) {
    super(props)
    // graphModel 视图对象， model， 操作节点
    const { graphModel, model } = props
    const r = ref()
    r.value = h(VueNode, {
      properties: props.model.getProperties(),
      text: props.model.inputData,
      onDelNode: (i: any) => {
        // 监听子组件删除事件
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

class VueHtmlNodeModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 300
    this.height = 100
    this.text.editable = false
    this.inputData = this.text.value
  }

  getOutlineStyle() {
    const style = super.getOutlineStyle()
    style.stroke = 'none'
    // style.hover.stroke = 'none'
    return style
  }

  // getDefaultAnchor() {
  //   return []
  // }

  getData() {
    const data = super.getData()
    return data
  }
}

export default {
  type: 'vue-html',
  model: VueHtmlNodeModel,
  view: VueHtmlNode,
}
