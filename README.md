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
    💖 A portfolio of developers made full-stackly by Nuxt3 and the official supported libs form it 💖
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
  <summary>Directory</summary>
  <ul>
    <li><a href="#introduction-of-project">Introduction of Project</a> </li>
    <li><a href="#build-with">Build With</a></li>
    <li><a href="#environment-requirement">Environment Requirement</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">LICENSE</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## Introduction of Project

<!-- IMAGE OF PROJECT -->

<p align="center">
    <img src="/SCREENSHOT/desktop/about.png">
</p>

> The image shown here is a about-page for desktop-size, [click here](https://github.com/gaomingzhao666/nano-portfolio/tree/main/SCREENSHOT) to see more detailed screenshot for this application.

Nano-portfolio is a developer introduction web application integrated with Github Octokit and Nuxt3 ecosystem that includes `Nuxt-UI` ` Nuxt-Mongoose` `Pinia` `i18n` etc. All of the modules are officially compatible with Nuxt3, and all of the code inside of this project uses composition API and ESM.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Build With

- Nuxt3 with composition API
- Pinia
- Vite
- TailwindCSS
- Nuxt-UI
- MongoDB with Mongoose
- localize with i18n
- Typescript with ES6+ syntax
- Docker deployment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Environment Requirement

- NodeJS LTS 20+
<!-- - Chrome67+ / Edge79+ / Safari12+ -->

## Usage

```sh
$ https://github.com/gaomingzhao666/nano-portfolio.git # clone the project
$ cd nano-portfolio
$ pnpm install # install dependencies that this project needs
$ pnpm dev # run
```

## About CORS Problem

As an [SSR](https://vuejs.org/guide/scaling-up/ssr.html) project, we do not need to care about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), but if you prefer to set SSR mode as false in the `nuxt.config.ts` file [click here](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) to install a plugin that can solve the CORS problem.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributor

The project developed by gaomingzhao666@Nano

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## LICENSE

[MIT License](https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/gaomingzhao666/nano-portfolio?style=for-the-badge
[stars-url]: https://github.com/gaomingzhao666/nano-portfolio/stargazers
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/gaomingzhao666/nano-portfolio/blob/main/LICENSE
[release-shield]: https://img.shields.io/github/v/release/gaomingzhao666/nano-portfolio?style=for-the-badge
[release-url]: https://github.com/gaomingzhao666/nano-portfolio/releases/tag
