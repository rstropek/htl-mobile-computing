# *OpenID Connect* Challenge

## Introduction

At [https://openid-challenge.azurewebsites.net/](https://openid-challenge.azurewebsites.net/), there is a Web API with which you can claim an extra point for this course. The exact URL for the API is `https://openid-challenge.azurewebsites.net/getExtraPoint?name=<yourName>` (replace `<yourName>` with your name).

**The challenge is that this Web API requires an *JWT Access Token* in the *Authorization* header.** Your job is to generate a proper access token and call the Web API with it.

## Required OpenID Parameters

Here are the parameters that you are going to need to generate the access token:

* OpenID Connect *Discovery* Endpoint: [https://rainerdemo-eu.eu.auth0.com/.well-known/openid-configuration](https://rainerdemo-eu.eu.auth0.com/.well-known/openid-configuration)
* *Audience* required for accessing the API: `https://extra-point-challenge.com/`
* *Scope* required to claim your extra point through the API: `get:extrapoint`
* Supported grant type: *Authorization Code*
* ID of your *client*: `Vnsp3nAmhPXe5c9KzpIHRD3rRBXH3Wvy`
* Secret of your *client*: `1mTex860v_YgVn7EMgHVKf9Bz9YcCtBZI0PHlVqB0c1o6x-45RjluyM8ZNJuUGoA`
* Supported *redirect URI*: `http://localhost:8080/`

