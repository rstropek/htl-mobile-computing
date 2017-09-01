# RESTful Web APIs

Introduction to [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)ful Web APIs


<!-- .slide: class="left" -->
## What is *REST*?

* [*Representational state transfer*](https://en.wikipedia.org/wiki/Representational_state_transfer):
  * Originally for accessing and manipulating textual representations of Web resources using a set of stateless operations
  * Today: More generic, encompassing every entity that can be identified, named, addressed or handled, in any way whatsoever, on the Web
* Architectural pattern, not a standard
  * [Request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response) pattern
* Today, [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)-based RESTful APIs dominate
  * [URLs](https://en.wikipedia.org/wiki/URL) for addressing
  * [JSON](https://en.wikipedia.org/wiki/JSON), sometimes XML for representing data elements
  * Standard [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) aka *verbs* (e.g. *GET*, *PUT*, *POST*, and *DELETE*)
  * Standard [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for representing results
  * [HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) ([standard](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields) or custom) for sending parameters
  * [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) for encrypting [data in-transit](https://en.wikipedia.org/wiki/Data_in_transit)


<!-- .slide: class="left" -->
## Important Tools (Examples)

* API Clients
  * [*Postman*](https://www.getpostman.com/)
  * [*Insomnia*](https://insomnia.rest/)
  * [*REST Client*](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) in *Visual Studio Code*
* Web Debugger
  * [*Fiddler*](http://www.telerik.com/fiddler)
* Post Dumping Services
  * [*requestb.in*](https://requestb.in/)


<!-- .slide: class="left" -->
## Sample Requests

```
<!--#include file="rest-fundamentals/0010-rest-clients/pokeapi.http" -->
```

```
<!--#include file="rest-fundamentals/0010-rest-clients/northwind.http" -->
```
Exercise: Try this sample with different REST clients


<!-- .slide: class="left" -->
## Sample Requests (cont.)

```
<!--#include file="rest-fundamentals/0010-rest-clients/post.http" -->
```
Exercise: Try this sample with different REST clients


<!-- .slide: class="left" -->
## Important REST principles

* Stateless
  * No client context stored on the server
  * Each request is complete
* Cacheable
  * Responses explicitly indicate their cacheability
* Layered System
  * Client cannot tell if connected directly to the server (e.g. reverse proxies)
* URIs
  * Resources are identified using *Uniform Resource Identifiers* (URIs)
* Resource representation
 * *XML*, *JSON*, *Atom* - today mostly JSON


<!-- .slide: class="left" -->
## RESTful Web APIs in the Browser

* Old but still relevant: [*XMLHttpRequest*](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* Newer, but only in modern browsers: [*fetch*](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch)

```
<!--#include file="rest-fundamentals/0020-rest-client/app-promise.js" -->
```


<!-- .slide: class="left" -->
## RESTful Web APIs in the Browser (cont.)

With `async/await`:

```
<!--#include file="rest-fundamentals/0020-rest-client/app.js" -->
```


<!-- .slide: class="left" -->
## RESTful Web APIs in  the Browser (cont.)

With [*jQuery*](http://api.jquery.com/jQuery.get/):

```
<!--#include file="rest-fundamentals/0020-rest-client/app-jquery.js" -->
```


<!-- .slide: class="left" -->
## Building RESTful Web APIs with Node.js

* In practice, frameworks are used for that
* Example: [*Express.js*](http://expressjs.com/)
  * Larger framework, not just for RESTful Web APIs
  * Very commonly used
  * Lots of plugins
* Example: [*restify*](http://restify.com/)
  * Smaller framework specialized on RESTful Web APIs
  * Easy to use
  * Also quite common
  * We will use this framework in this course


<!-- .slide: class="left" -->
## RESTful Web API with [*restify*](http://restify.com/)

```
<!--#include file="rest-fundamentals/0030-restify-basics/app.ts" -->
```

```
<!--#include file="rest-fundamentals/0030-restify-basics/request.http" -->
```


<!-- .slide: class="left" -->
## RESTful Web API with [*restify*](http://restify.com/)

* `server` object
  * Register routes and handlers for incoming requests
  * Created using the `createServer()` method
  * [Documentation](http://restify.com/docs/server-api/)
* `request` object
  * Represents the HTTP request
  * Use it to get headers, parameters, body, etc.
  * [Documentation](http://restify.com/docs/request-api/)
* `response` object
  * Represents the HTTP response
  * Use it to build response (e.g. status, headers, body, etc.)
  * [Documentation](http://restify.com/docs/response-api/)


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples

```
<!--#include file="rest-fundamentals/0040-restify-verbs/app.ts" -->
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
<!--#include file="rest-fundamentals/0040-restify-verbs/data.ts" -->
```

```
<!--#include file="rest-fundamentals/0040-restify-verbs/get-all.ts" -->
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
<!--#include file="rest-fundamentals/0040-restify-verbs/get-single.ts" -->
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
<!--#include file="rest-fundamentals/0040-restify-verbs/post.ts" -->
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
<!--#include file="rest-fundamentals/0040-restify-verbs/delete-single.ts" -->
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Microsoft's REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)
  * [*restify* documentation](http://restify.com/docs/home/)
* Exercises
  * [*CouchDB* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/rest-fundamentals/9010-couch/readme.md)
  * [*RSVP* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/rest-fundamentals/9020-birthday-party/readme.md)
