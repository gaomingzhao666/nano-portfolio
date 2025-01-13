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
    <img src="/SCREENSHOT/index-mockup.png">
    <img src="/SCREENSHOT/new-about-mockup.png">
</p>

> ここに表示されている画像は中等サイズのホームページです。詳細なスクリーンショットは[こちら](https://github.com/gaomingzhao666/nano-portfolio/tree/main/SCREENSHOT)をクリックしてください。

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

- NodeJS LTS 20 以上のバージョン

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
2. コンピュータに`Docker Desktop`がインストールされていることを確認します。
3. `VScode`に`Docker extension`をインストールします。
4. このプロジェクトの`Dockerfile`を右クリックし、`Build Image`オプションを選択します。
5. `Docker Desktop`を開き、コンテナを実行します。

## このプロジェクトを自分のケースで使用する方法

### オーバービュー

このプロジェクトを使用して、自分のポートフォリオを作成できます。GitHub アカウントを使用して、GitHub リポジトリとプロフィールから情報を自動的にインポートします。

### スタート

- [GitHub パーソナルアクセストークンを生成](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- `server`ディレクトリ内の`utils`フォルダにある`githubInfo.ts`ファイルに移動します
- プレースホルダートークンを自分の`パーソナルアクセストークン`に置き換えて、サーバーサイド API が GitHub 情報を返すようにします
- `About`および`Contact`ページのデータをあなたの情報に更新します
- を楽しみに～

## SEO ソリューション

### カスタム設定

このプロジェクトでは、SEO パフォーマンスを向上させるために`@nuxtjs/seo`モジュールを使用しています。`nuxt.config.ts`ファイルでサイトに関する情報を設定できます。

完全なセットアップガイドについては、この[ドキュメント](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)を参照してください。

### `useHead` vs `useSeoMeta` vs `useServerSeoMeta`

公式ドキュメントを参照しているときに、どの SEO コンポーザブルを選択すべきか混乱するかもしれません。

このプロジェクトの場合、SEO メタ情報と共有する必要がある動的、つまりダイナミックなデータがないため、`useServerSeoMeta`コンポーザブルを使用して SEO 情報を設定しています。すなわち、メタ情報はリアクティブである必要がなく、ロボットは初回ロードのみをスキャンするため、パフォーマンスに焦点を当てたユーティリティとして`useServerSeoMeta`を使用することをお勧めします。

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
