# TypeScript Fundamentals

Introduction to the [TypeScript](http://www.typescriptlang.org/) Language


<!-- .slide: class="left" -->
## Why TypeScript?

* JavaScript is great because of its reach
  * JavaScript is everywhere
* JavaScript is great because of available libraries
  * For server and client
* JavaScript (sometimes) sucks because of missing types
  * Limited editor support (IntelliSense, refactoring)
  * Runtime errors instead of compile-time errors
> Our wish: Productivity of robustness of typed languages like C# or Java with reach of JavaScript


<!-- .slide: class="left" -->
## What is TypeScript?

* Superset of JavaScript
  * Valid JavaScript is (mostly) valid TypeScript
  * TypeScript defines add-ons to ECMAScript (primarily type information)
* Existing JavaScript code works perfectly with TypeScript
  * TypeScript compiles into JavaScript
  * Use it where you can use JavaScript
  * Compile-time error checking base on type information
* Generated code follows usual JavaScript patterns (e.g. pseudo-classes)
  * Built-in transpiler similar to [*babel*](https://babeljs.io/)
* Great tool support
  * e.g. [Visual Studio Code](https://code.visualstudio.com)


<!-- .slide: class="left" -->
## Type Fundamentals

```
let n: number;      // typed variable
let a;              // no type -> any
const s = "Max";    // contextual typing -> string

n = 5;              // valid because 5 is a number
a = 5;              // valid because a is of type any
a = "Hello";        // valid because a is of type any
n = "Hello";        // compile time error because  "Hello" is not a number
```

* Try it in [TypeScript Playground](http://www.typescriptlang.org/play/index.html)
  * Try code navigation (right-click)
  * Try IntelliSense


<!-- .slide: class="left" -->
## Type Fundamentals (cont.)

* Types are used during editing and compiling
  * No type information in resulting JavaScript code
* Contextual Typing: Determine result type from expressions automatically
* Copy the following code into [TypeScript Playground](http://www.typescriptlang.org/play/index.html)
  * Watch the transpiler work
  * Try IntelliSense

```
class Person {
    get firstName(): string { return "Tom"; }

    async doSomethingAsync(): Promise<number> {
        const result: number = await Promise.resolve(42);
        return result;
    }

    doSometing(callback: (result: number) => void) { callback(42); }
}

const p = new Person();
p.doSometing(result => console.log(result));
```


<!-- .slide: class="left" -->
## Basic Types

* TypeScript Handbook: [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
* Important basic types:
  * `boolean`, `number`, `string`, `array`, `tuple`
  * `enum` = [enumerations](http://www.typescriptlang.org/docs/handbook/enums.html)
  * `any` = type not known at compile time
  * `void` = no type at all
* Type assertions
* Advanced topics (not in scope for exams):
  * `never`

> Important rule: Forget `var`, always use [`const` or `let`](http://www.typescriptlang.org/docs/handbook/variable-declarations.html)


<!-- .slide: class="left" -->
## Interfaces

* TypeScript Handbook: [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)
* Works differently compared to many other languages like C#
* "Duck Typing" aka *Structural Subtyping*
* Interfaces can *extend* each other
* Advanced topics (not in scope for exams):
  * Function types, indexable types, class types, hybrid types


<!-- .slide: class="left" -->
## Classes

* TypeScript Handbook: [Classes](http://www.typescriptlang.org/docs/handbook/classes.html)
* Constructors
* Accessibility of members: `public`, `private`, `protected`
* Static members vs. instance members
* Inheritance
* Abstract classes
* `readonly` properties
* Accessors


<!-- .slide: class="left" -->
## Functions

* TypeScript Handbook: [Functions](http://www.typescriptlang.org/docs/handbook/functions.html)
* `function` keyword vs. arrow functions
* Type inferrence
* Parameters (required, optional, default parameters)
* Advanced topics (not in scope for exams):
  * Rest parameters, details of `this`, overloads


<!-- .slide: class="left" -->
## Generics

* TypeScript Handbook: [Generics](http://www.typescriptlang.org/docs/handbook/generics.html)
* Generic functions
* Generic classes
* Generic interfaces
* Advanced topics (not in scope for exams):
  * Generic Constraints


<!-- .slide: class="left" -->
## `for..of` and `for..in`

* TypeScript Handbook: [Iterators and Generators](http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)
* `for..of` = iterate over iterable object (e.g. array)
* `for..in` = iterate over all keys of an object (see also [*Object.keys()*](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys))


<!-- .slide: class="left" -->
## Modules

* TypeScript Handbook: [Modules](http://www.typescriptlang.org/docs/handbook/modules.html)
* Conceptually similar to ECMAScript modules
* `export`/`import`
* Ambient modules
  * [`@types`](https://www.npmjs.com/~types) on NPM
* Advanced topics (not in scope for exams):
  * Code generation for modules, optional module loading


<!-- .slide: class="left" -->
## Advanced Topics

* Not in scope for exams
* Symbols
* Namespaces
* JSX
* Decorators
* Mixins


<!-- .slide: class="left" -->
## Summary: TypeScript Goals

* TypeScript offers you the *reach* of JavaScript
* TypeScript makes you *more productive* (e.g. IntelliSense)
  * Ready for larger projects and larger teams
* TypeScript produces *less runtime errors*
  * Because of compile-time type checking


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Exercises
  * [*Game of Life* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/typescript-fundamentals/9010-game-of-life/readme.md)
