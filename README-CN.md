<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/gaomingzhao666/nano-portfolio">
    <img src="/public/favicon.ico" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Nano Portfolio</h3>

  <p align="center">
    💖 由 Nuxt3 生态全栈开发的开发者个人简介应用 💖
    <br />
    <br />
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
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

<!-- ABOUT THE PROJECT -->

## 项目介绍

<!-- IMAGE OF PROJECT -->

<p align="center">
    <img src="/SCREENSHOT/about-mockup.png">
</p>

> 上方是 平板 设备尺寸的 about 页面截图, [点击此处](https://github.com/gaomingzhao666/nano-portfolio/tree/main/SCREENSHOT) 可查看更多详细截图。

Nano-portfolio 是一个与 Github Octokit 和 Nuxt3 生态结合的开发者个人简介网页应用，其使用的大部分依赖被官方所支持和维护，其中包括 `Nuxt-UI` `Nuxt-Mongoose` `Pinia` `i18n` 等。所有模块均与 Nuxt 所兼容，库内所有代码均使用组合式 API 以及 ESM 进行模块导入。

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

## 技术栈

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- localize with i18n
- Typescript with ES6+ syntax
- Dockerfile

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

<!-- GETTING STARTED -->

## 运行时版本

- NodeJS LTS 20+
<!-- - Chrome67+ / Edge79+ / Safari12+ -->

## 如何启动此项目

### 克隆此项目

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # 克隆此项目
$ cd nano-portfolio
$ pnpm install # 安装项目所需依赖
$ pnpm dev # 运行
```

### 使用 docker 制作容器

1. 克隆或者下载此项目.
2. 确保电脑中已安装`Docker Desktop`.
3. Install the `Docker extension` in your `VScode`.
4. 右击 `Dockerfile` 并选择 `Build Image` 选项.
5. 打开 `Docker Desktop` 启动此容器.

## 如何使用此项目并为您所用

### 总览

此项目使用 MIT 开源协议发布， 它可以基于 GitHub 账户自动导入仓库信息和个人资料。

### 步骤

- [生成 GitHub Personal Access Token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
- 前往 于 `server` 目录下 `utils` 文件夹中的 `githubInfo.ts` 文件
- 使用此前生成的 `Personal Access Token` 替代原有 Token， 这可以使得后端制作的 API 可以正确识别新 Token 下的 Github 账户
- 更新 `About` 和 `Contact` 页面组件的数据
- 大功告成

## 关于 CORS 报错

作为 [SSR](https://vuejs.org/guide/scaling-up/ssr.html) 项目, 我们无需关心 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), 但若你在 `nuxt.config.ts` 文件中设置 SSR mode 为 false [点击此处](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) 可安装浏览器插件以此解决 CORS 错误。

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

## 贡献者

此项目由 gaomingzhao666@Nano 所开发

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

<!-- LICENSE -->

## 开源协议

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases
