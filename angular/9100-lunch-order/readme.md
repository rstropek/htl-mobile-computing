# Test

## Einleitung

Die Kantine der Firma, in der Sie PraktikantIn sind, braucht eine Webseite, über die die MitarbeiterInnen am Montag in der Früh ihre Essensbestellungen für den Rest der Woche abgeben können. Ihre Aufgabe ist es, diese Lösung zu entwickeln.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms Angular 7.x

* Die Web API zum Speichern und Abfragen der Essensbestellungen steht Ihnen fertig zur Verfügung. Sie speichert die Ergebnisse im Hauptspeicher, wird also bei Neustart zurückgesetzt (wird jeden Sonntag automatisch gemacht, damit am Montag Früh die Bestellliste leer ist). Sie können die API unter [lunch-order-api.zip](https://cddataexchange.blob.core.windows.net/data-exchange/lunch-order-api.zip) herunterladen. Die ZIP-Datei enthält je ein Executable für Windows und Linux. Falls Sie kontrollieren möchten, dass die API nichts Schlimmes auf Ihrem Computer anstellt, finden Sie den Go Sourcecode unter [lunch-order-api.go](lunch-order-api.go) (nicht relevant für diesen Test).

* Hier Beispielabfragen, die zeigen, wie die API zu verwenden ist:

```txt
# Abfragen aller Gerichte
GET http://localhost:8080/meals

###
# Abfrage aller Bestellungen
GET http://localhost:8080/lunchOrders

###
# Abfrage aller Bestellungen einer Person
GET http://localhost:8080/lunchOrders?person=Tom

###
# Einfügen einer Bestellung
POST http://localhost:8080/lunchOrders

{
    "day": 0,
    "person": "Max",
    "mealId": 1,
    "notes": "Besonders viel"
}
```

Sollte der Port 8080 bei Ihnen belegt sein, können Sie dem Executable einen anderen Port in der Kommandozeile übergeben. `lunch-order-api.exe 12345` würde den Webserver auf Port 12345 starten.

## Anforderungen

### Mindestanforderungen (10 Punkte)

Ihr Programm muss die folgenden Anforderungen erfüllen, damit Ihr Test positiv beurteilt werden kann. Aber keine Sorge, kleinere Fehler in diesem Bereich führen nicht sofort zu einer negativen Note sondern nur zu Punktabzügen.

* (1 Punkt) Ihr Programm muss die im Unterricht besprochenen Empfehlungen (*Best Practices*) für Angular-Projekte einhalten, ohne Warnung kompilieren und beim Linting keine Warnungen ausgeben.

* (2 Punkte) Verwenden Sie den Angular Router mit einem Navigationsmenü (Design nicht relevant) zum Wechseln zwischen den unten geforderten Programmteilen.

* (2 Punkt) Zeigen Sie eine Liste aller Essensbestellungen in einer HTML-Tabelle an.

* (3 Punkte) Ermöglichen Sie die Erfassung einer neuen Essensbestellung.
  * *day* ist der Wochentag (0 = Montag, 1 = Dienstag, ..., 6 = Sonntag). Der Benutzer soll den Tag in einer Combobox auswählen können.
  * *person* ist ein Textfeld für den Namen der Person, die bestellt. Dieses Feld ist ein Pflichtfeld.
  * *mealId* ist die ID des gewünschten Essens.
  * *notes* sind optionale Hinweise an die Küche (z.B. *Ohne Zwiebel*)

* (2 Punkte) Das Essen (*mealId*) soll in der Erfassungsmaske in einer Combobox ausgewählt werden können. Holen Sie sich die Liste der möglichen Gerichte über die API (siehe HTTP-Requestbeispiele oben).

### Optionale Anforderungen (10 Punkte)

Die Lösung folgender Anforderungen ist für eine positive Beurteilung nicht unbedingt notwendig, sie verbessert aber Ihre Note.

* (3 Punkte) Jedes Gericht hat einen Preis (*price*). Erstellen Sie eine Auswertung, die zeigt, wie viel Geld jede Person, die Essen bestellt hat, in Summe für die Woche zu bezahlen hat. Hier ein Beispiel, wie die Auswertung aussehen könnte:

   | Person | Money to pay |
   | ------ | ------------ |
   | Tom    | 21.4         |
   | Jane   | 19.7         |
   | Max    | 25.9         |

* (3 Punkte) Kapseln Sie die Kostenauswertung aus dem vorigen Punkt in eine eigene, wiederverwendbare Komponente, die die Daten über `@Input` erhält.

* (4 Punkte) Gruppieren Sie die Liste der Essensbestellungen nach Personen. Je Person soll eine Überschrift angezeigt werden und darunter die Liste der Bestellungen der Person. Die Personen muss aufsteigend sortiert sein. Die Liste der Bestellungen muss nach Tag sortiert sein. Hier ein Beispiel, wie die Auswertung aussehen soll:

   **Jane**

   |   Day   |   Meal    |       Notes       |
   | ------- | --------- | ----------------- |
   | Monday  | Spaghetti | Mit viel Parmesan |
   | Tuesday | Schnitzel |                   |
   | ...     | ...       | ...               |

   **Tom**

   |   Day   |   Meal    |         Notes          |
   | ------- | --------- | ---------------------- |
   | Monday  | Spaghetti |                        |
   | Tuesday | Schnitzel | Kartoffel statt Pommes |
   | ...     | ...       | ...                    |
