import React, { Fragment } from 'react'
import { ADD, REDUCE } from './constants'
import { useStore } from '../../components/useRedux'

export default function Count() {
  const [state, dispatch] = useStore(({ s1 }) => s1)
  // const {
  //   s1: { count },
  // } = state;
  console.log('count render!!!', state)
  return (
    <Fragment>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: ADD, payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: REDUCE, payload: 1 })}>-</button>
    </Fragment>
  )
}
