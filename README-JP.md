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
    💖 Nuxt3 エコシステムを使用したフルスタック開発による開発者個人プロフィールアプリケーション 💖
    <br />
    <br />
    <a href="https://github.com/CreamR/nano-portfolio/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/CreamR/nano-portfolio/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/CreamR/nano-portfolio/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>索引</summary>
  <ul>
    <li><a href="#プロジェクトの概要">プロジェクトの概要</a> </li>
    <li><a href="#技術の使いの方">技術の選択</a></li>
    <li><a href="#環境要件">環境要件</a></li>
    <li><a href="#用法">使い方</a></li>
    <li><a href="#貢獻者">貢獻者</a></li>
    <li><a href="#CORSエラーに関して">CORSエラーに関して</a></li>
    <li><a href="#オープンソース契約">オープンソース契約</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## プロジェクトの概要

<!-- IMAGE OF PROJECT -->

<p align="center">
    <img src="/SCREENSHOT/desktop/about.png">
</p>

> この写真はパソコンサイに基づいた about ページ, [こちらへ](https://github.com/gaomingzhao666/nano-portfolio/tree/main/SCREENSHOT) このプロジェクトの写真をご覧ください。

Nano-portfolio は、GitHub Octokit API と Nuxt3 エコシステムを統合した開発者個人プロフィールウェブアプリケーションです。使用されているほとんどのディペンデンシーは公式にサポートされ、メンテナンスされています。これには `Nuxt-UI`、`Nuxt-Mongoose`、`Pinia`、`i18n` などが含まれています。すべてのモジュールは Nuxt と互換性があり、コードはすべてコンポジション API と ESM を使用してモジュールインポートされています。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 技術の選択

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- localize with i18n
- Typescript with ES6+ syntax
- Docker deployment

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

<!-- GETTING STARTED -->

## 環境要件

- NodeJS LTS 20+
<!-- - Chrome67+ / Edge79+ / Safari12+ -->

## 使い方

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # プロジェクトをクローンしてください
$ cd nano-portfolio
$ pnpm install # プロジェクトに必要な依存関係をインストールしてください。
$ pnpm dev # 運行する
```

## CORS エラーに関して

[SSR](https://vuejs.org/guide/scaling-up/ssr.html) プロジェクトとしては, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)　について心配する必要はありませんが, `nuxt.config.ts` ファイルで SSR モードを false に設定すなら [こちら](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) ブラウザ拡張機能をインストールして CORS エラーを解決できます。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 貢獻者

このプロジェクトは gaomingzhao666@Nano に開発しました。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

<!-- LICENSE -->

## 开源协议

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases/tag
