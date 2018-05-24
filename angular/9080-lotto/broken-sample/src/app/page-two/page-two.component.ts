import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  public value1: string;
  public value2: string;

  // BUG: Something is broken here. This class needs an HttpClient in
  //      order to work properly. However, Angular doesn't know about
  //      HttpClient yet. Find the error and fix it. BTW: You MUST NOT
  //      remove the constructor parameter to fix the problem. This
  //      has to stay.
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  public isValid() {
    // BUG: Something is broken here. This function should return true if
    //      the class members value1 and value2 contain a non-empty string.
    //      They are bound to HTML input fields. However, the code as it is
    //      does not compile. Find the error and fix it.
    return value1 && value2;
  }
}
