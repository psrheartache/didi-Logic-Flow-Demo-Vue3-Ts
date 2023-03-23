/* eslint max-classes-per-file: ["error", 2] */
import { HtmlNode, HtmlNodeModel } from '@logicflow/core'
import { createApp, ref, h, App } from 'vue'
import VueNode from './DmpNode.vue'

class VueHtmlNode extends HtmlNode {
  app: App<Element>

  constructor(props: any) {
    super(props)
    const appRef = ref()
    this.app = createApp({
      render: () => h(VueNode, { ref: appRef }),
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
