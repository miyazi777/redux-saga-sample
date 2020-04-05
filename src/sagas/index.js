import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(500); // 500ms待つ
  yield put({ type: 'INCREMENT' }); // INCREMENT actionをdispatchする
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync); // INCREMENT_ASYNCアクションを監視し、incrementAsyncを実行する
}
