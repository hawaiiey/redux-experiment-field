import React from 'react'
import { useStore } from '../../components/useRedux'

export default function Test() {
  const [state] = useStore(({ test }) => test)
  // const { test } = state;
  console.log('test render!!!', state)
  return (
    <div>{state}</div>
  )
}
