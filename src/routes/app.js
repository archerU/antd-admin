import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import {Layout} from 'antd';
import { withRouter,Link } from 'dva/router';
import styles from './app.less';
const { Header, Content, Footer, Sider } = Layout;

const App = ({children, dispatch, app, loading, location }) => {

  return (
    <div>
      <Layout className={styles.layout}>
        <Sider>
          <div className={styles.logo}><Link to="/">Antd-admin</Link></div>
        </Sider>
        <Layout>
          <Header></Header>
          <Content className={styles.content}>
            {children}
          </Content>
          <Footer className={styles.footer}> &copy; 2018 Antd-admin</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
