import React, { /* Component,  */Fragment } from 'react'
// import { connect } from 'react-redux'
// import { add, reduce } from './actions'
// import { ADD, REDUCE } from './constants'
// import RequestComp from './RequestComp'
// import { useStore } from '../../components/useRedux'
import Count from './Count'
import Test from './Test'

export default function S1() {
  return (
    <Fragment>
      <Count />
      <Test />
      {/* <RequestComp /> */}
    </Fragment>
  )
}

// class S1 extends Component {
//   render () {
//     const {
//       s1: { count },
//       add,
//       reduce,
//     } = this.props

//     return (
//       <Fragment>
//         <span>{count}</span>
//         <br />
//         <button onClick={() => add(1)}>+</button>
//         <button onClick={() => reduce(1)}>-</button>
//         <RequestComp />
//       </Fragment>
//     )
//   }
// }

// const mapStateToProps = (state, routeProps) => {
//   console.log('get route props', routeProps)
//   return {
//     s1: state.s1,
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   add: payload => dispatch(add(payload)),
//   reduce: payload => dispatch(reduce(payload)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(S1)
