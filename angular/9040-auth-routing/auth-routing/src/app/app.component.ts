import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Auth Demo</h1>

    <button (click)="auth.login()">Login</button>
    <button (click)="auth.logout()">Logout</button>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
