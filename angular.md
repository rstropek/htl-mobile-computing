# Angular

Introduction to [Angular](https://angular.io/)


<!-- .slide: class="left" -->
## What is *Angular*?

* Platform for building client applications with web technology
  * HTML, JavaScript/TypeScript, CSS/SASS
* Angular covers ([read more details](https://angular.io/guide/architecture)):
  * Modules
  * Components (=application logic)
  * Templates (=view)
  * Data Binding (*Components* to *Templates*)
  * Services
  * Dependency Injection


<!-- .slide: class="left" -->
## Getting Started

* [Angular CLI](https://cli.angular.io/)

```
npm install -g @angular/cli
ng help
ng new my-first-project
cd my-first-project
ng serve
```


<!-- .slide: class="left" -->
## Getting Started

* [StackBlitz](https://stackblitz.com/)
* Online *Visual Studio Code* IDE for Angular (and React)
* [Read details...](https://medium.com/@ericsimons/stackblitz-online-vs-code-ide-for-angular-react-7d09348497f4)


<!-- .slide: class="left" -->
## Project Structure

<img src="images/angular-file-structure.svg" width="60%" />


<!-- .slide: class="left" -->
## Project Structure

<img src="images/angular-settings.svg" width="60%" />


<!-- .slide: class="left" -->
## Project Structure

<img src="images/angular-main-module.svg" />


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `{{title}}`                  | One-way binding from data source to view ([interpolation](https://angular.io/guide/template-syntax#interpolation----))
| `{{1 + 1}}`                  | One-way binding with [template expression](https://angular.io/guide/template-syntax#template-expressions)
| `[hidden]="!isValid()"`      | One-way data binding to property ([property binding](https://angular.io/guide/template-syntax#property-binding--property-))

* [Avoid side-effects](https://angular.io/guide/template-syntax#avoid-side-effects)!


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                            | Description
|-----------------------------------|----------------------------------------------------------
| `(click)="onSave()"`              | One-way event binding from element to component ([event binding](https://angular.io/guide/template-syntax#event-binding---event-))
| `<input [(ngModel)]="firstName">` | Two-way binding ([*ngModel*](https://angular.io/guide/template-syntax#ngModel))


<!-- .slide: class="left" -->
## *Forms* Module

> For two-way binding you need the `FormsModule`

```
...
import { FormsModule } from '@angular/forms'
...
@NgModule({
  ...
  imports: [
    ..., FormsModule, ...
  ], ...
})
export class AppModule { }
```


<!-- .slide: class="left" -->
## Template & Data Binding

* Define HTML *layout* and *structure*
* Prefixed with `*`

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `*ngFor="let i of items"`    | Repeater directive ([*ngForOf*](https://angular.io/guide/template-syntax#ngforof))
| `*ngIf="len > 3"`            | Conditional display ([*ngIf*](https://angular.io/guide/template-syntax#ngif))
| `ngSwitch`/`*ngSwitchCase`   | Conditional display ([example](https://angular.io/guide/template-syntax#ngSwitch))


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                       | Description
|------------------------------|----------------------------------------------------------
| `[class]="errorClass"`       | Replacement [class binding](https://angular.io/guide/template-syntax#class-binding)
| `[class.error]="hasError()"` | Toggling [class binding](https://angular.io/guide/template-syntax#class-binding)
| `[style.color]="hasError() ? 'red' : 'green'"` | [Style binding](https://angular.io/guide/template-syntax#style-binding)


<!-- .slide: class="left" -->
## Template & Data Binding

| Syntax                                     | Description
|--------------------------------------------|----------------------------------------------------------
| `{{ birthday ` &#124; ` date:'longDate'}}` | [Pipe](https://angular.io/guide/template-syntax#the-pipe-operator---) operator

* [Built-in pipes](https://angular.io/guide/pipes#built-in-pipes)
* Advanced topic: Building [custom pipes](https://angular.io/guide/pipes#custom-pipes)


<!-- .slide: class="left" -->
## Advanced Template & Data Binding

* [HTML attributes vs. DOM properties](https://angular.io/guide/template-syntax#html-attribute-vs-dom-property)
* [Template reference variables](https://angular.io/guide/template-syntax#template-reference-variables--var-)
* [*Input* and *Output* properties](https://angular.io/guide/template-syntax#input-and-output-properties)


<!-- .slide: class="left" -->
## Consuming Web APIs

* Use module `HttpClientModule`
* Read more in [Angular docs...](https://angular.io/guide/http)

```
...
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ ..., HttpClientModule, ... ],
  declarations: ...,
  bootstrap: ...
})
export class AppModule {}
```


<!-- .slide: class="left" -->
## Consuming Web APIs

Get instance of `HttpClient` in constructor (*Dependency Injection*)

```
...
import { HttpClient } from '@angular/common/http';

@Component(...)
export class MyComponent {
  constructor(private http: HttpClient) { ... }
  ...
}
```


<!-- .slide: class="left" -->
## Consuming Web APIs

```
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface IPerson { name: string; }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public people: Observable<IPerson[]>;
  constructor(private httpClient: HttpClient) { 
    this.people = httpClient.get<IPerson[]>('http://localhost:8080/api/people');
  }
}
```


<!-- .slide: class="left" -->
## Consuming Web APIs

```
<h1>People</h1>

<ul>
  <li *ngFor="let person of people | async">{{ person.name }}</li>
</ul>
```


<!-- .slide: class="left" -->
## Consuming Web APIs

| Method   | Docs link
|----------|----------------------------------------------------------
| `get`    | [Read more...](https://angular.io/api/common/http/HttpClient#get)
| `post`   | [Read more...](https://angular.io/api/common/http/HttpClient#post)
| `patch`  | [Read more...](https://angular.io/api/common/http/HttpClient#patch)
| `put`    | [Read more...](https://angular.io/api/common/http/HttpClient#put)
| `delete` | [Read more...](https://angular.io/api/common/http/HttpClient#delete)


<!-- .slide: class="left" -->
## Routing

* Angular supports navigating between *client-side views* using the URL
* Support passing parameters in the URL
  * Path
  * Query
* [`base` element](https://developer.mozilla.org/en-US/docs/HTML/Element/base-redirect-2?redirect=no) defines the base URL for all relative URLs
* Uses HTML5's [*push state* functionality](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) in the background
  * Can be changed to *hash URLs* for older browsers if necessary
  * See also [`LocationStrategy`](https://angular.io/api/common/LocationStrategy)
* Generate new Angular app including router with `--routing` switch in CLI
  * Example: `ng new <your app name> --routing`


<!-- .slide: class="left" -->
## Setup *Routing Module*

```
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerListComponent} from './customer-list.component';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


<!-- .slide: class="left" -->
## Add *Routing Module* to Main Module

```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerListComponent} from './customer-list.component';
import {WelcomeComponent} from './welcome.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


<!-- .slide: class="left" -->
## Router Links

```
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h2>Welcome</h2>
    <ul>
      <li><a routerLink="/customers">Customer List</a></li>
      <li><a routerLink="/customers/123">Details about customer 123</a></li>
    </ul>`
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
```


<!-- .slide: class="left" -->
## Processing Route Parameters

```
import 'rxjs/Rx';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-customer-details',
  template: `<h2>Customer Details for Customer {{ customerID | async }}</h2>
  <ul>
    <li><a routerLink="/welcome">Welcome</a></li>
    <li><a routerLink="/customers/123">Details about customer 123</a></li>
    <li><a routerLink="/customers/456">Details about customer 456</a></li>
  </ul>`
})
export class CustomerDetailsComponent implements OnInit {
  public customerID: Observable<string>;
  constructor(private route: ActivatedRoute) { console.log('Created...'); }
  ngOnInit() { this.customerID = this.route.paramMap.map(param => param.get('id')); }
}
```


<!-- .slide: class="left" -->
## Further Readings and Exercises

* Want to know more? Read/watch...
  * [Angular Documentation](https://angular.io/docs)
  * [Angular Tutorial](https://angular.io/tutorial)
  * [Angular Cheat Sheet](https://angular.io/guide/cheatsheet)
  * [Angular and RxJS](https://angular.io/guide/observables)
  * [ReactiveX Library](http://reactivex.io/rxjs/manual/index.html)
* Exercises
  * [Introduction in RxJS](https://github.com/rstropek/htl-mobile-computing/blob/master/angular/0030-rxjs/)
  