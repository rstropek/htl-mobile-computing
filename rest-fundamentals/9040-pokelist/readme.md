# *Pokemon List* Quiz


## Introduction

In this exercise, you have to implement a website that uses a RESTful Web API in the background. You have to create the website from scratch without any initial templates to build on. Feel free to use prior homeworks or samples from the course material as a starting point.

Your website has to display a list of *Pokemons* from the [*pokeapi*](https://pokeapi.co/). Add a *Details* button for each Pokemon that shows details about the figure. You find the detailed specification below.

1. Everybody has to do his/her best to come up with a solution.

1. Earn one point for your grade...
   1. ...if you create an *GitHub Issue* in your *GitHub Classroom* containing a link to the website that I can test over the Internet **and**
   1. ...if you format your website using the [Bootstrap CSS Framework](https://v4-alpha.getbootstrap.com/).


## Specification

1. You have to use *TypeScript* as your programming language. *JavaScript* is **not** sufficient.

1. Pokemon list
   * Display the name of each Pokemon.
   * Load and display only 20 Pokemons at a time. Offer paging buttons (next page, previous page) for navigation.
   * A *Details* button next to each Pokemon in the list should bring the user to the details page for the corresponding Pokemon.

1. On the Pokemon *Details* page, display the following fields about the figure:
   * Name
   * Image (`sprites.front_default`). Example:<br/>
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
   * Weight
   * List of all the Pokemon's abilities

1. The *Details* page should contain a button that takes the user back to the Pokemon list


## Hints

1. Look into the [course slides](https://rstropek.github.io/htl-mobile-computing/#/7/6) to see how you can call a RESTful Web API in the browser.

1. It is not absolutely necessary to use [jQuery](https://jquery.com/). You can also just use the browser's [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
