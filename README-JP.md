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
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README.md">English</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-CN.md">简体中文</a>
      <strong> · </strong>
    <a href="https://github.com/gaomingzhao666/nano-portfolio/blob/master/README-JP.md">日本語</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>索引</summary>
  <ul>
    <li><a href="#プロジェクトの概要">プロジェクトの概要</a> </li>
    <li><a href="#技術の選択">技術の選択</a></li>
    <li><a href="#環境要件">環境要件</a></li>
    <li><a href="#使い方">使い方</a></li>
    <li><a href="#このプロジェクトを使用してあなたのニーズに合わせる方法">このプロジェクトを使用してあなたのニーズに合わせる方法</a></li>
    <li><a href="#cors-エラーに関して">CORS エラーに関して</a></li>
    <li><a href="#貢獻者">貢獻者</a></li>
    <li><a href="#オープンソース契約">オープンソース契約</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## プロジェクトの概要

<!-- IMAGE OF PROJECT -->

<p align="center">
    <img src="/SCREENSHOT/about-mockup.png">
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
- Dockerfile

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

<!-- GETTING STARTED -->

## 運行時要件

- NodeJS LTS 20+

## 使い方

### このリポジトリをクローンして使う

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # プロジェクトをクローンしてください
$ cd nano-portfolio
$ pnpm install # プロジェクトに必要な依存関係をインストールしてください。
$ pnpm dev # 運行する
```

### Docker を使う、コンテナに作りして使う

1. このプロジェクトをクローンまたはダウンロードしてください。
2. コンピュータに `Docker Desktop` がインストールされていることを確認してください。
3. `VScode` に `Docker extension` をインストールしてください。
4. `Dockerfile` を右クリックし、 `ビルドイメージ` オプションを選択してください。
5. `Docker Desktop` を開いて、コンテナを起動してください。

## このプロジェクトを使用してあなたのニーズに合わせる方法

### 粗筋

このプロジェクトは MIT オープンソースライセンスの下で公開されており、GitHub アカウントに基づいてリポジトリ情報と個人プロファイルを自動的にインポートすることができます。

### ステップ

- [GitHub Personal Access Token を生成する](https://products.groupdocs.app/translation/markdown)。
- `server` ディレクトリ内の `utils` フォルダにある `githubInfo.ts` ファイルに移動してください
- 以前に生成した`Personal Access Token`で既存のトークンを置き換えてください。これにより、バックエンド API が新しいトークンの下での GitHub アカウントを正しく認識することができます
- `About` ページと `Contact` ページのコンポーネントデータを更新してください
- これて終わった

## CORS エラーに関して

[SSR](https://vuejs.org/guide/scaling-up/ssr.html) プロジェクトとしては, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)　について心配する必要はありませんが, `nuxt.config.ts` ファイルで SSR モードを false に設定すなら [こちら](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) ブラウザ拡張機能をインストールして CORS エラーを解決できます。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

## 貢獻者

このプロジェクトは gaomingzhao666@Nano に開発しました。

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

<!-- LICENSE -->

## オープンソース契約

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">トップに戻る</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases
