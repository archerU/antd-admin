import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import App from './routes/app';

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/error',
      component: () => import('./routes/error'),
    }
  ]

  return (
    <LocaleProvider locale={zh_CN}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/error" />)} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </App>
      </ConnectedRouter>
    </LocaleProvider>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
