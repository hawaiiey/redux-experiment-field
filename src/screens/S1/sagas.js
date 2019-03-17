import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_START } from './constants'
import { requestSuccess, requestError } from './actions'

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
}

export default sagas
