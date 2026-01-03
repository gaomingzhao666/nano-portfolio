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
    ❤️ NuxtエコシステムとGithub APIによって開発され、Githubプロフィールとリポジトリデータを自動的にインポートできる開発者ポートフォリオ ❤️
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

> ここに表示されている画像は中等サイズのホームページです。詳細なスクリーンショットは[こちら](https://github.com/gaomingzhao666/nano-portfolio/tree/main/public/SCREENSHOT)をクリックしてください。

Nano-portfolio は、Github Octokit と Nuxt3 エコシステムを統合した開発者作品集ウェブアプリケーションで、`Nuxt-UI`、`Nuxt-Mongoose`、`Pinia`、`i18n`などを含まれています。すべてのモジュールは Nuxt3 と公式に互換性があり、このプロジェクト内のすべてのコードはコンポジション API と ESM を使用しています。

## 技術スタック

- コンポジション API を使用した Nuxt3
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- Mongoose を使用した MongoDB データベース
- i18n によるローカライズ
- Resend を使用したメール接続
- ES6 以上の文法を使用した Typescript
- Dockerfile

## 環境要件

- NodeJS LTS 24 または以上のバージョン

## インストール

このプロジェクトは二つの方法を提供されていました、その一つを選んでください

### クローンと実行 - おすすめ

まずはこのプロジェクトのコード、またはレポジトリーをクローンする

```sh
$ git clone https://github.com/gaomingzhao666/nano-portfolio.git # クローン
$ cd nano-portfolio
```

そしてあなたのパッケージマネージャーを次第にインストールと運行してください

```sh
# pnpm の場合 - おすすめ
$ pnpm install # 依存関係をインストール
$ pnpm dev # 実行
```

```sh
# npm の場合 - Node のデフォルトパッケージマネージャー
$ npm install # 依存関係をインストール
$ pnpm run dev # 実行
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

## このプロジェクトを自分のケースで使用する方法

### オーバービュー

このプロジェクトを使用して、自分のポートフォリオを作成できます。GitHub アカウントを使用して、GitHub リポジトリとプロフィールから情報を自動的にインポートします。

### スタート

- [GitHub パーソナルアクセストークンを生成](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- `server` ディレクトリ内の`utils`フォルダにある `githubInfo.ts` ファイルに移動します
- プレースホルダートークンを自分の`パーソナルアクセストークン`に置き換えて、サーバーサイド API が GitHub 情報を返すようにします
- `About` および `Contact` ページのデータをあなたの情報に更新します
- を楽しみに～

> ステップ 2 では、トークンを `.ts` ファイルに置くではなく、代わりに環境変数を使用し、公開リポジトリにプッシュできなくように危険を回避してください。

## SEO ソリューション

### カスタム設定

このプロジェクトの SEO パフォーマンスを向上させるために `@nuxtjs/seo` モジュールを使用しています。`nuxt.config.ts` をアクセスして、自分次第でウェブサイトに関する情報も設定できます。

`nuxt.config.ts` ファイルでの SEO 設定コードの例は下のコードをご覧ください:

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

完全なガイドを参照したい場合は、この[ドキュメント](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)をアクセスしてください。

### 各ページの I18n

すべてがすぐに使える状態で提供されており、`/src/i18n/seo/` フォルダから各ページの SEO データを設定し、需要に応じて変えることができます。

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
