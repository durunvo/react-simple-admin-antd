import React, { Component } from 'react'
import { connect } from 'react-redux'
import { enquireScreen } from 'enquire-js'
import { replaceToLogin } from 'actions/redirect'
import { logOut } from 'actions/session'
import { Layout, Menu, Icon, Button, Row } from 'antd'
import SaveOverlay from 'components/SaveOverlay'
import Drawer from 'components/Drawer'
import Header from 'components/Header'
import style from './style.scss'
const { Content } = Layout;

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

function mapStateToProps(state) {
  return {
    session: state.session,
    isLoading: state.pages.login.isLoading,
    view: state.view,
  }
}

@connect(mapStateToProps, { replaceToLogin, logOut })
export default class App extends Component {

  constructor(props) {
    super(props)
    if (!props.session.user) {
      props.replaceToLogin()
    }
  }

  state = {
    isMobile,
    collapsed: false
  }

  componentDidMount() {
    enquireScreen(isMobile => {
      this.setState({ isMobile });
    })
  }

  onCollapse = () => {
    this.setState({ collapsed: true })
  }

  render() {
    const { collapsed, isMobile } = this.state
    const { view, logOut } = this.props

    return (
      <Layout>
        <SaveOverlay visible={view.showSave} title={view.title}/>
        <Drawer
          {...this.props}
          collapsed={collapsed}
          isMobile={isMobile}
          onCollapse={this.onCollapse}
        />
        <Layout className={style.layout}>
          <Header
            isMobile={isMobile}
            collapsed={collapsed}
            toggle={() => this.setState({ collapsed: !collapsed })}
            logOut={logOut}
          />
          <Content className={style.content}>
            <div>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
