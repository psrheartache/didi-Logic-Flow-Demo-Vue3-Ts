import { createApp, h } from 'vue'
import DmpHtmlNode from './nodes/DmpHtmlNode'
import Palette from './tools/Palette.vue'
import FlowLink from './FlowLink'

class DmpNodeExtension {
  static pluginName = 'DmpNodeExtension'

  constructor({ lf }: { lf: any }) {
    lf.register(FlowLink)
    lf.register(DmpHtmlNode)
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

export default DmpNodeExtension
