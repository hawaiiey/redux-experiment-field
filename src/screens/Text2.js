import React, { PureComponent } from 'react'

// PureComponent无法阻止组件update
export default class Text1 extends PureComponent {
  render () {
    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
