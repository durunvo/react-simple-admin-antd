import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createRoute from 'createRoute'

export default class AppRoot extends Component {

  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router
          onUpdate={() => window.scrollTo(0, 0)}
          history={history}
        >
          {createRoute(store)}
        </Router>
      </Provider>
    )
  }
}
