# OpenID Connect

Introduction to [OpenID Connect](http://openid.net/connect/)

<small>Note for exam: No practical coding examples with OpenID Connect</small>


<!-- .slide: class="left" -->
## What is *OpenID Connect*?

* Authentication protocol
* Based on the [*OAuth 2.0*](https://oauth.net/2/)
* Provides *login* for multiple sites/apps
  * You are *redirected* to your OpenID site where you login
  * After login, you are taken back to the website/app


<!-- .slide: class="left" -->
## Important Terms

* *OAuth/OpenID Provider*
  * Aka OAuth Server, Authorization Server
  * Examples: Google, Twitter, Microsoft AAD, Auth0
* *Resource Provider*
  * Aka Resource Server
  * In our case: A REST Web API
* *Resource Owner*
  * In our case: The end user, the organization
* *Client*
  * Application accessing a protected resource
  * In our case: Native app, server-based web app, SPA, mobile app


<!-- .slide: class="left" -->
## General Protocol Flow

```
+--------+                               +---------------+
|        |--(A)- Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<-(B)-- Authorization Grant ---|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(C)-- Authorization Grant -->| Authorization |
| Client |                               |     Server    |
|        |<-(D)----- Access Token -------|               |
|        |                               +---------------+
|        |
|        |                               +---------------+
|        |--(E)----- Access Token ------>|    Resource   |
|        |                               |     Server    |
|        |<-(F)--- Protected Resource ---|               |
+--------+                               +---------------+
```


<!-- .slide: class="left" -->
## Endpoints

* *Authorization Endpoint*
  * Authenticates the resource owner (e.g. user/password)
  * Asks for consent
  * Sends confirmation (e.g. access code, access token) to *Redirect Endpoint*
* *Redirect Endpoint*
  * Offered by the client
  * Called via redirecting the user-agent (HTTP redirect 302)
  * Receives code/token or fetches token from Token Endpoint
* *Token Endpoint*
  * Creates tokens for access codes, refresh tokens, etc.
  * Can validate the client using a client secret
* Find endpoints via [*OpenID Connect Discovery*](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)
  * E.g. [https://rainerdemo-eu.eu.auth0.com/.well-known/jwks.json](https://rainerdemo-eu.eu.auth0.com/.well-known/jwks.json)


<!-- .slide: class="left" -->
## OAuth/OpenID *Flows*

* *Authorization Code Flow*
  * Aka 3-legged OAuth
  * Client must be capable of storing secrets (e.g. Node.js server, ASP.NET server, etc.)
* *Implicit Flow*
  * Less secure
  * No refresh tokens
  * For clients that cannot store secrets (e.g. SPA written in JavaScript, mobile app)
* Other flows (not covered in this course)
  * *Resource Owner Password Flow*
  * *Client Credential Flow*
  * *Hybrid Flow*


<!-- .slide: class="left" -->
## Implicit Flow

```

     +----------+      +----------+          Client Identifier     +---------------+
     | Resource <--(B)-+-        -+----(A)-- & Redirection URI --->|               |
     |  Owner   |      |  User-   |                                | Authorization |
     |          |      |  Agent  -|----(B)-- User authenticates -->|     Server    |
     +----------+      |          |                                |               |
                       |          |<---(C)--- Redirection URI ----<|               |
                       |          |          with Access Token     +---------------+
                       |          |            in Fragment
                       |          |                                +---------------+
                       |          |----(D)--- Redirection URI ---->|   Web-Hosted  |
     +---------+       |          |          without Fragment      |     Client    |
     |        -+--(A)-->          |                                |    Resource   |
     |  Client |       |     (F)  |<---(E)------- Script ---------<|               |
     |         <--(G)--+-         |                                +---------------+
     +---------+   ^   +----------+
                   |
             Access Token

```


<!-- .slide: class="left" -->
## Code Grant Flow

```

    +----------+     +----------+          Client Identifier      +---------------+
    | Resource |     |         -+----(A)-- & Redirection URI ---->|               |
    |   Owner  <-(B)-+- User-   |                                 | Authorization |
    |          |     |  Agent  -+----(B)-- User authenticates --->|     Server    |
    +----------+     |          |                                 |               |
                     |         -+----(C)-- Authorization Code ---<|               |
                     +-|----|---+                                 +---------------+
                       |    |                                         ^      v
                      (A)  (C)                                        |      |
                       |    |                                         |      |
                       ^    v                                         |      |
                     +---------+                                      |      |
                     |         |>---(D)-- Authorization Code ---------'      |
                     |  Client |          & Redirection URI                  |
                     |         |                                             |
                     |         |<---(E)----- Access Token -------------------'
                     +---------+       (w/ Optional Refresh Token)

```


<!-- .slide: class="left" -->
## [JSON Web Token](https://tools.ietf.org/html/rfc7519) (JWT)

* Open standard (RFC 7519)
* Way for securely transmitting information between parties as a JSON object
* Can be verified and trusted because it is digitally signed
* Consists of...
  * ...header
  * ...payload
  * ...signature
* JWT examples and decoder: [jwt.io](https://jwt.io/)


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [OpenID Connect Specification](http://openid.net/connect/)
  * [OAuth2 RFC 6749](https://tools.ietf.org/html/rfc6749)
  * [Auth0 jQuery Samples](https://github.com/auth0-samples/auth0-jquery-samples)
* Videos
  * [An Introduction To OpenID Connect (by Oracle)](https://youtu.be/6DxRTJN1Ffo)
