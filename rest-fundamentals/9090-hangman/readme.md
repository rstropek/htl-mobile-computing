# Aufgabe 2

* Anzahl Punkte: 13
* Kalkulierte Zeit: 35 Minuten

## Einleitung

Sie arbeiten in einem Team, das das Spiel [*Hangman*](https://en.wikipedia.org/wiki/Hangman_(game)) programmieren soll.

Ihr Team hat bereits eine Klasse `HangmanLogic` programmiert, die die Spiellogik von Hangman implementiert. Sie finden den Code der Klasse [hier](hangman-logic/hangman-logic.ts) und können ihn in ihr Projekt kopieren. Hier ein Codebeispiel, das zeigt, wie die Klasse `HangmanLogic` verwendet wird:

```
// Erstellen einer neuen Runde Hangman. Es wird automatisch ein zufälliges Wort ausgewählt.
// Für dieses Beispiel nehmen wir an, dass das Wort `important` zu erraten ist.
const hangman = new HangmanLogic();

// Ausgabe `.........` weil noch kein Buchstabe erraten wurde
console.log(hangman.word);

// Raten des Buchstaben `t`
const occurences = hangman.guess('t');

// Ausgabe `2` weil `t` zwei Mal in `important` vorkommt
console.log(occurences);

// Ausgabe `.....t..t` weil `t` schon erraten wurde
console.log(hangman.word);
```

Ihre Aufgabe ist die Implementierung einer RESTful Web API **mit dem [Restify](http://restify.com/) Framework** für das Hangman-Spiel.

**Hinweis:** Um Ihnen den Start zu erleichtern, finden Sie unten ein Muster für den Inhalt der *package.json*-Datei. Sie referenziert alle Node-Packages, die Sie für die Lösung der Aufgabe benötigen.

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (7 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Verwenden der Programmiersprache *TypeScript* oder *JavaScript*

* Implementation der REST-Operation `GET /hangman-game`. Sie gibt den aktuellen Ratestand zurück. Das Ergebnis enthält die Anzahl der bisherigen Rateversuche und den aktuellen Stand des Wortes. Hier ein Beispiel für einen korrekten Request und Response:

```
GET http://localhost:8080/hangman-game
Accept: application/json
```

```
{
  "wordToGuess": ".....t..t",
  "numberOfGuesses": 1
}
```

* Implementation der REST-Operation `POST /hangman-game`. Sie bekommt als Request Body den geratenen Buchstaben als JSON String (z.B. `"t"`). Das Ergebnis enthält die Anzahl der Vorkommen des geratenen Wortes, die Anzahl der bisherigen Rateversuche und den aktuellen Stand des Wortes. Hier ein Beispiel für einen korrekten Request und Response:

```
POST http://localhost:8080/hangman-game
Accept: application/json
Content-Type: application/json

"t"
```

```
{
  "occurences": 2,
  "wordToGuess": ".....t..t",
  "numberOfGuesses": 1
}
```

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 2 Punkte: Verwendung von *TypeScript* statt *JavaScript*
* 3 Punkte: Ihre REST-API unterstützt mehrere Spiele gleichzeitig:
  * Mit `POST /hangman-game` kann ein neues Spiel gestartet werden. Diese Web API methode gibt eine `gameId` zurück (kann beliebig generiert werden).
  * Der aktuelle Ratestand kann mit `GET /hangman-game/:gameId` abgefragt werden
  * Raten kann man mit `POST /hangman-game/:gameId`
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
