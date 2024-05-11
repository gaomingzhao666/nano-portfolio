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
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>目录</summary>
  <ul>
    <li><a href="#项目介绍">项目介绍</a> </li>
    <li><a href="#技术栈">Build With</a></li>
    <li><a href="#环境需要">环境需要</a></li>
    <li><a href="#用法">用法</a></li>
    <li><a href="#贡献者">贡献者</a></li>
    <li><a href="#开源协议">开源协议</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## 项目介绍

<!-- IMAGE OF PROJECT -->

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
- Docker deployment

<p align="right">(<a href="#readme-top">至顶层</a>)</p>

<!-- GETTING STARTED -->

## 环境需要

- NodeJS LTS 20+
<!-- - Chrome67+ / Edge79+ / Safari12+ -->

## 用法

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # 克隆此项目
$ cd nano-portfolio
$ pnpm install # 安装项目所需依赖
$ pnpm dev # 运行
```

## 关于 CORS 错误

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
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases/tag
