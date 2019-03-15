import { combineReducers } from 'redux'
import s1Reducer from './S1/reducers'

export default combineReducers({
  s1: s1Reducer,
})
