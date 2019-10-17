/**
 * 被 connect 包裹的组件没有做任何优化
 * 但是，由于上层 Consumer 组件做了浅比较优化，则该组件不会做没必要的更新
 */
import React from 'react'

// export default class Text1 extends PureComponent {
//   render () {
//     console.log('Text', 1, 'update')

//     return (
//       <div style={this.props.style}>
//         {this.props.children}
//       </div>
//     )
//   }
// }

export default function Text1(props) {
  console.log('Text', 1, 'update')

  return (
    <div style={props.style}>
      {props.children}
    </div>
  )
}
