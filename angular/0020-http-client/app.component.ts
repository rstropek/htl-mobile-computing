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
