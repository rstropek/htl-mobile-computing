# Websockets Chat

## Introduction

In this exercise, you have to build a chat application using [Websockets](https://en.wikipedia.org/wiki/WebSocket).


## User Requirements

* Implement a website where a user can enter her name and join the chat.
* After entering the chat, the server automatically sends a *welcome* chat message the the new user.
* Whenever a new user enters the chat, all other users are informed (e.g. *Tom joined*).
* If a user sends a message, the message is broadcasted to all users in the chat *including* the sender. The output should include the sender's name and the message (e.g. *Tom: Hello!*).
* If the user leaves the chat (e.g. closing the browser window), all other users are informed (e.g. *Tom left*).


## Technical Requirements

* Write your code in *TypeScript*, JavaScript is not sufficient.


## Hints

* Use [Socket.io](https://socket.io) on the server- and client-side. Before starting to code, read [Socket.io's *getting started* document](https://socket.io/get-started/chat/).
* *Socket.io*'s type definitions are available: [*@types/socket.io*](https://www.npmjs.com/package/@types/socket.io)
* Serve static files (e.g. HTML, client-side JavaScript) using [express.js](http://expressjs.com/en/starter/static-files.html)


## Advanced Exercises

* Format your chat nicely using *Bootstrap* or another CSS framework.


## Solution

You can find a sample solution (deliberately without comments) in [*server.ts*](server.ts), [*main.ts*](public/main.ts) and [*index.html*](public/index.html). However, before you take a look at it, try to find your own solution!
