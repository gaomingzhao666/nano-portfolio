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
    ❤️ Nuxt エコシステムと GitHub API で開発された、GitHub プロフィールとリポジトリ情報を自動的に取り込める開発者向けポートフォリオ ❤️
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
  <summary>目次</summary>
  <ul>
    <li><a href="#プロジェクトの紹介">プロジェクトの紹介</a> </li>
    <li><a href="#技術スタック">技術スタック</a></li>
    <li><a href="#環境要件">環境要件</a></li>
    <li><a href="#インストール">インストール</a></li>
    <li><a href="#このプロジェクトを自分のケースで使用する方法">このプロジェクトを自分のケースで使用する方法</a></li>
    <li><a href="#seo-ソリューション">SEO ソリューション</a></li>
    <li><a href="#誰が作った">誰が作った</a></li>
    <li><a href="#ライセンス">ライセンス</a></li>
  </ul>
</details>

## プロジェクトの紹介

<p align="center">
    <img src="/public/SCREENSHOT/index-mockup.png">
    <img src="/public/SCREENSHOT/new-about-mockup.png">
</p>

> 上の画像は中サイズのホームページ表示です。より詳細なスクリーンショットは[こちら](https://github.com/gaomingzhao666/nano-portfolio/tree/main/public/SCREENSHOT)をご覧ください。

Nano Portfolio は、GitHub Octokit と Nuxt3 エコシステムを組み合わせた開発者向けポートフォリオ Web アプリケーションです。`Nuxt-UI`、`Nuxt-Mongoose`、`Pinia`、`i18n` などを含み、すべてのモジュールは Nuxt3 と公式に互換性があります。プロジェクト内のコードはすべて Composition API と ESM を使用しています。

## 技術スタック

- コンポジション API を使用した Nuxt3
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- Mongoose を使用した MongoDB データベース
- i18n によるローカライズ
- Resend を使用したメール連携
- ES6 以上の文法を使用した TypeScript
- Dockerfile

## 環境要件

- NodeJS LTS 24 以上

## インストール

このプロジェクトは 2 つの実行方法を提供しています。いずれかを選んでください。

### クローンと実行 - おすすめ

まず、このリポジトリをクローンします。

```sh
$ git clone https://github.com/gaomingzhao666/nano-portfolio.git # クローン
$ cd nano-portfolio
```

次に、使用するパッケージマネージャーに応じて依存関係をインストールし、起動します。

```sh
# pnpm の場合 - おすすめ
$ pnpm install # 依存関係をインストール
$ pnpm dev # 実行
```

```sh
# npm の場合 - Node のデフォルトパッケージマネージャー
$ npm install # 依存関係をインストール
$ npm run dev # 実行
```

```sh
# yarn の場合
$ yarn # 依存関係をインストール
$ yarn run dev # 実行
```

### Docker を使用

1. このプロジェクトをクローンまたはダウンロードします。
2. コンピュータに `Docker Desktop` がインストールされていることを確認します。
3. `VScode` に `Docker extension` をインストールします。
4. このプロジェクトの `Dockerfile` を右クリックし、`Build Image` オプションを選択します。
5. `Docker Desktop` を開き、コンテナを実行します。

## このプロジェクトを自分の用途で使う方法

### 概要

このプロジェクトを使用して、自分のポートフォリオを作成できます。GitHub アカウントを使用して、GitHub リポジトリとプロフィールから情報を自動的にインポートします。

### スタート

- [GitHub パーソナルアクセストークンを生成](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- `server` ディレクトリ内の `utils` フォルダにある `githubInfo.ts` ファイルを開きます
- プレースホルダートークンを自分の `パーソナルアクセストークン` に置き換え、サーバーサイド API が GitHub 情報を返せるようにします
- `About` および `Contact` ページのデータをあなたの情報に更新します
- カスタマイズを楽しんでください

> セキュリティのため、トークンを `.ts` ファイルに直接書かず、環境変数を使って公開リポジトリへの漏えいを防いでください。

## SEO ソリューション

### カスタム設定

このプロジェクトでは SEO パフォーマンス向上のために `@nuxtjs/seo` モジュールを使用しています。`nuxt.config.ts` でサイト情報を設定できます。

`nuxt.config.ts` での SEO 設定例は以下のとおりです。

```ts
// 詳細はhttps://nuxtseo.com/
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
    // Google.com に /test と /error ページをインデックスしないように指示します
    disallow: ['/test', '/error'],
  },
  ogImage: {
    enabled: false,
  },
```

完全なガイドは、この[ドキュメント](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)をご確認ください。

### 各ページの I18n

すべてすぐに使える状態で提供されています。`/src/i18n/seo/` フォルダから各ページの SEO データを設定し、必要に応じて変更できます。

## 誰が作った

このプロジェクトは gaomingzhao666@Nano によって開発されました

## ライセンス

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases
