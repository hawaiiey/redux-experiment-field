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
