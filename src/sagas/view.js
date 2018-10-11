import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { Modal } from 'antd'
import * as Constants from 'actions/constants'

export function* showSaveSaga(action) {
  let modal
  if (action.type === Constants.LOGIN_SUCCESS) {
    const session = yield select(state => state.session)
    modal = yield call(Modal.success, {
      title: 'Login success',
      content: `Welcome ${session.user.name}`,
    })
  }
  if (modal) {
    yield call(delay, 2000)
    yield call(modal.destroy)
  }
}

export function* watchSuccess() {
  yield all([
    takeLatest(Constants.LOGIN_SUCCESS, showSaveSaga),
 ])
}
