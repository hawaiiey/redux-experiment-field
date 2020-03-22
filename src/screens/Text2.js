/**
 * 被 connect 包裹的组件做了 PureComponent 优化
 * 所以，无论上层 Consumer 组件有没有做优化，该组件也会对 props 做浅比较优化
 */
import React, { PureComponent } from 'react'

export default class Text2 extends PureComponent {
  render () {
    console.log('Text', 2, 'update')

    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
