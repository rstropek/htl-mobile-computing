# Websockets

Introduction to [Websockets](https://en.wikipedia.org/wiki/WebSocket)


<!-- .slide: class="left" -->
## Why Websockets?

* Need for bidirectional communication between client and web server
* HTTP not designed for it
  * Two TCP connections for each client (send/receive)
  * High overhead
* Non-HTTP protocols do not benefit from existing infrastructure<br/>
  (e.g. proxies, filtering, authentication)


<!-- .slide: class="left" -->
## What are Websockets?

* Bidirectional communication over ports 80 or 443
* Handshake
  * Initiated with regular HTTP GET sent by client
  * Server responds with HTTP status code 101 (*Switching Protocols*)
* After successful handshake, client and server exchange *messages*
  * Text
  * Binary
* Closing handshake closes Websockets connection
* Browsers have built-in [Websockets JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* Many server libraries for Node.js (e.g. [Socket.io](https://socket.io), [ws](https://github.com/websockets/ws))


<!-- .slide: class="left" -->
## Initial Handshake

![Initial Handshake in Chrome Dev Tools](images/websockets-init-get.png)

* Note support for debugging Websockets in browsers' dev tools


<!-- .slide: class="left" -->
## Websockets Messages

![WS Mesages in Chrome Dev Tools](images/websockets-messages.png)


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Websockets Browser API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
  * [Websockets RFC 6455](https://tools.ietf.org/html/rfc6455)
* Exercises
  * [*Chat* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/websockets/9010-chat/readme.md)
