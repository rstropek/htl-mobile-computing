# Test

## Einleitung

Ihre Aufgabe ist die Entwicklung eines Backends und Frontends zum [Lotto-Spielen (6 aus 45)](https://www.win2day.at/lotterie/lotto).

Sie müssen bei dieser Prüfung **kein** Projekt von Grund auf anlegen. Sie müssen nur Lücken in vorhandenem Code (siehe Ordner [src](src)) füllen. Sie finden alle Aufgaben im Code, indem Sie in TypeScript-Dateien (**.ts*) nach *TODO:* suchen.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms TypeScript >= 3.x und Node.js >= 10.x.

* Nach den Klonen des Repositories rufen Sie `npm install` zum Installieren der NPM-Pakete auf.

* Zum Übersetzen des TypeScript-Codes rufen Sie `npm run build` auf (siehe auch *package.json*-Datei).

* Zum Starten des Projekts rufen Sie `npm start` auf (siehe auch *package.json*-Datei). Sie können nach dem Start Ihren Code mit den Requests in *demo.http* oder mit dem Browser interaktiv (*http://localhost:8080*) ausprobieren.

* Das Projekt enthält automatische Tests, die Ihnen Feedback geben, ob Ihr Code funktioniert. Rufen Sie die Tests mit `npm test` auf (siehe auch *package.json*-Datei).

## Anforderungen

### Mindestanforderungen (10 Punkte)

Ihr Programm muss die folgenden Anforderungen erfüllen, damit Ihr Test positiv beurteilt werden kann. Aber keine Sorge, kleinere Fehler in diesem Bereich führen nicht sofort zu einer negativen Note sondern nur zu Punktabzügen.

* (3 Punkte) Methode `getRandomLottoDrawing` in *lotto-logic.ts*.

* (3 Punkte) Methode `isTipValid` in *lotto-logic.ts*.

* (1 Punkt) Methode `getDrawing` in *handlers.ts*.

* (3 Punkte) Methode `postIsTipValid` in *handlers.ts*.

### Optionale Anforderungen (10 Punkte)

Die Lösung folgender Anforderungen ist für eine positive Beurteilung nicht unbedingt notwendig, sie verbessert aber Ihre Note.

* (2 Punkte) Methode `isDrawingValid` in *lotto-logic.ts*.

* (3 Punkte) Methode `calculateResult` in *lotto-logic.ts*.

* (3 Punkte) Methode `postCalculateResult` in *handlers.ts*.

* (2 Punkte) Methode `checkResult` in *client/index.ts*.
