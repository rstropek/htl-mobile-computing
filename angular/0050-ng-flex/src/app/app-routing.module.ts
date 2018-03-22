import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutsComponent } from './simple-layouts/simple-layouts.component';
import { OrderingComponent } from './ordering/ordering.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ordering' },
  { path: 'simple-layouts', component: SimpleLayoutsComponent },
  { path: 'ordering', component: OrderingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
