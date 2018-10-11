import React from 'react'
import { Layout, Modal, Icon, Button, Row } from 'antd'
import style from './style.scss'

export default ({ toggle, logOut, collapsed, isMobile }) =>
  <Layout.Header style={{ background: '#fff', padding: 0 }}>
    {
      isMobile && (
        <Icon
          className={style.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      )
    }
    <Row className={style.right}>
      <Button
        onClick={
          () => Modal.confirm({
            title: 'Logout ?',
            onOk() {
              logOut()
            },
            onCancel() {},
          })
        }
      >Logout</Button>
    </Row>
  </Layout.Header>
