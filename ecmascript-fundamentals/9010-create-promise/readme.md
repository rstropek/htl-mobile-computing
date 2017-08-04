# Read Text File with Promise

## Introduction

In this exercise you have to implement an API for reading a text file. In contrast to [Node's built-in `readfile` API](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback), your API should use [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

## Requirements

* Look at the program in [*read-file.js*](read-file.js). It reads a text file and prints out the first characters.
* Write a helper function `readTextFilePromise` that...
  * ...gets the file path as an input parameter
  * ...returns a promise representing the read file operation
* Replace the implementation of the `run` method in *read-file.js* with a call to your new function `readTextFilePromise`
* Consider using `async/await` when calling `readTextFilePromise`

## Solution

You can find a sample solution (deliberately without comments) in [*app.js*](app.js). However, before you take a look at it, try to find your own solution!
