/* eslint max-classes-per-file: ["error", 2] */

import { BezierEdge, BezierEdgeModel } from '@logicflow/core'

const switchLineStroke = (sourceAnchorType: string, isSelected = false) => {
  if (isSelected) {
    return '#ff7f0e'
  }
  if (sourceAnchorType === 'yes') {
    return '#00b42a'
  }
  if (sourceAnchorType === 'no') {
    return '#f53f3f'
  }
  return '#999'
}
class FlowLinkModel extends BezierEdgeModel {
  getTextStyle() {
    const style = super.getTextStyle()
    const { properties } = this
    const textColor = switchLineStroke(properties.type, this.isSelected)
    style.color = textColor
    style.fontSize = 15
    return style
  }

  getEdgeStyle() {
    const style = super.getEdgeStyle()
    const { properties } = this
    const lineColor = switchLineStroke(properties.type, this.isSelected)
    style.strokeWidth = 3
    style.stroke = lineColor // 线条颜色渲染
    return style
  }
}
class FlowLink extends BezierEdge {}

export default {
  type: 'flow-link',
  view: FlowLink,
  model: FlowLinkModel,
}
