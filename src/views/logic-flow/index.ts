/*
 * @Author: Yufeng CHEN
 * @Date: 2023-03-29 18:59:13
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2023-03-29 19:15:09
 * @FilePath: /didi-Logic-Flow-Demo-Vue3-Ts/src/views/logic-flow/index.ts
 */
import { createApp, h } from 'vue'
import TestHtmlNode from './nodes/TestHtmlNode'
import DmpHtmlNode from './nodes/group/DmpView/DmpHtmlNode'
import DxHtmlNode from './nodes/channel/DxView/DxHtmlNode'
import RqtjHtmlNode from './nodes/control/RqView/RqtjHtmlNode'
import Palette from './tools/Palette.vue'
import FlowLink from './FlowLink'

class AutoNodeExtension {
  static pluginName = 'AutoNodeExtension'

  constructor({ lf }: { lf: any }) {
    lf.register(TestHtmlNode)
    lf.register(DmpHtmlNode)
    lf.register(DxHtmlNode)
    lf.register(RqtjHtmlNode)
    lf.register(FlowLink)
    lf.setDefaultEdgeType('flow-link')
    ;(this as any).app = createApp(Palette, {
      lf,
    })
    // ;(this as any).app = createApp({
    //   render: () => h(Palette, { lf }),
    // })
  }

  render(lf: any, domOverlay: any) {
    const node = document.createElement('div')
    node.className = 'dmp-palette'
    domOverlay.appendChild(node)
    ;(this as any).app.mount(node)
  }
}

export default AutoNodeExtension
