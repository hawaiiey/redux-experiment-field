import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { ADD, REDUCE } from './constants'

const initialState = {
  count: 0,
}

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case ADD:
//       return Object.assign({}, state, {
//         count: state.count + action.payload,
//       })
//     case REDUCE:
//       return Object.assign({}, state, {
//         count: state.count - action.payload,
//       })
//     default:
//       return state
//   }
// }

const counter = handleActions({
  [ADD]: (state, action) => ({ count: state.count + action.payload }),
  [REDUCE]: (state, action) => ({ count: state.count - action.payload }),
}, initialState)

export default combineReducers({
  counter,
})
