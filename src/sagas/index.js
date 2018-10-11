import { fork, all } from 'redux-saga/effects';
import * as Session from 'sagas/session'
import * as View from 'sagas/view'

export default function* rootSaga() {
  yield all([
    // Session
    fork(Session.watchLogIn),
    fork(Session.watchLogOut),

    //View
    fork(View.watchSuccess),
  ]);
}
