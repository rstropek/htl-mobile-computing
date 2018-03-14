import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home</h2>

    <table *ngIf="auth.isAuthenticated()">
      <tr>
        <th>Given name:</th>
        <td>{{ profile?.given_name }}</td>
      </tr>
      <tr>
        <th>Family name:</th>
        <td>{{ profile?.family_name }}</td>
      </tr>
      <tr>
        <th>Profile pic:</th>
      <td><img *ngIf="profile?.picture" [src]="profile?.picture" /></td>
      </tr>
    </table>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
    }
  }
}
