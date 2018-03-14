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
