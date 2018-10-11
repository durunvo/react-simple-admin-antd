import React, { PureComponent } from 'react'
import { Row, Col, Icon } from 'antd'
import style from './style.scss'

export default class SaveOverlay extends PureComponent {

  render() {
    const { title, visible } = this.props
    if (!visible) return <div />

    return (
      <div className={`${style.container}`}>
        <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
          <Col>
            <Row type="flex" justify="center" style={{ marginTop: -40 }}>
              <Icon type="check-circle-o" style={{ fontSize: 40, color: 'green' }} />
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: 20 }}>
              <span style={{ fontSize: 20, color: 'green' }}>{title}</span>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
