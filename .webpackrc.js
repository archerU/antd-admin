const path = require('path');
const { name, version } = require('./package.json');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  html: {
    template: './src/index.ejs',
  },
  publicPath: process.env.NODE_ENV === 'production' ? `http://localhost/${name}/${version}/` : '/',
};
