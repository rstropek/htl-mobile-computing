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
