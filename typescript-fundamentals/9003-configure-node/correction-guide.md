# Correction Guide Question 1

## Mandatory Requirements

* *package.json* exists
  * *dependencies*: *restify*
  * *devDependencies*:*@types/restify*, *typescript*
  * *scripts* entries exist and work:
    * *build*: `tsc`
    * *start*: `node server.js`
* *tsconfig.json* exists
  * *target*: `ES2015`
* *.gitignore* exists
  * `node_modules`
* Dummy TypeScript file exists (e.g. `server.ts`) with `console.log` statement

## Optional Requirements

* *package.json* script *watch*: `tsc --watch`
* File structure
  * *src* folder with TypeScript file
  * *outDir* in *tsconfig.json* set to *dist*
  * *dist* included in *.gitignore*
* Cleanup
  * Node package like *trash-cli*
  * *package.json* script *clean*: `trash dist`
