# Test

## Einleitung

Ihre Aufgabe ist die Entwicklung eines Programms zum Generieren von Testdaten in Form einer [CSV Datei](https://en.wikipedia.org/wiki/Comma-separated_values). Die Dateien, die Sie generieren, werden von anderen Teammitgliedern verwendet, um Datenimports zu testen. Detailierte funktionale und nicht-funktionale Anforderungen finden Sie unten.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms TypeScript >= 3.x und Node.js >= 10.x.

* Die Datei, die Sie erzeugen, muss als erste Zeile Spaltennamen enthalten. Hier ein Beispiel, das zeigt, wie die von Ihnen generierte Datei aussehen muss:

  ```txt
  id,customerid,product,revenue
  1,15,Cheap Bananas,6
  2,124,Cheap Flowers,4
  3,29,Hot Bikes,8
  4,159,Tasty Bikes,0
  5,32,Juicy Bananas,0
  ...
  ```

* Verwenden Sie *kein* fertiges NPM-Paket für Verarbeitung von Kommandozeilenparameter.

## Anforderungen

### Mindestanforderungen (10 Punkte)

Ihr Programm muss die folgenden Anforderungen erfüllen, damit Ihr Test positiv beurteilt werden kann. Aber keine Sorge, kleinere Fehler in diesem Bereich führen nicht sofort zu einer negativen Note sondern nur zu Punktabzügen.

* (2 Punkte) Ihr Programm muss die im Unterricht besprochenen Empfehlungen (*Best Practices*) für Node.js-Projekte einhalten (z.B. Konfigurationsdateien mit entsprechendem Inhalt, Git *ignore* file, etc.).

* (1 Punkt) Schreiben Sie leicht lesbaren, ordentlich formatierten Code mit sinnvollen Namen für Variablen, Funktionen und Typen.

* (1 Punkt) Sie müssen ihr Programm am Ende des Tests in das zur Verfügung gestellte GitHub-Repository einchecken.

* (2 Punkte) Generieren Sie eine CSV-Datei namens *generated-sales.csv* mit 1000 Zeilen und folgenden Spalten:

  |    Spalte    | Typ  |                         Beschreibung                         |
  | ------------ | ---- | ------------------------------------------------------------ |
  | `id`         | Zahl | Laufende Nummer der Transaktion beginnend mit 1 (ganze Zahl) |
  | `customerid` | Zahl | Zufällige Kundennummer zwischen 1 und 250 (ganze Zahl)       |
  | `product`    | Text | Zufällig generierte Produktbezeichnung (Details siehe unten) |
  | `revenue`    | Zahl | Zufällig generierter Umsatz (Details siehe unten)            |

* (2 Punkte) Generieren Sie die Produktbezeichnung (Spalte `product`), indem Sie ein zufällig ausgewähltes Attribut aus `'Juicy', 'Fresh', 'Tasty', 'Hot', 'Cheap'` und einen zufällig ausgewählten Produktnamen aus `'Apples', 'Bananas', 'Bikes', 'Cars', 'Flowers'` zusammenhängen. Mögliche Kombinationen, die sich ergeben könnten, wären also z.B. *Juicy Bananas*, *Hot Cars* oder *Tasty Flowers*.

* (2 Punkte) Kommandozeile
  * Wenn der Benutzer in der Kommandozeile die Option `-h` (für *high*) angegeben hat, muss der Umsatz eine Zufallszahl zwischen 0 und 1000 sein (ganze Zahl).
  * Wenn der Benutzer in der Kommandozeile nichts oder `-l` (für *low*) angegeben hat, muss der Umsatz eine Zufallszahl zwischen 0 und 10 (ganze Zahl) sein.
  * Wenn der Benutzer eine unbekannte Option in der Kommandozeile angibt, geben Sie eine entsprechende Fehlermeldung aus.

### Optionale Anforderungen (10 Punkte)

Die Lösung folgender Anforderungen ist für eine positive Beurteilung nicht unbedingt notwendig, sie verbessert aber Ihre Note.

* (1 Punkt) Geben Sie eine Fehlermeldung aus falls beim Schreiben in die zu generierende Datei ein Fehler auftritt (z.B. Datei existiert schon und ist schreibgeschützt). Wenn alle Zeilen korrekt geschrieben werden konnten, geben Sie eine Erfolgsmeldung aus.

* (2 Punkte) Verwenden Sie den TypeScript-Datentyp `any` nicht, weder explizit noch implizit.

* (3 Punkte) Lassen Sie die Anzahl an generierten Zeilen über einen Kommandozeilenparameter `-n=...` steuern. `-n=5` würde z.B. eine Datei mit einer Kopfzeile und fünf Datenzeilen ergeben. Die Anzahl Zeilen muss zwischen 1 und 10000 liegen (Fehlermeldung bei ungültiger Zeilenanzahl). Wird `-n=...` nicht angegeben, müssen 1000 Zeilen generiert werden.

* (3 Punkte) Schreiben Sie Zeile für Zeile in die Ausgabedatei anstatt einen großen String im Hauptspeicher zusammenzubauen und auf einmal in die Datei zu schreiben.

* (1 Punkt) Passen Sie die Ausgabe der Fehler- oder Erfolgsmeldung an das zeilenweise Schreiben an.
