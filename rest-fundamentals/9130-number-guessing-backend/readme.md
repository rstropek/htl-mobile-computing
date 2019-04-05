# Prüfung

## Einleitung

Ihre Aufgabe ist der **Entwurf und die Entwicklung** einer Web API, die als Backend für ein einfaches Zahlenratespiel dienen soll.

## Technische Rahmenbedingungen

* Verwenden Sie zur Entwicklung des Programms TypeScript >= 3.x und Node.js >= 10.x.

* Verwenden Sie das *Express.js*-Framework zur Umsetzung der Web API.

## Anforderungen

Folgende Methoden muss Ihre Web API bereitstellen:

* Beginnen eines neuen Spiels. Im Hintergrund wird eine neue Zufallszahl zwischen 1 und 100 ermittelt.

* Abgeben eines Tipps. Die möglichen Ergebnisse sind:
  * *Höher*: Die Zufallszahl ist höher als der Tipp
  * *Niedriger*: Die Zufallszahl ist niedriger als der Tipp
  * *Erraten*: Der Tipp stimmt mit der Zufallszahl überein. In diesem Fall geben Sie außerdem die Anzahl der Rateversuche zurück, die benötigt wurden.

* Optionale Anforderung (nicht notwendig für eine positive Note): Es müssen mehrere, gleichzeitige Spiele (z.B. durch verschiedene Benutzer) möglich sein.
