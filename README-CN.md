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
    ❤️ 基于 Nuxt3 生态开发的开源开发者作品集模板，可自动导入 GitHub 资料与仓库数据 ❤️
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
    <li><a href="#安装">安装</a></li>
    <li><a href="#如何使用此项目并自定义">如何使用此项目并自定义</a></li>
    <li><a href="#seo-解决方案">SEO 解决方案</a></li>
    <li><a href="#贡献者">贡献者</a></li>
    <li><a href="#开源协议">开源协议</a></li>
  </ul>
</details>

## 项目介绍

<p align="center">
    <img src="/public/SCREENSHOT/index-mockup.png">
    <img src="/public/SCREENSHOT/new-about-mockup.png">
</p>

> 上图为中等尺寸的首页截图，[点击此处](https://github.com/gaomingzhao666/nano-portfolio/tree/main/public/SCREENSHOT)可查看更多详细截图。

Nano Portfolio 是一个结合 GitHub Octokit 与 Nuxt3 生态的开发者作品集 Web 应用，包含 `Nuxt-UI`、`Nuxt-Mongoose`、`Pinia`、`i18n` 等模块。所有模块均与 Nuxt3 官方兼容，项目中的代码均基于组合式 API 与 ESM 编写。

## 技术栈

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- i18n 本地化
- Resend 邮件服务集成
- TypeScript（ES6+ 语法）
- Dockerfile

## 运行时版本

- NodeJS LTS 24 及以上版本

## 安装

我们提供两种方式来安装并运行本项目，请任选其一。

### 克隆并运行此项目 - 推荐方法

克隆此仓库并进入项目目录。

```sh
$ git clone https://github.com/gaomingzhao666/nano-portfolio.git # 克隆
$ cd nano-portfolio
```

根据你设备上安装的包管理器，安装依赖并运行项目。

```sh
# pnpm - 推荐
$ pnpm install # 安装依赖
$ pnpm dev # 运行
```

```sh
# npm - Node 默认包管理器
$ npm install # 安装依赖
$ npm run dev # 运行
```

```sh
# yarn
$ yarn # 安装依赖
$ yarn run dev # 运行
```

### 使用 Docker 构建容器

1. 克隆或下载此项目。
2. 确保电脑中已安装 `Docker Desktop`。
3. 在 `VS Code` 中安装 `Docker` 扩展。
4. 右键点击项目中的 `Dockerfile`，选择 `Build Image`。
5. 打开 `Docker Desktop` 并运行容器。

## 如何使用此项目并自定义

### 总览

本项目基于 MIT 协议开源发布。它可以基于你的 GitHub 账号自动导入仓库信息与个人资料。

### 步骤

- [生成 GitHub Personal Access Token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- 前往 `server` 目录下 `utils` 文件夹中的 `githubInfo.ts` 文件
- 使用刚刚生成的 `Personal Access Token` 替换占位 Token，使后端 API 能正确返回你账户下的 GitHub 信息
- 更新 `About` 和 `Contact` 页面组件的数据
- 完成

> 请勿将 Token 上传至公开仓库，建议使用环境变量。

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

请参阅此[文档](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)获取完整指南。

### 各页面的 I18n

开箱即用。你可以在 `/src/i18n/seo/` 文件夹中配置各页面的 SEO 元数据，并按需修改。

## 贡献者

本项目由 gaomingzhao666@Nano 开发。

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
