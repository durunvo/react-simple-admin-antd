import { call, put, takeLatest, select, fork } from 'redux-saga/effects'
import * as Constants from 'actions/constants'
import { replaceToDashboard, replaceToLogin } from 'actions/redirect'
import * as Api from 'apis/api'


export function* logInSaga(action) {
  try {
    const payload = yield call(Api.login, action.email, action.password)
    yield put({ type: Constants.LOGIN_SUCCESS, payload })
    yield put(replaceToDashboard())
  } catch (err) {
    yield put({ type: Constants.LOGIN_FAILED, err })
  }
}

export function* watchLogIn() {
  yield takeLatest(Constants.LOGIN, logInSaga)
}

export function* logOutSaga() {
  yield call(Api.logOut)
  yield put(replaceToLogin())
}

export function* watchLogOut() {
  yield takeLatest(Constants.LOGOUT, logOutSaga)
}
