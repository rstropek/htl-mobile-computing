# Aufgabe 2

* Anzahl Punkte: 15
* Kalkulierte Zeit: 45 Minuten
* Anzahl Codezeilen: ca. 40

## Einleitung

Ihre Aufgabe ist die Implementierung einer RESTful Web API **mit dem [Restify](http://restify.com/) Framework**.

Die technische Spezifikation der Web API finden Sie im *Open API* Format in [*api-spec.yaml*](api-spec.yaml). Hinweis: Sie können die Spezifikation in einem angenehm lesbaren Format ansehen, indem Sie [https://editor.swagger.io/](https://editor.swagger.io/) im Browser öffnen und den Inhalt der Datei [*api-spec.yaml*](api-spec.yaml) in den Eingabebereich auf der linken Seite kopieren:

![Swagger Editor](swagger-editor.png)

**Lesen Sie die API Spezifikation genau!** Auch scheinbare Kleinigkeiten wie zum Beispiel geforderte *Response Codes* (z.B. *404* für *Not Found*, *201* für *Created*) sind wichtig und müssen beachtet werden.

**Hinweis:** Um Ihnen den Start zu erleichtern, finden Sie unten ein Muster für den Inhalt der *package.json*-Datei. Sie referenziert alle Node-Packages, die Sie für die Lösung der Aufgabe benötigen.

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (8 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Funktionsfähige, spezifikationsgemäße Umsetzung der folgenden Operationen mit JavaScript **oder** TypeScript:
  * *getItems* (`GET /api/toDoItems`)
  * *addItem* (`POST /api/toDoItems`)
  * *getItem* (`GET /api/toDoItems/{id}`)

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 3 Punkte: Verwendung von TypeScript statt JavaScript
* 2 Punkte: Persistentes Speichern der Datensätze in einer Datei mit Hilfe des Node-Package [*nedb*](https://github.com/louischatriot/nedb)
* 1 Punkt: Guter Programmierstil (z.B. *readme.md*, *package.json* und *tsconfig.json* Konfigurationsdateien, *scripts* in *package.json*, *.gitignore*, keine unnötigen Dateien eingecheckt, etc.) und effizienter Algorithmus
* 1 Punkt: Funktionsfähige, spezifikationsgemäße Umsetzung der Operation *setItemDone* (`POST /api/toDoItems/{id}/setDone`)

## *package.json*

```
{
  "name": "solution",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "http-status-codes": "^1.3.0",
    "nedb": "^1.8.0",
    "restify": "^6.3.4"
  },
  "devDependencies": {
    "@types/nedb": "^1.8.5",
    "@types/http-status-codes": "^1.2.0",
    "@types/restify": "^5.0.7",
    "typescript": "^2.6.2"
  }
}
```

## Testfälle

### ToDo Items abfragen

Request:

```
GET http://localhost:8080/api/toDoItems
```

### ToDo Item einfügen

Request:

```
POST http://localhost:8080/api/toDoItems
Content-Type: text/plain

Einkaufen
```

### Einzelnes ToDo Item abfragen

Request (ID muss durch eigenen Wert ersetzt werden):

```
GET http://localhost:8080/api/toDoItems/MXdzY2yO5rnZoZeg
```

### ToDo Item auf erledigt setzen

Request (ID muss durch eigenen Wert ersetzt werden):

```
POST http://localhost:8080/api/toDoItems/MXdzY2yO5rnZoZeg/setDone
```
