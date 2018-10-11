import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router'
import styles from './style.scss'
import logo from 'assets/images/logo.png'
const { Sider } = Layout
const { SubMenu } = Menu

export default class SiderMenu extends Component {

  state = {
    openKeys: []
  }

  handleOpenChange = (openKeys) => {
    this.setState({ openKeys })
  }

  selectedMenuKey = (pathname) => {
    if (pathname.match(/dashboard/)) return '1'
  }

  render() {
    const { collapsed, location: { pathname }, onCollapse } = this.props;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={228}
        className={styles.sider}
      >
        <div className={styles.logo} key="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.handleOpenChange}
          selectedKeys={[this.selectedMenuKey(pathname)]}
          style={{ padding: '16px 0', width: '100%' }}
        >
          <Menu.Item key="1"><Link to={{ pathname: '/dashboard' }}>Dashboard</Link></Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
