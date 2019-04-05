# Test

## Einleitung

Sie arbeiten in einer Softwarefirma, in der zur Beschäftigung in den Pausen ein Tischfußballtisch aufgestellt wurde. Ihre Aufgabe als Praktikantin oder Praktikant ist es, ein Web-Frontend zum Erfassen und Auswerten der Spielergebnisse zu bauen.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms Angular 7.x

* Die Web API zum Speichern und Abfragen der Spielergebnisse steht Ihnen fertig zur Verfügung. Sie speichert die Ergebnisse im Hauptspeicher, wird also bei Neustart zurückgesetzt. Sie können die API unter [tablesoccer-comp-api.zip](https://cddataexchange.blob.core.windows.net/data-exchange/tablesoccer-comp-api.zip) herunterladen. Die ZIP-Datei enthält je ein Executable für Windows und Linux. Falls Sie kontrollieren möchten, dass die API nichts Schlimmes auf Ihrem Computer anstellt, finden Sie den Go Sourcecode unter [tablesoccer-comp-api.go](tablesoccer-comp-api.go) (nicht relevant für diesen Test).

* Hier Beispielabfragen, die zeigen, wie die API zu verwenden ist:

```txt
# Abfragen aller Matchergebnisse
GET http://localhost:8080/matches

###
# Abfrage eines Matchergebnisses
GET http://localhost:8080/matches/2

###
# Einfügen eines Ergebnis
# (p steht für Player, s steht für Score (=Anzahl Tore); Score muss zwischen 0 und 10 sein)
POST http://localhost:8080/matches

{
    "p1": "Tom",
    "p2": "Max",
    "s1": 1,
    "s2": 5
}
```

Sollte der Port 8080 bei Ihnen belegt sein, können Sie dem Executable einen anderen Port in der Kommandozeile übergeben. `tablesoccer-comp-api.exe 12345` würde den Webserver auf Port 12345 starten.

## Anforderungen

### Mindestanforderungen (10 Punkte)

Ihr Programm muss die folgenden Anforderungen erfüllen, damit Ihr Test positiv beurteilt werden kann. Aber keine Sorge, kleinere Fehler in diesem Bereich führen nicht sofort zu einer negativen Note sondern nur zu Punktabzügen.

* (1 Punkt) Ihr Programm muss die im Unterricht besprochenen Empfehlungen (*Best Practices*) für Angular-Projekte einhalten, ohne Warnung kompilieren und beim Linting keine Warnungen ausgeben.

* (2 Punkte) Verwenden Sie den Angular Router mit einem Navigationsmenü (Design nicht relevant) zum Wechseln zwischen den unten geforderten Programmteilen.

* (2 Punkt) Zeigen Sie eine Liste aller Matchergebnisse in einer HTML-Tabelle an.

* (3 Punkte) Ermöglichen Sie die Erfassung eines neuen Matchergebnis.
  * Die Namen von *Player 1* und *Player 2* sind Textfelder.
  * Die *Score*-Felder entsprechen den Toren, die der jeweilige Spieler erzielt hat.

* (2 Punkte) Stellen Sie sicher, dass nur korrekte Scores (zwischen 0 und 10) eingegeben werden können. Bei Eingabefehler zeigen Sie entsprechende Fehlermeldungen an.

### Optionale Anforderungen (10 Punkte)

Die Lösung folgender Anforderungen ist für eine positive Beurteilung nicht unbedingt notwendig, sie verbessert aber Ihre Note.

* (3 Punkte) Fügen Sie eine Rangliste hinzu. Die Reihung ergibt sich aus der Anzahl an Siegen, die der jeweilige Spieler errungen hat. Hier ein Beispiel, wie die Auswertung aussehen könnte:

   | Player | Number of Victories |
   | ------ | ------------------- |
   | Jane   | 5                   |
   | Phil   | 4                   |
   | Jil    | 4                   |
   | Tom    | 2                   |

* (3 Punkte) Kapseln Sie die Rangliste in eine eigene, wiederverwendbare Komponente, die die Daten über `@Input` erhält.

* (4 Punkte) Ergänzen Sie die Rangliste um eine Platzierung. Bei [ex aequo](https://de.wiktionary.org/wiki/ex_aequo) Platzierung muss die entsprechende Anzahl an Plätzen übersprungen werden (z.B. 1 2 2 4 5 - Platz drei wird ausgelassen weil es zwei zweite Plätze gegeben hat). Hier ein Beispiel, wie die Auswertung aussehen könnte:

   | Player | Rank | Number of Victories |
   | ------ | ---- | ------------------- |
   | Jane   | 1    | 5                   |
   | Phil   | 2    | 4                   |
   | Jil    | 2    | 4                   |
   | Tom    | 4    | 2                   |
