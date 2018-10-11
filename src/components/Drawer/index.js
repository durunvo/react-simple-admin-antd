import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import DrawerMenu from 'rc-drawer-menu'
import SiderMenu from './SiderMenu'
import style from './style.scss'

export default class Drawer extends Component {

  render() {
    const { isMobile, collapsed, onCollapse } = this.props

    return isMobile ? (
      <DrawerMenu
        parent={null}
        level={null}
        iconChild={null}
        open={!collapsed}
        onMaskClick={onCollapse}
        width="228px"
      >
        <SiderMenu {...this.props} collapsed={isMobile ? false : collapsed} />
      </DrawerMenu>
    ) : <SiderMenu {...this.props} collapsed={false}/>
  }
}
