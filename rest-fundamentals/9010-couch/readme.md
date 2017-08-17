# CouchDB REST API

## Introduction

In this exercise you have to intall [CouchDB](http://couchdb.apache.org/#download) and interact with it using [CouchDB's RESTful Web API](http://docs.couchdb.org/en/2.1.0/api/index.html).

## Preparation

* [Install CouchDB](http://couchdb.apache.org/#download) on your computer.
* Visit *Fauxton* (=CouchDB's web-based administration tool) at [http://localhost:5984/_utils/#setup](http://localhost:5984/_utils/#setup) and choose *Configure a Single Node*
  * Enter username and password
  * Use *127.0.0.1* as the IP address (=CouchDB not available on the network, just on your computer)
  * Accept the suggested port (e.g. *5984*)


## Requirements

* Install *CouchDB* as described above.
* Use any REST client (e.g. Postman, Visual Studio Code) to execute the operations below


## Exercises

### Check if CouchDB works

[`GET /`](http://docs.couchdb.org/en/2.1.0/api/server/common.html)
```
GET http://127.0.0.1:5984/ HTTP/1.1
```

### Create a Database

[`PUT /db`](http://docs.couchdb.org/en/2.1.0/api/database/common.html)
```
PUT http://127.0.0.1:5984/my_first_db HTTP/1.1
Accept: application/json
Authorization: Basic YWRtaW46YWRtaW4=
```
* Note [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)


### Query Database Properties

[`GET /db`](http://docs.couchdb.org/en/2.1.0/api/database/common.html)
```
GET http://127.0.0.1:5984/my_first_db HTTP/1.1
Accept: application/json
Authorization: Basic YWRtaW46YWRtaW4=
```


### Add a Document

[`POST /db`](http://docs.couchdb.org/en/2.1.0/api/database/common.html)
```
POST http://127.0.0.1:5984/my_first_db HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Basic YWRtaW46YWRtaW4=

{
  "schoolName": "HTL Perg", 
  "location": "Perg", 
  "country": "Austria" 
}
```


### Find a Document

[`POST /db/_find`](http://docs.couchdb.org/en/2.1.0/api/database/find.html)
```
POST http://127.0.0.1:5984/my_first_db/_find HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Basic YWRtaW46YWRtaW4=

{
  "selector": { 
    "country": { "$eq": "Austria" } 
  }, 
  "fields": [ "_id", "_rev", "schoolName" ] 
}
```


### Delete a Document

[`DELETE /db/_id?rev=_rev`](http://docs.couchdb.org/en/2.1.0/api/document/common.html)
```
DELETE http://127.0.0.1:5984/my_first_db/6fd2474efa515a3a84fe2e0496000387?rev=1-c03973c2778ca77eef6b2f64a069df03 HTTP/1.1
Accept: application/json
Authorization: Basic YWRtaW46YWRtaW4=
```


### Delete Database

[`DELETE /db`](http://docs.couchdb.org/en/2.1.0/api/database/common.html)
```
DELETE http://127.0.0.1:5984/my_first_db HTTP/1.1
Accept: application/json
Authorization: Basic YWRtaW46YWRtaW4=
```


## Hints

* To get the *Authorization* header, you have to [Base64](https://en.wikipedia.org/wiki/Base64)-encode *username:password*
  * Consider *Visual Studio Code* plugin [*vscode-base64*](https://marketplace.visualstudio.com/items?itemName=adamhartford.vscode-base64)
  * Consider [online encoder](https://www.base64decode.org/). **Never use online encoder with real-life passwords!!**


## Advanced Exercises

* Read details about [CouchDB's REST API](http://docs.couchdb.org/en/2.1.0/api/index.html)
* Build a web UI (HTML, JavaScript, [*fetch*](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch) API) for manipulating documents in CouchDB
