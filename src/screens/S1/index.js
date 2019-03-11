import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { add, reduce } from './actions'

class S1 extends Component {
  render () {
    const {
      s1: { counter: { count } },
      add,
      reduce,
    } = this.props

    return (
      <Fragment>
        <span>{count}</span>
        <br />
        <button onClick={() => add(1)}>+</button>
        <button onClick={() => reduce(1)}>-</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  s1: state.s1,
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(add(payload)),
  reduce: payload => dispatch(reduce(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(S1)
