# Simple Caesar Cipher

## Introduction

In this exercise you have to implement a simple [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) in a Node.js command line program.

## Requirements

### CLI (*Command Line Interface*)

Write a command line tool with the following CLI:

`node caesar-cipher.js [-e | -d] -k key`

* `-e` means *encrypt*, `-d` means *decrypt*. These options are mutually exclusive. Specifying both is invalid.
* The *key* specified with the argument `-k` must be a number between 1 and 25.
* If the command line is invalid...
  * ...write the following error message to `stderr`: *Invalid arguments, usage: node caesar-cipher.js [-e | -d] -k key*
  * ...exit the program with exit code `-1`
* If the command line is valid, perform the requested operation and exit the program with exit code `0`

### Encryption and Decryption

* The program reads all available lines from `stdin` and encrypts them character by character.
* Write the result to `stdout`.
* Rules for encrypting characters:
  * Characters *a*-*z* and *A*-*Z* must be encrypted/decrypted
  * All other characters (including but not limited to numbers, spaces, special characters) remain unchanged

## Hints

* Make yourself familiar with the concept of a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* Try encrypting and decrypting with a sample word with pen and paper to make sure you have a good understanding of the concept of the *Caesar cipher*
* Important JavaScript and Node.js members:
  * [*String.charCodeAt*](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
  * [*String.fromCharCode*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
  * [*process.argv*](https://nodejs.org/api/process.html#process_process_argv)
  * [*process.exit*](https://nodejs.org/api/process.html#process_process_exit_code)
  * Example for [reading a text file line-by-line](https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line)

## Test Cases

* The following CLI calls must lead to an error:
  * `node caesar-cipher.js`
  * `node caesar-cipher.js -e`
  * `node caesar-cipher.js -e -k`
  * `node caesar-cipher.js -e -k 23 -x`
  * `node caesar-cipher.js -e -d -k 23`
* The text *Hello World!* becomes *Ebiil Tloia!* when encrypted with key 23 (test both encryption and decryption)
* The text *THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG* becomes *QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD* when encrypted with key 23 (test both encryption and decryption)

## Advanced Exercises

* Make sure your source code is [*Lint*](https://en.wikipedia.org/wiki/Lint_(software)) warning free by [checking it online](http://eslint.org/demo/). Make sure to set the following *rule configuration*:
  * ECMA Version *6*
  * Environment *node*
* Create an enhanced version of your tool so that is can not only encrypt/decrypt text files but binary files

## Solution

You can find a sample solution (deliberately without comments) in [*caesar-cipher.js*](caesar-cipher.js). However, before you take a look at it, try to find your own solution!
