import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsListComponent } from './reservations-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsListRoutingModule { }
