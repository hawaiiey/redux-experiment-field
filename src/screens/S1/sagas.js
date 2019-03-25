import { call, put, takeEvery, take, fork, cancel } from 'redux-saga/effects'
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
  // yield takeEvery(REQUEST_START, request)

  // take
  // for (let i = 0; i < 3; i += 1) {
  //   yield take(ADD)
  // }
  // console.log('press + button', 3 ,'times: reload!!!')
  // yield put(requestStart())

  // fork
  while (true) {
    const t = yield take(ADD)
    console.log('press + button: ', '无阻塞调用 fork request func start!!!', t)
    const f = yield fork(request, requestStart())
    console.log('无阻塞调用 fork request func end!!!', f)
    yield take(ADD)
    console.log('press + button again!!!')
    yield cancel(f)
    console.log('cancel fork!!!')
  }
}

export default sagas
