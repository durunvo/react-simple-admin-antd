import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    session: state.session,
    dashboard: state.pages.dashboard,
  }
}

@connect(mapStateToProps)
export default class DashboardPage extends PureComponent {

  render() {
    const { session } = this.props

    return (
      <div>
        {
          session.user && `Hello ${session.user.name}`
        }
      </div>
    )
  }
}
