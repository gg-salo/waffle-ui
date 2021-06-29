import { Layout, Row, Col } from 'antd'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import ErrorBoundary from './ErrorBoundary'

const { Content } = Layout

const BaseContainer = ({ children }) => (
  <Layout>
    <Content css={{ padding: '2rem 20px', minHeight: '100vh' }}>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} xl={{ span: 22, offset: 1 }} xxl={{ span: 22, offset: 1 }}>
          <ErrorBoundary>
            <div css={{ margin: 'auto', maxWidth: '1750px' }}>{children}</div>
          </ErrorBoundary>
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default BaseContainer
