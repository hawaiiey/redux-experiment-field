import { createActions } from 'redux-actions'
import { ADD, REDUCE, REQUEST_START, REQUEST_SUCCESS, REQUEST_ERROR, REQUEST } from './constants'

// export function add(payload) {
//   return {
//     type: ADD,
//     payload,
//   }
// }

// export function reduce(payload) {
//   return {
//     type: REDUCE,
//     payload,
//   }
// }

const { add, reduce, requestStart, requestSuccess, requestError } = createActions({
  [ADD]: (payload = 1) => payload,
  [REDUCE]: (payload = 1) => payload,
  [REQUEST_START]: payload => ({ startTime: Date.now() }),
  [REQUEST_SUCCESS]: payload => ({ successTime: Date.now(), data: payload }),
  [REQUEST_ERROR]: payload => ({ errorTime: Date.now(), error: payload }),
  // redux-promise
  // [REQUEST]: async payload => {
  //   const res = await fetch('https://api.github.com/')
  //     .then(response => response.json())

  //   return res
  // },
})

// redux-thunk
// const request = payload => dispatch => {
//   dispatch(requestStart(payload))

//   return fetch('https://api.github.com')
//     .then(response => response.json())
//     .then(response => dispatch(requestSuccess(response)))
//     .catch(e => dispatch(requestError(e)))
// }

export {
  add,
  reduce,
  // request,
  requestStart,
  requestSuccess,
  requestError,
}
