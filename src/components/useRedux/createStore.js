import React, { createContext, useReducer, useContext } from 'react'

const StateContext = createContext(null)
let dispatch = null

export function createStore(reducer) {
  function ReduxProvider ({ children, initValue }) {
    const _initState = reducer(initValue, '@@INIT__')
    const [_state, _dispatch] = useReducer(reducer, _initState)

    // 赋值 dispatch
    dispatch = _dispatch

    return (
      <StateContext.Provider value={_state}>
        {children}
      </StateContext.Provider>
    )
  }

  return {
    ReduxProvider,
    useStore,
  }
}

export function useStore() {
  const contextState = useContext(StateContext)

  return [
    contextState,
    dispatch,
  ]
}