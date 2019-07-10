import React, { Component } from 'react'

export default class Text1 extends Component {
  // shouldComponentUpdate return false无法阻止组件update
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
