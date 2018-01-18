# Aufgabe 1

* Anzahl Punkte: 10
* Kalkulierte Zeit: 15 Minuten

## Einleitung

Sie möchten ein neues *Node.js*-Projekt beginnen. Es soll die Implementierung einer RESTful Web API **mit dem [Restify](http://restify.com/) Framework** enthalten. Als **Programmiersprache soll *TypeScript*** verwendet werden.

Ihre Aufgabe ist es, das Projekt initial anzulegen. Konzentrieren Sie sich bei der Aufgabe auf die **Projektkonfiguration**. Sie brauchen in dieser Übung die RESTful Web API **nicht** zu implentieren! Eine **Test-TypeScript-Datei** mit einem einzelnen `console.log('Hello World')` Statement ist ausreichend.

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (5 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Alle für das Projekt notwendigen Node-Packages und *TypeScript Type Definition*-Packages müssen lokal installert sein. Außer Node.js und NPM dürfen keine global installierten Softwarekomponenten vorausgesetzt werden.
* Bei der Installation der Node-Packages ist unbedingt darauf zu achten, dass korrekt zwischen *dependencies* und *devDependencies* unterschieden wird.
* Das Projekt muss in der Kommandozeile mit dem Kommando `npm run build` gebaut werden können.
* Bei `npm run build` müssen alle im Projekt enthaltenen TypeScript-Dateien übersetzt werden. Neue TypeScript-Dateien müssen hinzugefügt werden können, ohne dafür irgendwelche JSON-Konfigurationsdateien anpassen zu müssen.
* Das Projekt muss in der Kommandozeile mit dem Kommando `npm start` gestartet werden können.
* Der TypeScript-Compiler muss in der TypeScript-Konfigurationsdatei so konfiguriert werden, dass als *ECMAScript target version* `ES2015` verwendet wird.
* Es muss eine [*.gitignore*](https://git-scm.com/docs/gitignore)-Datei geben, die sicherstellt, dass nur die notwendigen Konfigurationsdateien und der Quellcode eingecheckt werden. Insbesondere die beim Kompilieren entstehenden JavaScript-Dateien sollen beim Checkin ignoriert werden.

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 1 Punkt: Der TypeScript-Compiler muss in der Kommandozeile mit dem Kommando `npm run watch` im [*watch mode*](https://www.typescriptlang.org/docs/handbook/compiler-options.html) gestartet werden können.
* 2 Punkte: Dateistruktur
  * Alle Konfigurationsdateien müssen sich im Wurzelverzeichnis des Projekts befinden.
  * Alle TypeScript-Quellcodedateien müssen sich im Verzeichnis *src* befinden.
  * Die beim Kompilieren mit `npm run build` entstehenden JavaScript-Dateien müssen im Verzeichnis *dist* landen.
* 2 Punkt: Das Projekt muss in der Kommandozeile mit dem Kommando `npm run clean` "aufgeräumt" werden können. "Aufräumen" heißt, dass alle beim Kompilieren des Programms entstandenen JavaScript-Dateien gelöscht werden (z.B. *dist* Ordner wird gelöscht).

