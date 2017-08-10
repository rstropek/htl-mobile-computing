# Demo: Concept of Babel

## Introduction

This example should demonstrate the concept of [*babel*](https://babeljs.io/).

## Step by Step

1. Create an empty folder and `cd` into it.

1. Initialize NPM in the new folder: `npm init`

1. [Install *babel*](https://babeljs.io/docs/setup/#installation) and [*Env preset*](https://babeljs.io/docs/plugins/preset-env) using NPM: `npm install babel-cli babel-preset-env --save-dev`

1. Create the file `.babelrc` with the following content. 

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["explorer >= 8"]
      }
    }]
  ]
}
```

1. Note the [*browserslist*](https://github.com/ai/browserslist) browser query `explorer >= 8`. Try the query interactively in [*browserl.ist*](http://browserl.ist/).

1. Add a `build` script to `package.json`:

```
...
"scripts": {
  "build": "babel src.js --out-file dest.js"
},
...
```

1. Run babel with `npm run build` and compare the source file `src.js` with the generated file `dest.js`. Note the fundamental changes that *babel* had to make to your code to make it compatible with IE 8.

1. Change the browser query in `.babelrc` to `chrome >= 58`.

1. Run babel again and compare the source file `src.js` with the generated file `dest.js`. Note how similar the code is because of the recent Chrome version.
