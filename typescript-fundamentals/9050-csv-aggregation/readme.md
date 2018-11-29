# Test

## Einleitung

Ihre Aufgabe ist die Entwicklung eines Programms zur Auswertung einer gegebenen [CSV Datei](https://en.wikipedia.org/wiki/Comma-separated_values). Sie müssen aggregierte Werte (Umsatz pro Kunde) ausrechnen und am Bildschirm ausgeben. Detailierte funktionale und nicht-funktionale Anforderungen finden Sie unten.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms TypeScript >= 3.x und Node.js >= 10.x.

* Die Eingabedatei ist UTF8-codiert. Die erste Zeile enthält Spaltennamen. Eine Beispieldatei, die Sie auch zum Testen ihres Programms verwenden sollten, finden Sie unter [sales.csv](sales.csv). Die Eingabedatei besteht aus folgenden Spalten:

  |    Spalte    |  Typ  |          Beschreibung           |
  | ------------ | ----- | ------------------------------- |
  | `id`         | Zahl  | Laufende Nummer der Transaktion |
  | `customerid` | Zahl  | Kundennummer                    |
  | `product`    | Text  | Produktbezeichnung              |
  | `date`       | Datum | Datum der Transaktion           |
  | `revenue`    | Zahl  | Umsatz                          |

* Sie können davon ausgehen, dass in der Eingabedatei immer alle Spalten in der oben angegebenen Reihenfolge mit korrekten Daten enthalten sind. Eine Fehlerbehandlung für ungültige Daten in der Eingabedatei ist *nicht* gefordert.

* Die Eingabedatei ist klein genug, dass Sie sie komplett in den Speicher lesen können.

## Anforderungen

### Mindestanforderungen (10 Punkte)

Ihr Programm muss die folgenden Anforderungen erfüllen, damit Ihr Test positiv beurteilt werden kann. Aber keine Sorge, kleinere Fehler in diesem Bereich führen nicht sofort zu einer negativen Note sondern nur zu Punktabzügen.

* (2 Punkte) Ihr Programm muss die im Unterricht besprochenen Empfehlungen (*Best Practices*) für Node.js-Projekte einhalten (z.B. Konfigurationsdateien mit entsprechendem Inhalt, Git *ignore* file, etc.).

* (1 Punkt) Schreiben Sie leicht lesbaren, ordentlich formatierten Code mit sinnvollen Namen für Variablen, Funktionen und Typen.

* (1 Punkt) Sie müssen ihr Programm am Ende des Tests in das zur Verfügung gestellte GitHub-Repository einchecken.

* (2 Punkte) Die Anwendung erhält den Pfad zur Eingabedatei in der Kommandozeile.
  * Beispiel für gültige Kommandozeile: `node yourapp.js sales.csv`
  * Falls keine Eingabedatei in der Kommandozeile angegeben wurde, muss eine Fehlermeldung (z.B. *Missing path to input file*) ausgegeben werden.

* (4 Punkte) Ermitteln Sie die Summe des Umsatz (Spalte `revenue`) pro Kunde (Spalte `customerId`) und geben Sie diese in folgender Form aus: `<Kundennummer>: <Summe des Umsatzes>`. Beispielausgabe:

```txt
1: 51.3
2: 21.3
3: 26.9
4: 28.1
5: 30.8
6: 21.2
7: 4.8
8: 31.6
9: 48
10: 26.7
...
```

### Optionale Anforderungen (10 Punkte)

Die Lösung folgender Anforderungen ist für eine positive Beurteilung nicht unbedingt notwendig, sie verbessert aber Ihre Note.

* (1 Punkt) Geben Sie eine Fehlermeldung aus falls die in der Kommandozeile angegebene Datei nicht gelesen werden kann (z.B. Datei wurde nicht gefunden).

* (1 Punkt) Geben Sie die Summe des Umsatzes gerundet auf eine Nachkommastelle aus. Falls das Ergebnis eine ganze Zahl ist (z.B. 42), können Sie wählen, ob Sie keine oder eine Nachkommastelle ausgeben (z.B. `42` oder `42.0`).

* (2 Punkte) Verwenden Sie den TypeScript-Datentyp `any` nicht, weder explizit noch implizit.

* (3 Punkte) Gehen Sie nicht davon aus, dass die Spalten in der Eingabedatei immer in der gleichen Reihenfolge enthalten sind. Ermitteln Sie stattdessen den Spaltenindex für die relevanten Spalten `customerId` und `revenue` aus der ersten Zeile der Eingabedatei (enthält Spaltennamen).

* (3 Punkte) Geben Sie das Ergebnis als formatierte Tabelle in folgender Form aus:

```txt
| customerid |    revenue |
|------------|------------|
| 1          |       51.3 |
| 2          |       21.3 |
| 3          |       26.9 |
| 4          |       28.1 |
| 5          |       30.8 |
| 6          |       21.2 |
| 7          |        4.8 |
| 8          |       31.6 |
| 9          |         48 |
| 10         |       26.7 |
...
```
