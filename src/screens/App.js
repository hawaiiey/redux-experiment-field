import React, { Component } from 'react'
import ThemeProvider from './ThemeProvider'
import ThemeConsumer1 from './ThemeConsumer1'
import ThemeConsumer2 from './ThemeConsumer2'
// import { Router, Route, browserHistory } from 'react-router'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'
// import createSagaMiddleware from 'redux-saga'
// import reducer from './reducer'
// import sagas from './S1/sagas'
// import S1 from './S1'
// import S2 from './S2'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware),
// )
// sagaMiddleware.run(sagas)

export default class App extends Component {
  // render () {
  //   return (
  //     <Provider store={store}>
  //       <Router history={browserHistory}>
  //         <Route path="/s1" component={S1} />
  //         <Route path="/s2" component={S2} />
  //       </Router>
  //       <S1 />
  //       <RequestComp />
  //     </Provider>
  //   )
  // }
  render () {
    return (
      <ThemeProvider>
        <ThemeConsumer1 />
        <ThemeConsumer2 />
      </ThemeProvider>
    )
  }
}
