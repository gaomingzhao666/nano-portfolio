[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<br />
<div align="center">
  <a href="https://github.com/gaomingzhao666/nano-portfolio">
    <img src="/public/favicon.ico" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Nano Portfolio</h3>

  <p align="center">
    ❤️ 由 Nuxt3 生态全栈开发，可自动导入 Github 数据的开发者作品集网站 ❤️
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<details open>
  <summary>目录</summary>
  <ul>
    <li><a href="#项目介绍">项目介绍</a> </li>
    <li><a href="#技术栈">技术栈</a></li>
    <li><a href="#运行时版本">运行时版本</a></li>
    <li><a href="#如何启动此项目">如何使用此项目</a></li>
    <li><a href="#如何使用此项目并为您所用">如何集成项目</a></li>
    <li><a href="#关于-cors-报错">关于 CORS 报错</a></li>
    <li><a href="#贡献者">贡献者</a></li>
    <li><a href="#开源协议">开源协议</a></li>
  </ul>
</details>

## 项目介绍

<p align="center">
    <img src="/public/SCREENSHOT/index-mockup.png">
    <img src="/public/SCREENSHOT/new-about-mockup.png">
</p>

> 上方是中等大小的主页截图, [点击此处](https://github.com/gaomingzhao666/nano-portfolio/tree/main/public/SCREENSHOT) 可查看更多详细截图。

Nano-portfolio 是一个与 Github Octokit 和 Nuxt3 生态结合的开发者个人简介网页应用，其使用的大部分依赖被官方所支持和维护，其中包括 `Nuxt-UI` `Nuxt-Mongoose` `Pinia` `i18n` 等。所有模块均与 Nuxt3 所兼容，库内所有代码均使用组合式 API 以及 ESM 进行模块导入。

## 技术栈

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- Localize with i18n
- Email connection with Resend
- Typescript with ES6+ syntax
- Dockerfile

## 运行时版本

- NodeJS LTS 20 以上版本

## 安装

我们提供了两种方法来安装并运行此项目，请任选其一

### 克隆并运行此项目 - 推荐方法

克隆此代码仓库并移动至项目文件夹

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # 克隆
$ cd nano-portfolio
```

根据你设备上安装的包管理器安装依赖并运行此项目

```sh
# pnpm - 推荐
$ pnpm install # 安装依赖
$ pnpm dev # 运行
```

```sh
# npm - Node 默认包管理器
$ npm install # 安装依赖
$ pnpm run dev # 运行
```

```sh
# yarn
$ yarn # 安装依赖
$ yarn run dev # 运行
```

### 使用 docker 制作容器

1. 克隆或者下载此项目.
2. 确保电脑中已安装 `Docker Desktop`.
3. Install the `Docker extension` in your `VScode`.
4. 右击 `Dockerfile` 并选择 `Build Image` 选项.
5. 打开 `Docker Desktop` 启动此容器.

## 如何使用此项目并自定义

### 总览

此项目使用 MIT 开源协议发布， 它可以基于 GitHub 账户自动导入仓库信息和个人资料。

### 步骤

- [生成 GitHub Personal Access Token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
- 前往 于 `server` 目录下 `utils` 文件夹中的 `githubInfo.ts` 文件
- 使用此前生成的 `Personal Access Token` 替代原有 Token， 这可以使得后端制作的 API 可以正确识别新 Token 下的 Github 账户
- 更新 `About` 和 `Contact` 页面组件的数据
- 大功告成

> 勿将 token 上传至公开仓库，而是使用环境变量替代。

## SEO 解决方案

### 自定义配置

```ts
// 参考 https://nuxtseo.com/
  site: {
    title: 'Nano Portfolio',
    url: 'https://nano-portfolio-ruby.vercel.app',
  },

  schemaOrg: {
    identity: 'Person',
  },

  seo: {
    meta: {
      description:
        'A modern and open-source developers portfolio template that can automatically import Github profile and repository information, made by Vue/Nuxt ecosystem and Octokit APIs',
      themeColor: [
        { content: '#111827', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],

      colorScheme: 'dark light',
    },
  },

  robots: {
    // 告知Google.com不要索引/test和/error 页面
    disallow: ['/test', '/error'],
  },
  ogImage: {
    enabled: false,
  },
```

请参阅此[文档](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)以获取完整指南。

### 各页面的 I18n

一切开箱即用，您可以从 `/src/i18n/seo/` 文件夹中配置各个页面的 SEO 元数据，并根据您的需求进行修改。

## 贡献者

此项目由 gaomingzhao666@Nano 所开发

## 开源协议

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases

```

```
