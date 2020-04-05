import { take, put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(1000); // 1000ms待つ
  const action = yield take('INCREMENT_ASYNC'); // アクションを待つ
  yield put({ type: 'INCREMENT', value: action.value }); // INCREMENT actionをdispatchする
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync); // INCREMENT_ASYNCアクションを監視し、incrementAsyncを実行する
}
