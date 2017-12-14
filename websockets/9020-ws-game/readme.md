# *Websockets Real-Time Mobile Game* Quiz


## Introduction

This exercise should be a funny way of preparing for our semester exam. It will bring together most of the topics we covered in the first semester. Work on it seriously and you can be sure that you will master the upcoming exam.


## Requirements

You job is to build a simple mobile game for two players. Each player uses her own mobile device. The game has to cover the following, technical aspects:

* The logic is written in *TypeScript*.

* The frontend uses *HTML5 and CSS*.

* The frontend runs in a *mobile browser* (Android and/or iOS)

* The backend uses *Node.js*.

* The communication between frontend and backend uses *HTTP and Websockets*.

* The game stores something (e.g. highscore list) persistently on disk.


## Project Organization

* You check in your code in *GitHub*

* You plan your work using [GitHub Projects](https://help.github.com/articles/about-project-boards/)

* You document your concepts using [GitHub Wikis](https://help.github.com/articles/about-github-wikis/)

**Update your *GitHub* project frequently!** I will monitor your projects and give feedback. In case of question, create a *GitHub issue*.


## Hints

* You don't have an idea for your game? Here are some examples for simple games:
  * [Pong](https://en.wikipedia.org/wiki/Pong)
  * Any kind of simple, 2D space shooter
  * [Connect Four](https://en.wikipedia.org/wiki/Connect_Four)
  * [Battleships](https://en.wikipedia.org/wiki/Battleship_(game))
  * 2-player [Hangman](https://en.wikipedia.org/wiki/Hangman_(game))

* If you want to integrate touch events in your game, read about [touch events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events).

* If you need graphics for your game, consider the following options:
  * *Simple:* Use the DOM (e.g. images, filled `div`s with background color, etc.)
  * *Intermediate:* Use [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) for more advanced graphics (consider using [SnapSVG](http://snapsvg.io/) for working with SVG in TypeScript, see also [SnapSVG examples](http://svg.dabbles.info/))
  * *Complex and powerful*: Do you want to go really deep? Consider using [HTML5 *Canvas*](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) or a gaming engine like [phaser.io](http://phaser.io/)
