import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import S1 from './S1'

const store = createStore(reducer)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <S1 />
      </Provider>
    )
  }
}
