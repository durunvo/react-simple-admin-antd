import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { setSession } from 'actions/session'
import { isAdmin, logOut } from 'apis/api'
import { getSession } from 'utils/localStorage'
import AppRoot from './AppRoot'
import createStore from 'stores/createStore'
import 'rc-drawer-menu/assets/index.css';

const store = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const doRender = () => {
  render(
    <AppRoot store={store} history={history} />,
    document.getElementById('root'),
  )
}


getSession().then(isAdmin).then(session => {
  if (session) store.dispatch(setSession(session))
}).then(doRender).catch(err => {
  logOut()
  doRender()
})

if (module.hot) {
  module.hot.accept()
}
