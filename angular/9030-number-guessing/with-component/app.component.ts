import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  status: number = null;
  guess: number = null;
  randomNumber:number = null;
  history:string[] = null;
  statuses:number[] = null;

  constructor() {
   this.newGame();
  }

  public checkGuess() {
    this.status = this.guess - this.randomNumber;
    this.history.push(this.guess + "");
    this.statuses.push(this.status);
  }

  public newGame() {
    this.randomNumber = Math.round(Math.random() * 100);
    this.status = null;
    this.history = []; 
    this.statuses = [];
  }
}