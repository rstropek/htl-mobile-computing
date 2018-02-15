import { Component } from '@angular/core';

interface ICalculationLine {
  startValue: number;
  operator: string;
  parameter: number;
  result: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public startValue = 5;
  public height = 9;
  public result: ICalculationLine[];

  public calculate() {
    this.result = [];
    let x = this.startValue;
    for(let row = 2;row <= this.height; row++) {
      this.result.push({
        startValue: x,
        operator: '*',
        parameter: row,
        result: x = x * row
      });
    }
    for(let row = 2;row <= this.height; row++) {
      this.result.push({
        startValue: x,
        operator: '/',
        parameter: row,
        result: x = x / row
      });
    }
  }
}
