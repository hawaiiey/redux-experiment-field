import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'
// import createSagaMiddleware from 'redux-saga'
import { createStore } from '../components/useRedux'
import reducer from './reducer'
// import sagas from './S1/sagas'
import S1 from './S1'
// import S2 from './S2'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware),
// )
// sagaMiddleware.run(sagas)

const { ReduxProvider } = createStore(reducer)

export default class App extends Component {
  render () {
    return (
      // <Provider store={store}>
      //   <Router history={browserHistory}>
      //     <Route path="/s1" component={S1} />
      //     <Route path="/s2" component={S2} />
      //   </Router>
      //   {/* <S1 />
      //   <RequestComp /> */}
      // </Provider>
      <ReduxProvider>
        <Router history={browserHistory}>
          <Route path="/s1" component={S1} />
          {/* <Route path="/s2" component={S2} /> */}
        </Router>
        {/* <S1 />
        <RequestComp /> */}
      </ReduxProvider>
    )
  }
}
