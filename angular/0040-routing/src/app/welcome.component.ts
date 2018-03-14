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
