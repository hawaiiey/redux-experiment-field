import { combineReducers } from 'redux'
import { ADD, REDUCE } from './constants'

const initialState = {
  count: 0,
}

function counter(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        count: state.count + action.payload,
      })
    case REDUCE:
      return Object.assign({}, state, {
        count: state.count - action.payload,
      })
    default:
      return state
  }
}

export default combineReducers({
  counter,
})
