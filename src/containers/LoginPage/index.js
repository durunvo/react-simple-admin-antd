import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logIn } from 'actions/session'
import { replaceToDashboard } from 'actions/redirect'
import { Layout, message, Form, Icon, Input, Button, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

function mapStateToProps(state) {
  return {
    session: state.session,
    login: state.pages.login,
  }
}

@connect(mapStateToProps, { logIn, replaceToDashboard })
@Form.create()
export default class LoginPage extends PureComponent {

  constructor(props) {
    super(props)
    if (props.session.user) {
      props.replaceToDashboard()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.logIn(values.email, values.password)
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, login } = this.props

    return (
      <Layout>
        <Content>
          <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={22} sm={16} md={10} lg={8}>
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item label="Email">
                  {getFieldDecorator('email', {
                    rules: [{ required: true }],
                  })(
                    <Input size="large"  />,
                  )}
                </Form.Item>
                <Form.Item label="Password">
                  {getFieldDecorator('password', {
                    rules: [{ required: true }],
                  })(
                    <Input size="large" type="password" />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={login.isLoading}
                  >
                    เข้าระบบ
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}
