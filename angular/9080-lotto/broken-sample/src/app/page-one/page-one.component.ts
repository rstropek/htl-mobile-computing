import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private dataAccessService: DataAccessService) { }

  ngOnInit() {
  }

}
