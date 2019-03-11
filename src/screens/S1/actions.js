import { createActions } from 'redux-actions'
import { ADD, REDUCE } from './constants'

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

const { add, reduce } = createActions({
  [ADD]: (payload = 1) => payload,
  [REDUCE]: (payload = 1) => payload,
})

export {
  add,
  reduce,
}
