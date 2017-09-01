# [RSVP](https://en.wikipedia.org/wiki/RSVP_(invitations)) REST API

## Introduction

In this exercise, you have to build a RESTful Web API that can act as the backend for party invitation apps ([RSVP](https://en.wikipedia.org/wiki/RSVP_(invitations))). To keep it simple, our API only supports a single party. It cannot handle registration to different parties.


## Requirements

* A *GET* request to `http://localhost:8080/parts` returns master data of the party including title, location and date.
  * This API must be open for everybody. No authentication is necessary.
* Apps can register a guest for the party by sending a *POST* request to `http://localhost:8080/register`.
  * This API must be open for everybody. No authentication is necessary.
  * The *JSON* body of the request has to contain data about the guest. It has to include at least first name and last name. If first or last name are missing, the API has to return a *Bad Request* error.
  * The party allows max. 10 guests. If 10 or more guests are already registered, the API has to return an *Unauthorized* error.
* Apps can request a list of registered guests by sending a *GET* request to `http://localhost:8080/guests`.
  * This API must not be open for everybody. It must be protected using *Basic Authentication*. For this simple sample, it is ok to store username and password for a single administrator in the code.
* Registered guests have to be stored on disk. Just storing guests in-memory is not sufficient.


## Hints

* In *Basic Authentication*, the *Authorization* HTTP header has to contain `Basic <userdata>`. `<userdata>` stands for `username:password` encoded in *Base64*.
  * Note that *restify* has a plugin called `authorizationParser` that can be of great help. Look it up in the *restify* documentation and try to use it.
* [*nedb*](https://github.com/louischatriot/nedb) is a simple but powerful embedded database for *Node.js*. TypeScript metadata is available, too ([*@types/nedb*](https://www.npmjs.com/package/@types/nedb)). You can use it to store registration on disk.


## Advanced Exercises

* Extend the sample so that registration to multiple parties are supported.
* Build a web UI (HTML, JavaScript, [*fetch*](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch) API) for registering guests.


## Solution

You can find a sample solution (deliberately without comments) in [*app.ts*](app.ts). However, before you take a look at it, try to find your own solution!
