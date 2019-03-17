import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './S1/sagas'
import S1 from './S1'
import RequestComp from './S1/RequestComp'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(sagas)

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
