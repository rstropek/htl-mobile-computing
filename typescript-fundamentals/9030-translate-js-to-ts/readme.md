# Aufgabe 1

* Anzahl Punkte: 12
* Kalkulierte Zeit: 30 Minuten

## Einleitung

Sie haben die Aufgabe, eine bestehende Node.js-Anwendung, die in JavaScript geschrieben ist, auf TypeScript umzustellen. Die Anwendung implementiert eine einfache RESTful Web API **mit dem [Restify](http://restify.com/) Framework**, die die Verwaltung von Kunden ermöglicht.

Die Node.js-Anwendung, die umzustellen ist, finden Sie im Ordner [start](start).

Konzentrieren Sie sich bei der Aufgabe auf die **Projektkonfiguration** und das **Übersetzen von JavaScript in TypeScript**. Sie brauchen in dieser Übung **keine neuen Programmfunktionen hinzuzufügen**!

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (6 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Alle für das Projekt notwendigen Node-Packages und *TypeScript Type Definition*-Packages müssen lokal installert sein. Außer Node.js und NPM dürfen keine global installierten Softwarekomponenten vorausgesetzt werden.
* Bei der Installation der Node-Packages ist unbedingt darauf zu achten, dass korrekt zwischen *dependencies* und *devDependencies* unterschieden wird.
* Das Projekt muss in der Kommandozeile mit dem Kommando `npm run build` gebaut werden können.
* [*server.js*](start/server.js) und [*customers.js*](start/customers.js) werden in TypeScript übersetzt, kompilieren ohne Fehler und können ausgeführt werden.
* Alle `require` Statemens wurden in `import` Statements umgebaut.
* Das Projekt muss in der Kommandozeile mit dem Kommando `npm start` gestartet werden können.
* Der TypeScript-Compiler muss in der TypeScript-Konfigurationsdatei so konfiguriert werden, dass als *ECMAScript target version* `ES2015` verwendet wird.

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 2 Punkte: Sie haben ein Interface `ICustomer` angelegt und verwendet, das einen Kunden repräsentiert. Das Interface wird in beiden TypeScript-Dateien verwendet.
* 1 Punkt: Der TypeScript-Compiler muss in der Kommandozeile mit dem Kommando `npm run watch` im [*watch mode*](https://www.typescriptlang.org/docs/handbook/compiler-options.html) gestartet werden können.
* 2 Punkte: Dateistruktur
  * Alle Konfigurationsdateien müssen sich im Wurzelverzeichnis des Projekts befinden.
  * Alle TypeScript-Quellcodedateien müssen sich im Verzeichnis *src* befinden.
  * Die beim Kompilieren mit `npm run build` entstehenden JavaScript-Dateien müssen im Verzeichnis *dist* landen.
* 1 Punkt: Das Projekt muss in der Kommandozeile mit dem Kommando `npm run clean` "aufgeräumt" werden können. "Aufräumen" heißt, dass alle beim Kompilieren des Programms entstandenen JavaScript-Dateien gelöscht werden (z.B. *dist* Ordner wird gelöscht).
