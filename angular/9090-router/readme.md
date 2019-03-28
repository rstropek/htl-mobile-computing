# Angular Router

## Introduction

We already worked on [examples using the PokeAPI](https://github.com/rstropek/htl-mobile-computing/tree/master/rest-fundamentals/9040-pokelist) in this year, can you remember? This time we are going to use this public Web API again.

You have to create an Angular 7 app that uses the Angular router. **Note** that it is highly recommended to complete this homework because it is similar to the example in the upcoming exam.

## Requirements

* Create a new Angular application including the [Angular Router](https://rstropek.github.io/htl-mobile-computing/#/12/19).

* Display a list of all Pokemon names under the URL *http://yourserver/pokemons*. Every Pokemon name should be a hyperlink to a site with details about the Pokemon (see requirement regarding *Pokemon details* below).

* The user must be able to enter a part of a Pokemon name (e.g. *charm*) to filter the Pokemon list. If the user does not enter a filter string, display the entire list of Pokemons. ***Note** that it is not enough to just process the first 20 Pokemons from the PokeAPI, you have to process all Pokemons.

* If the user does not enter any path in the URL (i.e. just *http://yourserver/*), redirect the user to the list of Pokemons (i.e. *http://yourserver/pokemons*).

* Pokemon details must be reachable at *http://yourserver/pokemons/1* (where *1* is the ID of the Pokemon).

* Display the *name of the pokemon* and its *ability names* on the details page.

## Technical Requirements

* Use Angular 7

* You can use Stackblitz or a locally created Angular solution. **Note** that a locally created Angular solution is recommended in order to prepare for the upcoming exam.

## Extra Point

Send me a link to the working application deployed on the internet via a GitHub issue to earn an extra point for your grade.
