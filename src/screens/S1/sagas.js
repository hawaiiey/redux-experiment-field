import { call, put, takeEvery, take } from 'redux-saga/effects'
import { ADD, REQUEST_START } from './constants'
import { requestSuccess, requestError, requestStart } from './actions'

function* request(action) {
  try {
    const res = yield call(() => (
      fetch('https://api.github.com/')
        .then(response => response.json())
    ), action.payload)
    yield put(requestSuccess(res))
  } catch (e) {
    yield put(requestError(e))
  }
}

function* sagas() {
  yield takeEvery(REQUEST_START, request)
  // take
  for (let i = 0; i < 3; i += 1) {
    yield take(ADD)
  }
  console.log('press + button', 3 ,'times: reload!!!')
  yield put(requestStart())
}

export default sagas
