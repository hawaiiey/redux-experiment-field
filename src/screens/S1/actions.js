import { ADD, REDUCE } from './constants'

export function add(payload) {
  return {
    type: ADD,
    payload,
  }
}

export function reduce(payload) {
  return {
    type: REDUCE,
    payload,
  }
}
