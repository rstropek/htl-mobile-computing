import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [
    // Add the necessary import(s) for accessing HTTP-based Web APIs
    // Add the necessary import(s) for Flex Layout
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatDividerModule,
    MatCardModule, MatListModule, MatDividerModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
