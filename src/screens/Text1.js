import React, { useMemo } from 'react'

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
  const renderContent = useMemo(() => {
    console.log('Text', 1, 'update')

    return (
      <div style={props.style}>
        {props.children}
      </div>
    )
  }, [...Object.values(props)])

  return renderContent
}
