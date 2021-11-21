# 智搭 Vue3 低代码可视化搭建基座

<p align="left">
  <b>基于以下技术构建：</b>
</p>
<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle" width="250">
        <a href="https://www.antdv.com/docs/vue/introduce-cn/" title="Ant Design Vue" target="_blank">
          <img height="60px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi42ICg2NzQ5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+VnVlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI2OS42NDQxMTYlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxNDhFRkYiIG9mZnNldD0iMzcuODYwMDY4NyUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBBNjBGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0xOS44MTkxNTUzJSIgeTE9Ii0zNi43OTMxNDY0JSIgeDI9IjEzOC41NzkxOSUiIHkyPSIxNTcuNjM3NTA3JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjlDREZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRjc4RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVnVlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgOS4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTg5Ljk2LDkwLjQ4IEM3OC41OCw5My40OCA2OC4zMyw4My4zNiA2Ny42Miw4Mi40OCBMNDYuNjYwNDQ4Nyw2Mi4yMjkyMjU4IEM0NS41MDIzODQ5LDYxLjExMDMyMzYgNDQuODQyNjg0NSw1OS41NzI4ODM1IDQ0LjgyOTY5ODcsNTcuOTYyNjM5NiBMNDQuNTAzNTU2NCwxNy41MjA5OTQ4IEM0NC40OTQ4ODYxLDE2LjQ0NTg3NDQgNDQuMDUzNzcxNCwxNS40MTk1MDk1IDQzLjI3OTY4NjQsMTQuNjczMzUxNyBMMjkuNjQ1OTk5OSwxLjUzMTUzNzM3IEMyOC4wNTU0NzUsLTAuMDAxNjA1MDQwMDUgMjUuNTIzMjQyMywwLjA0NDkxMjY1ODggMjMuOTkwMDk5OSwxLjYzNTQzNzU2IEMyMy4yNzE1MTIxLDIuMzgwOTIwNjYgMjIuODcsMy4zNzYwMDgzNCAyMi44Nyw0LjQxMTQzNzQ2IEwyMi44Nyw2NC4zODY0NzUxIEMyMi44Nyw2Ny4wODA3ODkxIDIzLjk1NzIyMzMsNjkuNjYxMTA2NyAyNS44ODU0MDksNzEuNTQyOTc0OCBMNjMuNjAwNDYxNSwxMDguMzUyMDYxIEM2NS45NDY2MzIzLDExMC42NDE4NzMgNjkuNjk2MzU4NCwxMTAuNjI0NjA1IDcyLjAyMTM0MDMsMTA4LjMxMzI4MSIgaWQ9IlBhdGgtQ29weSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni40MTUwMDAsIDU0LjgzMTE1Nykgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNTYuNDE1MDAwLCAtNTQuODMxMTU3KSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY4LDkwLjExNjMxMjIgQzU2LjYyLDkzLjExNjMxMjIgNDUuNDYsODMuMzYgNDQuNzUsODIuNDggTDIzLjc5MDQ0ODcsNjIuMjI5MjI1OCBDMjIuNjMyMzg0OSw2MS4xMTAzMjM2IDIxLjk3MjY4NDUsNTkuNTcyODgzNSAyMS45NTk2OTg3LDU3Ljk2MjYzOTYgTDIxLjYzMzU1NjQsMTcuNTIwOTk0OCBDMjEuNjI0ODg2MSwxNi40NDU4NzQ0IDIxLjE4Mzc3MTQsMTUuNDE5NTA5NSAyMC40MDk2ODY0LDE0LjY3MzM1MTcgTDYuNzc1OTk5OSwxLjUzMTUzNzM3IEM1LjE4NTQ3NSwtMC4wMDE2MDUwNDAwNSAyLjY1MzI0MjMyLDAuMDQ0OTEyNjU4OCAxLjEyMDA5OTkxLDEuNjM1NDM3NTYgQzAuNDAxNTEyMTI1LDIuMzgwOTIwNjYgMy45MDIxMTg3OGUtMTMsMy4zNzYwMDgzNCAzLjkwNzk4NTA1ZS0xMyw0LjQxMTQzNzQ2IEwzLjk0MzUxMjE4ZS0xMyw2NC4zODY0NzUxIEMzLjk0NjgxMTc3ZS0xMyw2Ny4wODA3ODkxIDEuMDg3MjIzMjYsNjkuNjYxMTA2NyAzLjAxNTQwOTAzLDcxLjU0Mjk3NDggTDQwLjc4MDcwOTIsMTA4LjQwMTEwMSBDNDMuMTA2OTMwNCwxMTAuNjcxNDQ0IDQ2LjgxODAxNTEsMTEwLjY3NjUyNSA0OS4xNTA0NDQ1LDEwOC40MTI1NjEiIGlkPSJQYXRoIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQzLjI5ODM0ODgsMTkuMDk5MTkzMSBMMjcuNTU2NjA3OSwzLjg4MjQ2MjQ0IEMyNi43NjI0MjgxLDMuMTE0NzY5NjcgMjYuNzQwOTU2MSwxLjg0ODYyMTc3IDI3LjUwODY0ODgsMS4wNTQ0NDE5NCBDMjcuODg1NDgyNiwwLjY2NDYwNjYxMSAyOC40MDQ0NDM4LDAuNDQ0NDcyNjUxIDI4Ljk0NjYzODYsMC40NDQ0NzI2NTEgTDYwLjM5MjUwMjEsMC40NDQ0NzI2NTEgQzYxLjQ5NzA3MTYsMC40NDQ0NzI2NTEgNjIuMzkyNTAyMSwxLjMzOTkwMzE1IDYyLjM5MjUwMjEsMi40NDQ0NzI2NSBDNjIuMzkyNTAyMSwyLjk4NTgzNzUgNjIuMTczMDM5NiwzLjUwNDA3NzQyIDYxLjc4NDI1MTIsMy44ODA3OTk0MiBMNDYuMDgwMTI4NSwxOS4wOTc1MzAxIEM0NS4zMDUxNTc5LDE5Ljg0ODQ0ODggNDQuMDc0MjE2NywxOS44NDkxODQ3IDQzLjI5ODM0ODgsMTkuMDk5MTkzMSBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" title="Ant Design Vue">
          <p>Ant Design Vue</pp>
        </a>
      </td>
      <td align="center" valign="middle" width="250">
        <a href="https://v3.cn.vuejs.org/" title="Vue3" target="_blank">
          <img height="60px" src="https://v3.cn.vuejs.org/logo.png" title="Vue3">
          <p>Vue 3</p>
        </a>
      </td>
      <td align="center" valign="middle" width="250">
        <a href="https://vitejs.cn/" title="Vite" target="_blank">
          <img height="60px" src="https://vitejs.cn/logo.svg" title="Vite">
          <p>Vite</p>
        </a>
      </td>
    </tr>
  </tbody>
</table>




## 介绍

智搭可视化搭建是基于Vue3编写的低代码平台，配置端使用Ant design Vue编写配置表单表格，项目提供基础的搭建系统结构，开发者可通过二次开发，根据自身企业业务需求，增加组件和其他功能。

- 项目使用Vue实验性语法 <sctipt setup></script>进行编写，其中用到了Vue3的Composition API、Vue Router4、VueX4等，Element组件也使用了Composition API模式下的写法

- 项目基于云货优选低代码平台鲁班(React)进行重写，鲁班经历1年多迭代，为云货生成了超过1000页的活动页面，累计访问UV超过20亿，开源版本使用Vue重写，让中小企业更易接入，降低开发门槛

- 项目能提供H5页面的渲染能力，生成的页面可以用在浏览器/webView，同时开发者也可以通过生成的JSON Schema在小程序端/客户端中编写原生组件，实现端渲染能力

- 项目持续更新，后续为使用NodeJS编写后台服务，提供完整链路给开发者




## 项目准备

你需要先安装 [node](https://nodejs.org/) 和 [Git](https://git-scm.com/) 工具，项目依赖有[vue](https://cn.vuejs.org)、[vue-router](https://router.vuejs.org/zh-cn/)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vite](https://github.com/vitejs/vite)等



## 项目截图

<p align="center">
  <img width="1000" src="https://img.wenhairu.com/images/2021/11/21/1LdXf.jpg"
</p>



## 开始

```bash
# clone the project
git clone https://github.com/RyzenPan/smart-block

# enter the project directory
cd smart-block

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:3000



## 构建

```bash
npm run build
```



## 在线Demo

稍后部署



## 支持我

如果项目对你有帮助，麻烦帮我点个Star就好了，哈哈哈～～～



## 鸣谢

<p>
  <img width="500" src="https://img.wenhairu.com/images/2021/11/21/1Lbyo.gif"
</p>

## License

[MIT]()

Copyright (c) 2021-Present Ryzen

