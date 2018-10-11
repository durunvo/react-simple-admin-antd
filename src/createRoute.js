import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from 'containers/App'

import DashboardPage from 'containers/DashboardPage'

import LoginPage from 'containers/LoginPage'
import ErrorPage from 'containers/ErrorPage'

export default (store) => {
  return (
    <div>

      <Route path="/" component={App} >
        <IndexRedirect to="/dashboard" />
        <Route path="dashboard" component={DashboardPage} />
      </Route>
      <Route path="login" component={LoginPage} />
      <Route path="error" component={ErrorPage} />
    </div>
  )
}
