# template from another project, perpetually editing

<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![Apache2.0 License][license-shield]][license-url]
[![Release][release-shield]][release-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CreamR/Spotify-Web-Player">
    <img src="/public/logo.svg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Spotify - Web Player</h3>

  <p align="center">
    🎵 Online music platform developed base on Spotify UI 🎵
    <br />
    <br />
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README.md">简体中文</a>
     <strong> · </strong>
    <a href="https://github.com/CreamR/Spotify-Web-Player/blob/master/README-EN.md">English</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Directory</summary>
  <ul>
    <li><a href="#Introduction of Project">Introduction of Project</a> </li>
    <li><a href="#Build With">Build With</a></li>
    <li><a href="#Environment Requirement">Environment Requirement</a></li>
    <li><a href="#Installation and Usage - Server">Installation and Usage - Server</a></li>
    <li><a href="#Installation and Usage - Frontend">Installation and Usage - Frontend</a></li>
    <li><a href="#Resolve CORS Problem">Resolve CORS Problem</a></li>
    <li><a href="#Contributor">Contributor</a></li>
    <li><a href="#UI Design Reference">UI design Reference</a></li>
    <li><a href="#LICENSE">LICENSE</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## Introduction of Project

<!-- 项目图片部分 -->

Spotify - Web Player is a Online music platform developed base on Spotify UI, developed used by Vue3 with composition API usage and Element-Plus.
BackEnd section depended on CloudMusic(Chinese Version)，Contrast by CloudMusic , Spotify - Web Player drop out the useless and complicated modules to improve performance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Build With

- Vue3 with composition API
- Vue-router
- Pinia
- Vite
- Less
- Element-plus
- ES6+
- Fetch

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Environment Requirement

- NodeJS 16+
- Chrome67+ / Edge79+ / Safari12+, or equivalent version of browser base on Webkit API
- appropriate for PC or laptop

## Installation and Usage - Server

```sh
$ # clone the project
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
$ cd NeteaseCloudMusicApi
$ node app.js
```

## Installation and Usage - Frontend

```sh
$ # clone the project
$ git clone https://github.com/CreamR/Spotify-Web-Player.git
$ # install dependencies and run it
$ # recommend pnpm as a package manager that more faster than npm and the grammar is similar with npm
$ pnpm install
$ pnpm run dev
```

## Resolve CORS Problem

##### As a default, Because the CORS access has been not activate, Probably cannot use this project or there is no data has been be loaded, There is several methods to resolve that problem

- use browser extension
- set CORS access when send request in front end section
- set CORS access when code interface in back end section
- use builder such as webpack/vite etc

##### We use the first method as an instance

Recommend [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) extension, Activate it when the setup done, Of course you can chose another extension or method to resolve that problem

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UI Design Reference

[YouTube](https://www.youtube.com)
[Spotify](https://www.spotify.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributor

The project developed by Gmz@creamR，There is the backEnd section support - [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## LICENSE

[Apache License 2.0](https://github.com/CreamR/Spotify-Web-Player/blob/master/LICENSE)

CreamR/Spotify-Web-Player is licensed under the Apache License 2.0. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[stars-shield]: https://img.shields.io/github/stars/creamR/Spotify-Web-Player?style=for-the-badge
[stars-url]: https://github.com/CreamR/Spotify-Web-Player/stargazers
[license-shield]: https://img.shields.io/hexpm/l/apa?style=for-the-badge
[license-url]: https://github.com/CreamR/Spotify-Web-Player/blob/master/LICENSE
[release-shield]: https://img.shields.io/github/v/release/creamR/spotify-web-player?style=for-the-badge
[release-url]: https://github.com/CreamR/Spotify-Web-Player/releases/tag