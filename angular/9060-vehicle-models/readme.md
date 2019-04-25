# Vehicle Model Database Browser

## Introduction

In this exercise, you have to build an Angular frontend for a database with data about vehicle models. The user should be able to look for vehicle models based on manufacturing year and make (e.g. BMW, Tesla, Volkswagen), and view vehicle model details.

## Data Access

I have written and deployed a RESTful Web API to *https://vehicle-data.azurewebsites.net* that will serve as the backend for your Angular app. Here are some sample requests that you will need to solve the exercise:

```txt
@host = https://vehicle-data.azurewebsites.net

###
# Get a list of all years for which the database contains data
GET {{host}}/api/years HTTP/1.1

###
# Get a list of all makes for which the database contains data
GET {{host}}/api/makes HTTP/1.1

###
# Get a filtered list of makes (all makes that contain "To")
GET {{host}}/api/makes?make=To HTTP/1.1

###
# Get a list of all models
# Note that the result is by default limited to the first 10 result rows
GET {{host}}/api/models HTTP/1.1

###
# Get a list of all models
# Note that you can use "offset" (skip first n rows) and "fetch"
# (take n rows) to implement paging
GET {{host}}/api/models?offset=3&fetch=3 HTTP/1.1

###
# Get a filtered list of models
# Note that you can combine filtering with paging
GET {{host}}/api/models?make=audi&year=2012&offset=10 HTTP/1.1

###
# Get a list of all fuel types (e.g. electricity, diesel)
GET {{host}}/api/fuelTypes HTTP/1.1

###
# Get details about a specific model based on its ID
GET {{host}}/api/models/6930 HTTP/1.1
```

## Requirements

1. Create a new Angular application using the Angular CLI

1. Use the Angular router to implement two routes (details see below):
    * */about*: Contains data with a general description of the app
    * */models*: Contains a page on which the user can browse the vehicle models

1. Your app has to contain a menu with links to all routes mentioned above

1. *About* page:
    * Use the NPM package *lorem-ipsum* to generate five paragraphs of dummy text *at runtime* (i.e. call *lorem-ipsum* in the Angular component)

1. *Models* page:
    * Add a filter area with two comboboxes boxes in which the user can select a year and a make that should be used to filter the result list. Use the RESTful Web API described above to get a list of years and a list of makes for populating the comboboxes.
    * Add a *refresh* button with which the user can refresh the result list.
    * Display a table with vehicle models filtered based on the user's filter settings (see requirement above). The table has to contain year, make, and model. The list should be limited to the first 10 result models.

1. Make the filters optional. That means that the user *can* filter based on year and make but she doesn't need to.
    * She can filter only by year,
    * only by make,
    * by year and make,
    * or retrieve a completely unfiltered list.

## Extra Points

You can earn up to two extra points for this homework. For extra points, you have to solve the following two requirements and send me a link to your solution that I can try over the Internet.

1. Add two Buttons *Next Page* and *Previous Page* to your *Models* page. The user must be able to page through the results. Add logic so that the paging buttons are properly enabled/disabled
    * *Previous Page* disabled on first page
    * *Next Page* disabled if there are not further result items

1. Style the application with a CSS/component framework like *Angular Material*. Optionally, use *Flex Layout* to arrange the HTML elements (e.g. filter settings, refresh button, and result table on *Models* page)

## Challenge

Do you want to have extra challenges?

1. Change the filter area so that the user just has a filter text input. Let the user enter his search in text. *2012* would search for models from 2012. *Audi* would search for the make Audi. *2012 Audi* or *Audi 2012* would combine both filters.

1. Remove the *refresh* button and start the search automatically whenever the user has not changed the filter for 300ms. Try to solve this challenge with RxJS and Observables and try to avoid manually calling *setTimeout* or similar JavaScript functions.
