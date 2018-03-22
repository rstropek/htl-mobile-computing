import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SimpleLayoutsComponent } from './simple-layouts/simple-layouts.component';
import { OrderingComponent } from './ordering/ordering.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleLayoutsComponent,
    OrderingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
