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
    ❤️ A modern and open-source developers portfolio template that can automatically import Github profile and repository information, made by Nuxt ecosystem ❤️
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
    <li><a href="#introduction-of-project">Introduction of Project</a> </li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#runtime-requirement">Runtime Requirement</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#how-to-use-this-project-for-your-case">How to use this project for your case</a></li>
    <li><a href="#seo-solution">SEO Solution</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">LICENSE</a></li>
  </ul>
</details>

## Introduction of Project

<p align="center">
    <img src="/SCREENSHOT/index-mockup.png">
    <img src="/SCREENSHOT/new-about-mockup.png">
</p>

> The image shown here is a home page for md-size, [click here](https://github.com/gaomingzhao666/nano-portfolio/tree/main/SCREENSHOT) to see more detailed screenshot for this application.

Nano-portfolio is a developer introduction web application integrated with Github Octokit and Nuxt3 ecosystem that includes `Nuxt-UI` `Nuxt-Mongoose` `Pinia` `i18n` etc. All of the modules are officially compatible with Nuxt3, and all of the code inside of this project uses composition API and ESM.

## Build With

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

## Runtime Requirement

- NodeJS LTS 20+

## Installation

### Clone and Run - recommend

Clone this repository and transit to the project folder

```sh
$ git clone https://github.com/gaomingzhao666/nano-portfolio.git # clone
$ cd nano-portfolio
```

Install dependencies and run this project depends on your package manager

```sh
# pnpm - recommend
$ pnpm install # install dependencies
$ pnpm dev # run
```

```sh
# npm - Node default package manager
$ npm install # install dependencies
$ pnpm run dev # run
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
    // tell Google.com do not indexing /test and /error pages
    disallow: ['/test', '/error'],
  },
  ogImage: {
    enabled: false,
  },
```

See this [documentation](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules) if you want to see a complete guide.

### I18n for each pages

Everything is out of box, you can configure the SEO metadata for each pages from the `/src/i18n/seo/` folder, and modify depends on your demand.

## Contributor

The project developed by gaomingzhao666@Nano

## LICENSE

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases
