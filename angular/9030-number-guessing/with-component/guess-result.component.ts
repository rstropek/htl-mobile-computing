import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guess-result',
  templateUrl: './guess-result.component.html',
  styleUrls: ['./guess-result.component.css']
})
export class GuessResultComponent {
  @Input() status: number;

  constructor() { }
}
