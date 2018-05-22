## Antd Admin

[![Travis](https://img.shields.io/badge/react-%5E16.3.2-blue.svg?style=flat-square)](https://github.com/facebook/react) [![Travis](https://img.shields.io/badge/dva-%5E2.2.3-FC3CA1.svg?style=flat-square)](https://github.com/dvajs/dva) [![Travis](https://img.shields.io/badge/ant--design-%5E3.5.3-blue.svg?style=flat-square)](https://github.com/ant-design/ant-design)


[![Travis](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://opensource.org/licenses/MIT) ![Travis](https://img.shields.io/badge/code%20style-standard-orange.svg?style=flat-square)


演示地址：[]()


## 特性

- 基于 react，ant-design，dva，mock 企业级中后台管理系统最佳实践。
- 基于 dynamic 实现动态路由加载，按需加载
- 基于 roadhog 本地调试和构建
- 自带权限控制模块，不为权限控制烦恼
- 超轻量级的框架，无冗余组件，开封即用

## 开发构建

### 目录结构

```
├── /dist/           # 项目输出目录
├── /mock/         	 # 数据mock
├── /public/         # 公共文件，编译时自动copy至dist目录
├── /src/            # 项目源码目录
│ ├── /components/   # UI组件及UI相关方法
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── router.js       # 路由配置
│ ├── index.js       # 入口文件
| ├── index.less 	 # 入口样式文件
│ └── index.ejs     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .webpackrc.js    # webpack 配置
```

### 命名规范

**组件规范**

1. 页面上的每个独立的可视/可交互区域视为一个组件
2. 每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护
3. 由于组件具有独立性，因此组件与组件之间可以自由组合
4. 页面只不过是组件的容器，负责组合组件形成功能完整的界面
5. 当不需要某个组件，或者想要替换组件时，可以整个目录删除/替换

```
├── Header
│ ├── Header.js
│ ├── Header.less
```

**页面规范**

1. 页面应该是 UI 组件的容器
2. 页面由各个不同组件组装而成

**应用规范**

1. 整个项目或者整个站点称为应用
2. 应用由多个页面组成

### 快速开始

下载

```
git clone git@github.com:archerU/antd-admin.git
```

安装

```
npm i 或 npm install 
```

开发

```
npm start
```

构建

```
npm run build
```

测试

```
npm run lint
```


### 注意事项



## 特别鸣谢

zuiidea: [https://github.com/zuiidea/antd-admin](https://github.com/zuiidea/antd-admin)

sorrycc: [https://github.com/dvajs/dva-example-user-dashboard](https://github.com/dvajs/dva-example-user-dashboard)

fouber: [https://github.com/fouber/blog/issues/10#](https://github.com/fouber/blog/issues/10#)
