# *TypeScript* Quiz


## Introduction

In this exercise, you have to setup a project for compiling a TypeScript program. You will get a ready-made website that can be used to search music tracks on [Deezer](https://www.deezer.com/). It uses [Deezer's free, public music search API](https://developers.deezer.com/api/search). The provided website consists of the following parts:

* HTML in [index.html](index.html)
* CSS in [index.css](index.css)
* TypeScript in [index.ts](index.ts)

Before you start with the exercise, make yourself familiar with the provided code and the concepts used there. The TypeScript code contains lots of comments and links to further information.


## Specification

1. Create a `package.json` file for the project.

1. Create a TypeScript configuration file `tsconfig.json` for the project. It has to at least contain the following compiler options:
    1. `module`: `commonjs`
    1. `target`: `es2015` (experiment with different target versions if you like)

1. Add the TypeScript compiler as a *development dependency* to `package.json`.

1. Add a *script* to `package.json` so that the program can be compiled using `npm run build`.

1. Make sure the TypeScript code can successfully be compiled into JavaScript.


## Try the Program with a Local Proxy

If you want to try the program, you have to run a *local proxy* for the Deezer API. We will discuss in the lecture why this is necessary (if you are curious: It has to do with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)). In order to run the local proxy, you have to perform the following two steps:

1. `npm install cors-anywhere --save-dev`

1. `node cors-proxy.js` (keep this program running in the background while trying the website)


## Hints

1. `package.json` can be created with `npm init`

1. `tsconfig.json` can be created with `tsc --init`


## Advanced Exercise

Do you want an advanced challenge? Try splitting up the single TypeScript file into two files. One should encapsulate the communication with the Web API, the other one should focus on UI-related topics (e.g. handle button click, build DOM, etc.).
