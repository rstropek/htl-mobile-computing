# Node.js Fundamentals

Introduction to [Node.js](https://nodejs.org)


<!-- .slide: class="left" -->
## What is Node.js?

* JavaScript outside of a browser
  * Good [ECMAScript 2015 support](http://node.green/)
* You can build...
  * Console applications
  * Scalable network applications
* Fast and robust
  * Single-threaded ([child processes](https://nodejs.org/api/child_process.html) are possible)
  * [Non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
* Well suited for web development
* Not well suited for CPU-intensive applications


<!-- .slide: class="left" -->
## Working with Node.js

* Install a good editor (e.g. [Visual Studio Code](https://code.visualstudio.com))
* Install [Node.js](https://nodejs.org/en/)
  * *LTS* (long-term support) if stability is very important
  * Current version if you want latest features
* Write code (e.g. `app.js`)
* Run code with `node app.js`

> Note that there are better ways (existing packages on NPM) to implement some features of the following samples. However, we want to learn about Node.js fundamentals, so we use more low-level APIs.


<!-- .slide: class="left" -->
## Basic Console App

```
<!--#include file="node-fundamentals/0010-hello-world-console/app.js" -->
```
* Run it with: `node app.js`
* Note [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


<!-- .slide: class="left" -->
## I/O with [*Console*](https://nodejs.org/api/console.html) and [*Readline*](https://nodejs.org/api/readline.html)

```
<!--#include file="node-fundamentals/0040-console-readline/app.js" -->
```
* Note how callback is used to process input from `stdin`
* Run this program with `node app.js`
* Try `node app.js 2> /dev/null` (`NUL` on Windows)
* Try `echo Rainer | node app.js`


<!-- .slide: class="left" -->
## Basic Web API

```
<!--#include file="node-fundamentals/0020-hello-world-server/app.js" -->
```
More about core module [*http*](https://nodejs.org/api/modules.html#modules_core_modules)


<!-- .slide: class="left" -->
## Excursus: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```
<!--#include file="excursus/0010-arrow-functions/app.js" -->
```


<!-- .slide: class="left" -->
## Excursus: [JSON](http://www.json.org/)

* Lightweight data-interchange format
* Easy to read and write
* Familiar to people knowing C-family of languages
* Implemented in all major programming platforms
  * JavaScript: `JSON.parse` and `JSON.stringify` ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Methods))
  * [Json.NET](http://www.newtonsoft.com/json)
  * [JSON-java](https://github.com/stleary/JSON-java)


<!-- .slide: class="left" -->
## Basic File System Operations

```
<!--#include file="node-fundamentals/0030-file-system/app.js" -->
```
More about core modules [*fs*](https://nodejs.org/api/fs.html) and [*process*](https://nodejs.org/api/process.html)


<!-- .slide: class="left" -->
## Excursus: [*truthy*](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [*falsy*](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

What is the output of this program?
```
<!--#include file="excursus/0020-truthy-falsy/app.js" -->
```


<!-- .slide: class="left" -->
## [Timers and Intervals](https://nodejs.org/api/timers.html) (1/2)

```
<!--#include file="node-fundamentals/0050-timers/timeout.js" -->
```
* Try adding the line `console.log('End of program');` at the end
* Discuss the result


<!-- .slide: class="left" -->
## [Timers and Intervals](https://nodejs.org/api/timers.html) (2/2)

```
<!--#include file="node-fundamentals/0050-timers/interval.js" -->
```


<!-- .slide: class="left" -->
## [Modules](https://nodejs.org/api/modules.html) (1/2)

* In Node.js, each file is a separate module
* Import modules using `require`
* Export members from a module using `exports`
* Use `__filename` to get path and file name of a module
* Use `__dirname` to get path of a module


<!-- .slide: class="left" -->
## [Modules](https://nodejs.org/api/modules.html) (2/2)

`math.js`:
```
<!--#include file="node-fundamentals/0060-modules/math.js" -->
```
`app.js`:
```
<!--#include file="node-fundamentals/0060-modules/app.js" -->
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Node.js built-in API](https://nodejs.org/api/)
  * First two lessons of [*Einf&uuml;hrung in Node.js*](https://vimeo.com/thenativeweb) (German)
* Exercises
  * [*Hello World* tutorial for VSCode + Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_hello-world)
  * [*Caesar Cipher exercise*](https://github.com/rstropek/htl-mobile-computing/blob/master/node-fundamentals/9010-lab-caesar/readme.md)
  * [*Converter* Quiz](https://github.com/rstropek/htl-mobile-computing/tree/master/node-fundamentals/9030-converter)
