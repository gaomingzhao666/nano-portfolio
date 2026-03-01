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
    ❤️ A modern, open-source portfolio template for developers that can automatically import GitHub profile and repository information, built with the Nuxt ecosystem ❤️
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
  <summary>Directory</summary>
  <ul>
    <li><a href="#project-introduction">Project Introduction</a> </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#runtime-requirements">Runtime Requirements</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#how-to-use-this-project-for-your-own-case">How to Use This Project for Your Own Case</a></li>
    <li><a href="#seo-solution">SEO Solution</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</details>

## Project Introduction

<p align="center">
    <img src="/public/SCREENSHOT/index-mockup.png">
    <img src="/public/SCREENSHOT/new-about-mockup.png">
</p>

> The images above show the home page at medium size. [Click here](https://github.com/gaomingzhao666/nano-portfolio/tree/main/public/SCREENSHOT) to view more screenshots.

Nano Portfolio is a developer portfolio web application integrated with GitHub Octokit and the Nuxt 3 ecosystem. It includes modules such as `Nuxt-UI`, `Nuxt-Mongoose`, `Pinia`, and `i18n`. All modules are officially compatible with Nuxt 3, and all code in this project uses the Composition API and ESM.

## Built With

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- Localization with i18n
- Email integration with Resend
- TypeScript with ES6+ syntax
- Dockerfile

## Runtime Requirements

- NodeJS LTS 24 or above

## Installation

### Clone and Run - recommend

Clone this repository and move to the project folder.

```sh
$ git clone https://github.com/gaomingzhao666/nano-portfolio.git # clone
$ cd nano-portfolio
```

Install dependencies and run the project with your preferred package manager.

```sh
# pnpm - recommend
$ pnpm install # install dependencies
$ pnpm dev # run
```

```sh
# npm - Node default package manager
$ npm install # install dependencies
$ npm run dev # run
```

```sh
# yarn
$ yarn # install dependencies
$ yarn run dev # run
```

### Use Docker

1. Clone or download this project.
2. Ensure you have `Docker Desktop` installed on your computer.
3. Install the `Docker extension` in your `VScode`.
4. Right-click the `Dockerfile` in this project and select the `Build Image` option.
5. Open `Docker Desktop` and run the container.

## How to Use This Project for Your Case

### Overview

You can use this project to create your own portfolio. It automatically imports information from your GitHub repositories and your profile using your GitHub account.

### Quick Start

- [Generate a GitHub Personal Access Token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- Navigate to the `githubInfo.ts` file located in the `utils` folder within the `server` directory
- Replace the placeholder token with your own `Personal Access Token` to enable server-side APIs to return your GitHub information
- Update the data on the `About` and `Contact` pages with appropriate information
- Have fun and enjoy customizing your portfolio

> For security, use an environment variable instead of placing a plain token in a `.ts` file that might be pushed to a public repository.

## SEO Solution

### Custom Configuration

The `@nuxtjs/seo` module is used to improve SEO performance in this project. You can configure it in the `nuxt.config.ts` file with some information about your site.

Here is an example of SEO configuration code in `nuxt.config.ts`:

```ts
// see https://nuxtseo.com/
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
    // Tell Google not to index /test and /error pages
    disallow: ['/test', '/error'],
  },
  ogImage: {
    enabled: false,
  },
```

See this [documentation](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules) if you want to see a complete guide.

### I18n for Each Page

Everything is ready out of the box. You can configure SEO metadata for each page in the `/src/i18n/seo/` folder and modify it based on your needs.

## Contributor

This project is developed by gaomingzhao666@Nano.

## LICENSE

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases
