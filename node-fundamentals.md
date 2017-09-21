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
for (let i = 0; i < 10; i++) {
  console.log(`${i + 1}: Hello World!`);
}
```
* Run it with: `node app.js`
* Note [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


<!-- .slide: class="left" -->
## I/O with [*Console*](https://nodejs.org/api/console.html) and [*Readline*](https://nodejs.org/api/readline.html)

```
// Read more about `console` at https://nodejs.org/api/console.html
console.log('This is a log message');
console.info('This is an info message');
console.error('This is an error message');

// Read more abour `readline` at https://nodejs.org/api/readline.html
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Please enter your name: ', function(answer) {
  console.log(`Hi ${answer}`);
  rl.close();
});
```
* Note how callback is used to process input from `stdin`
* Run this program with `node app.js`
* Try `node app.js 2> /dev/null` (`NUL` on Windows)
* Try `echo Rainer | node app.js`


<!-- .slide: class="left" -->
## Basic Web API

```
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api')) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify({foo: 'bar', answer: 42}));
    res.end();
  } else {
    res.statusCode = 404;
    res.write('Sorry, don\'t know what you mean...');
    res.end();
  }
});

const port = 8000;
console.log(`Listening on port ${port}...`);
server.listen(port);
```
More about core module [*http*](https://nodejs.org/api/modules.html#modules_core_modules)


<!-- .slide: class="left" -->
## Excursus: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```
const numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(newNumbers.join(', '));

// Note removing of `function` keyword
newNumbers = numbers.map((number) => {
  return number * number;
});
console.log(newNumbers.join(', '));

// Note removing of `return` keyword
newNumbers = numbers.map(number => number * number);
console.log(newNumbers.join(', '));
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
// Use file name from command line or `greetings.txt` if no arguments were specified
const fileName = process.argv[2] || 'greeting.txt'; // Note *coalesce* operation

// Open the file for reading
const fs = require('fs');
fs.open(fileName, 'r', (err, fd) => {
  if (err) {
    console.log(`Error while opening ${fileName}: ${err.message}`);
  } else {
    // Allocate a buffer and read content of file into it.
    const buffer = new Buffer(1024);
    fs.read(fd, buffer, 0, 1024, 0, (err, bytesRead, buffer) => {
      if (err) {
        console.log(`Error: ${err.message}`);
      } else {
        console.log(`Read ${bytesRead} bytes: ${buffer.toString('utf8', 0, bytesRead)}`);
      }
    });
  }
});
```
More about core modules [*fs*](https://nodejs.org/api/fs.html) and [*process*](https://nodejs.org/api/process.html)


<!-- .slide: class="left" -->
## Excursus: [*truthy*](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [*falsy*](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

What is the output of this program?
```
const x = false;
if (!x) console.log('x is falsy');

const y = 0;
if (!y) console.log('y is falsy');

const s1 = 'Hello World';
if (!s1) console.log('s1 is falsy');

const s2 = '';
if (!s2) console.log('s2 is falsy');

console.log(`This expression is ${!!!s2}`);
```


<!-- .slide: class="left" -->
## [Timers and Intervals](https://nodejs.org/api/timers.html) (1/2)

```
console.log('Waiting for three seconds...');
setTimeout(() => {
  console.log('two...')
  setTimeout(() => {
    console.log('one...');
    setTimeout(() => {}, 1000);
  }, 1000);
}, 1000);
```
* Try adding the line `console.log('End of program');` at the end
* Discuss the result


<!-- .slide: class="left" -->
## [Timers and Intervals](https://nodejs.org/api/timers.html) (2/2)

```
let counter = 2;
console.log('Waiting for three seconds...');
const timer = setInterval(() => {
  switch (counter) {
    case 2:
      console.log('two...');
      break;
    case 1:
      console.log('one...');
      break;
    default:
      clearInterval(timer);
  }
  counter--;
}, 1000);
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
exports.square = x => x * x;
exports.double = x => x * 2;
exports.abs = x => {
    if (x < 0) return x * (-1);
    return x;
};
exports.demoModuleWrapper = () => {
    console.log(__filename);
    console.log(__dirname);
}
```
`app.js`:
```
const math = require('./math');
console.log(math.square(2));
math.demoModuleWrapper();
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
