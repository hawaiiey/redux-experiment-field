import React, { Component } from 'react'

export default class Text2 extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    console.log('Text', 2, 'update')

    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
