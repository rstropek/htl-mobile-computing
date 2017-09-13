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
GET http://pokeapi.co/api/v2/pokemon HTTP/1.1
Accept: application/json

###

GET http://pokeapi.co/api/v2/pokemon/1/ HTTP/1.1
Accept: application/json
```

```
GET http://services.odata.org/V4/Northwind/Northwind.svc/Customers HTTP/1.1
Accept: application/json

###

GET http://services.odata.org/V4/Northwind/Northwind.svc/Customers HTTP/1.1
Accept: application/atom+xml

###

GET http://services.odata.org/V4/Northwind/Northwind.svc/Customers?$filter=Country%20eq%20%27Germany%27 HTTP/1.1
Accept: application/json
```
Exercise: Try this sample with different REST clients


<!-- .slide: class="left" -->
## Sample Requests (cont.)

```
# Create a request bin at https://requestb.in/, then replace
# 1lexbhf1 with your bin id.

POST https://requestb.in/1lexbhf1 HTTP/1.1
Content-Type: application/json

{ "Foo": "Bar", "Answer": 42 }

###

DELETE https://requestb.in/1lexbhf1 HTTP/1.1
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
const pokemonList = document.getElementById('pokemons');

(function() {
fetch('http://pokeapi.co/api/v2/pokemon/').then(response => {
  response.json().then(pokelist => {
    let html = '';
    for (const pokemon of pokelist.results) {
      html += `<li>${pokemon.name}</li>`
    }

    pokemonList.innerHTML = html;
  });
});
})();
```


<!-- .slide: class="left" -->
## RESTful Web APIs in the Browser (cont.)

With `async/await`:

```
const pokemonList = document.getElementById('pokemons');

(async function() {
    const response = await fetch('http://pokeapi.co/api/v2/pokemon/');
    const pokelist = await response.json();

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<li>${pokemon.name}</li>`
    }

    pokemonList.innerHTML = html;
})();
```


<!-- .slide: class="left" -->
## RESTful Web APIs in  the Browser (cont.)

With [*jQuery*](http://api.jquery.com/jQuery.get/):

```
(async function() {
    const pokelist = await $.get('http://pokeapi.co/api/v2/pokemon/');

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<li>${pokemon.name}</li>`
    }

    $('#pokemons')[0].innerHTML = html;
})();
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
import {createServer} from 'restify';

var server = createServer();
server.get('/api/echo/:word', (request, response, next) => {
    response.send({youSent: request.params.word});
    next();
});

const port = 8080;
server.listen(port, function() {
  console.log('API is listening');
});
```

```
GET http://localhost:8080/api/echo/Foo-Bar HTTP/1.1
Accept: application/json
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
import {createServer, plugins} from 'restify';

import {deleteSingle} from './delete-single';
import {getAll} from './get-all';
import {getSingle} from './get-single';
import {post} from './post';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/api/customers', getAll);
server.post('/api/customers', post);
server.get('/api/customers/:id', getSingle);
server.del('/api/customers/:id', deleteSingle);

server.listen(8080, () => console.log('API is listening'));
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
}

export const customers: ICustomer[] = [
  {id: 1, firstName: 'Donald', lastName: 'Duck'},
  {id: 2, firstName: 'Mickey', lastName: 'Mouse'},
  {id: 3, firstName: 'Minnie', lastName: 'Mouse'},
  {id: 4, firstName: 'Scrooge', lastName: 'McDuck'}
];
```

```
import {Request, Response, Next} from 'restify';
import {customers} from './data';

export function getAll(req: Request, res: Response, next: Next): void {
    res.send(customers);
    next();
}
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {customers} from './data';

export function getSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const customer = customers.find(c => c.id === id);
    if (customer) {
      res.send(customer);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
import {CREATED} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError} from 'restify-errors';
import {customers, ICustomer} from './data';

export function post(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    const newCustomerId = parseInt(req.body.id);
    if (!newCustomerId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      const newCustomer: ICustomer = { id: newCustomerId,
        firstName: req.body.firstName, lastName: req.body.lastName };
      customers.push(newCustomer);
      res.send(CREATED, newCustomer, {Location: `${req.path()}/${req.body.id}`});
    }
  }
}
```


<!-- .slide: class="left" -->
## [*restify*](http://restify.com/) Examples (cont.)

```
import {NO_CONTENT} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {customers} from './data';

export function deleteSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const customerIndex = customers.findIndex(c => c.id === id);
    if (customerIndex !== (-1)) {
      customers.splice(customerIndex, 1);
      res.send(NO_CONTENT);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Microsoft's REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)
  * [*restify* documentation](http://restify.com/docs/home/)
* Exercises
  * [*CouchDB* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/rest-fundamentals/9010-couch/readme.md)
  * [*RSVP* exercise](https://github.com/rstropek/htl-mobile-computing/blob/master/rest-fundamentals/9020-birthday-party/readme.md)
