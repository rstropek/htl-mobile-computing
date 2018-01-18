# Correction Guide Question 1

## Mandatory Requirements

* *package.json* exists
  * *dependencies*: *jquery*
  * *devDependencies*:*@types/jquery*, *typescript*, *browser-sync*
  * *scripts* entries exist and work:
    * *build*: `tsc`
    * *start*: `browser-sync start --server .`
* *tsconfig.json* exists
  * *target*: `ES2015`
* *.gitignore* exists
  * `node_modules`
* Dummy HTML- and TypeScript file exist (e.g. `index.html`, `index.ts` with `console.log` statement)

## Optional Requirements

* *package.json* script *watch*: `tsc --watch`
* File structure
  * *src* folder with HTML- and TypeScript file
  * *outDir* in *tsconfig.json* set to *dist*
  * *dist* included in *.gitignore*
  * Node package like *cpx*
  * *package.json* script *build*: `cpx ./src/index.html ./dist/ && tsc`
  * *package.json* script *start*: `browsersync start --server dist`
* Cleanup
  * Node package like *trash-cli*
  * *package.json* script *clean*: `trash dist`
