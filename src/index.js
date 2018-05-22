import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import router from './router';
import {message} from "antd";
import './index.less';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError (error) {
     message.error(error.message)
   },
});

// 2. Router
app.router(router);

// 3. Start
app.start('#root');

export default app._store; // eslint-disable-line
