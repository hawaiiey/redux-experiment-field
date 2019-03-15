import { handleActions } from 'redux-actions'
import { ADD, REDUCE, REQUEST_START, REQUEST_SUCCESS, REQUEST_ERROR } from './constants'

const initialState = {
  count: 0,
  dataSource: {
    loading: false,
    error: false,
    data: {},
  },
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

const s1Reducer = handleActions({
  [ADD]: (state, action) => Object.assign({}, state, { count: state.count + action.payload }),
  [REDUCE]: (state, action) => Object.assign({}, state, { count: state.count - action.payload }),
  [REQUEST_START]: (state, action) => Object.assign({}, state, { dataSource: { loading: true, error: false, data: {} } }),
  [REQUEST_SUCCESS]: (state, action) => Object.assign({}, state, { dataSource: { loading: false, error: false, data: action.payload.data } }),
  [REQUEST_ERROR]: (state, action) => Object.assign({}, state, { dataSource: { loading: false, error: true, data: {} } }),
}, initialState)

export default s1Reducer
