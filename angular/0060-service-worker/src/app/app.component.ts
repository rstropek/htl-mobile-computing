import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface IPerson {
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Angular Service Worker</h1>

  <p>Lorem ipsum...</p>

  <ul>
    <li *ngFor="let p of people | async">{{ p.name }}</li>
  </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  public people: Observable<IPerson[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.people = this.http.get<IPerson[]>('http://localhost:8081/api/people');
  }
}
