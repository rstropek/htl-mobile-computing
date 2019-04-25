# Conference Agenda

## Introduction

This sample demonstrates the use of [Angular FlexLayout](https://github.com/angular/flex-layout).

## API

This sample uses session data from a community event ([Global Azure Bootcamp Austria 2019](https://coding-club-linz.github.io/global-azure-bootcamp-2019/programm.html)). In the folder [api](api) you find a simple Go program that exports the sessions of the event's program into JSON and allows you to query that data via a RESTful web API.

If you do not want to compile the Go program yourself, you can download the compiled executable [here](https://cddataexchange.blob.core.windows.net/data-exchange/gab-conference-api.zip).

## Angular

The folder [flex](flex) contains the Angular app. In [*app.component.html*](flex/src/app/app.component.html) you can find a sample visualization of the conference program using Angular FlexLayout. You could use [*app.component.simple.html*](flex/src/app/app.component.simple.html) as a starting point and demonstrate FlexLayout be stepwise working towards the final solution.
