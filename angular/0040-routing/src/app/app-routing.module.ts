import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDetailsComponent} from './customer-details.component';
import {CustomerListComponent} from './customer-list.component';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
