# Aufgabe 2

* Anzahl Punkte: 15
* Kalkulierte Zeit: 45 Minuten
* Anzahl Codezeilen: ca. 45

## Einleitung

Ihre Aufgabe ist die Implementierung einer Web API **mit dem [Restify](http://restify.com/) Framework**, die als Backend für ein [TicTacToe-Spiel](https://de.wikipedia.org/wiki/Tic-Tac-Toe) dienen soll.

Die technische Spezifikation der Web API finden Sie im *Open API* Format in [*api-spec.yaml*](api-spec.yaml). Hinweis: Sie können die Spezifikation in einem angenehm lesbaren Format ansehen, indem Sie [https://editor.swagger.io/](https://editor.swagger.io/) im Browser öffnen und den Inhalt der Datei [*api-spec.yaml*](api-spec.yaml) in den Eingabebereich auf der linken Seite kopieren:

![Swagger Editor](swagger-editor.png)

**Lesen Sie die API Spezifikation genau!** Auch scheinbare Kleinigkeiten wie zum Beispiel geforderte *Response Codes* (z.B. *404* für *Not Found*, *201* für *Created*) sind wichtig und müssen beachtet werden.

**Hinweis:** Um Ihnen den Start zu erleichtern, finden Sie unten ein Muster für den Inhalt der *package.json*-Datei. Sie referenziert alle Node-Packages, die Sie für die Lösung der Aufgabe benötigen.

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (8 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Funktionsfähige, spezifikationsgemäße Umsetzung der Operation *getWinner1* (`POST /api/getWinner`) mit JavaScript **oder** TypeScript
* Gewinnerermittlung (drei gleiche Wert waagrecht, senkrecht oder in der Diagonale; siehe auch [Wikipedia](https://de.wikipedia.org/wiki/Tic-Tac-Toe))
* Erkennung und Behandlung von fehlerhaften Requests für die Operation *getWinner1* (`POST /api/getWinner`) (siehe auch unten erwähnte Testfälle für *fehlerhafte Requests*)

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 3 Punkte: Verwendung von TypeScript statt JavaScript
* 3 Punkte: Funktionsfähige, spezifikationsgemäße Umsetzung der Operation *getWinner2* (`GET /api/getWinner?board=...`)
* 1 Punkt: Guter Programmierstil (z.B. *readme.md*, *package.json* und *tsconfig.json* Konfigurationsdateien, *scripts* in *package.json*, *.gitignore*, keine unnötigen Dateien eingecheckt, etc.) und effizienter Algorithmus

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
    "restify": "^6.3.4"
  },
  "devDependencies": {
    "@types/http-status-codes": "^1.2.0",
    "@types/restify": "^5.0.7",
    "typescript": "^2.6.2"
  }
}
```

## Testfälle

### *POST* Request mit Gewinner

Request:

```
POST /api/getWinner
Content-Type: application/json

[" ", "X", "O", 
 "O", "X", " ", 
 " ", "X", "O"]
```

Response:

```
{ "winner": "X" }
```

### *POST* Request ohne Gewinner

Request:

```
POST /api/getWinner
Content-Type: application/json

[" ", "X", "O",
 "O", "X", " ",
 " ", "O", " "]
```

Response:

```
{ "winner": null }
```

### *GET* Request mit Gewinner

Request:

```
GET /api/getWinner?board=,X,O,O,X,,,X,O
```

Response:

```
{ "winner": "X" }
```

### Fehlerhafter POST Request 1

Request:

```
POST /api/getWinner
Content-Type: application/json

[" ", "X", "O",
 "O", "X", " ",
 " ", "O"]
```

### Fehlerhafter POST Request 2

Request:

```
POST /api/getWinner
Content-Type: application/json

"dummy"
```


### Fehlerhafter GET Request

Request:

```
GET /api/getWinner?board=,,,X
```
