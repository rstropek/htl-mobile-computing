# Aufgabe 3

* Anzahl Punkte: 10
* Kalkulierte Zeit: 20 Minuten

## Einleitung

Ihre Aufgabe ist die Implementierung einer Websockets-Demoanwendung **mit dem [Socket.io](https://socket.io/) Framework**.

Die Demoanwendung soll serverseitig ein Verzeichnis überwachen. Wenn eine Datei angelegt oder gelöscht wird, soll über [Socket.io](https://socket.io/) eine Nachricht an eine Webseite geschickt werden. Auf der Webseite wird eine entsprechende Meldung angezeigt. Hier ein Screenshot der Webseite mit Dateiänderungsmeldungen:

![Demo Website](browser-ui.png)

Um Ihnen die Arbeit zu erleichtern, finden Sie im Ordner [*start*](start) ein Projekt, mit dem sie beginnen können. Es enthält:

* HTML-Seite [*index.html*](start/src/public/index.html) mit zugehöriger TypeScript-Datei [*index.ts*](start/src/public/index.ts)
* Node.js Programm [*server.ts*](start/src/server.ts), das zeigt, wie man einen Ordner überwacht und informiert wird, wenn eine Datei angelegt oder gelöscht wurde
* Konfigurationsdateien [*package.json*](start/package.json) (inkl. *build* script) und [*tsconfig.json*](start/tsconfig.json)

## Anforderungen

Beachten Sie beim Lösen der Aufgabe folgende Anforderungen.

### Pflichtaufgaben (5 Punkte)

Pflichtaufgaben, die alle korrekt gelöst werden müssen, um Punkte für das Beispiel zu erhalten:

* Verwenden der Programmiersprache *TypeScript*
* Erweitern des Server-Programms (=Node.js), das mindestens folgende Funktionen korrekt implementiert:
  * Die statische Webseite wird über HTTP angeboten (über das *express* Node-Package)
  * Der *socket.io*-Websockets-Server wird gestartet
  * Dateioperationen (anlegen, löschen) werden zum Client (=Browser) werden über *Socket.io* gesendet
* Erstellen des Client-seitigen Programms (=JavaScript im Browser), das mindestens folgende Funktionen korrekt implementiert:
  * *socket.io* wird eingebunden
  * Websockets-Nachrichten über Dateioperationen werden mit *Socket.io* empfangen und ausgegeben (z.B. mit `console.log`)

### Optionale Aufgaben

Optionale Aufgaben, um die volle Punktzahl für das Beispiel zu erhalten:

* 2 Punkte: Meldungen über Dateioperationen werden zum HTML DOM hinzugefügt (`li` Elemente, die in das vorhandene `ul` Element eingefügt werden)
* 1 Punkt: Guter Programmierstil (z.B. *readme.md*, *package.json* Konfigurationsdatei, *scripts* in *package.json*, *.gitignore*, keine unnötigen Dateien eingecheckt, etc.)
* 2 Punkte: Zu überwachender Ordner kann als optionaler Kommandozeilenparameter beim Start den Servers übergeben werden (z.B. `node dist\server.js c:\temp`)
