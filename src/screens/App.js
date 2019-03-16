import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import reducer from './reducer'
import S1 from './S1'
import RequestComp from './S1/RequestComp'

const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware),
)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <S1 />
        <RequestComp />
      </Provider>
    )
  }
}
