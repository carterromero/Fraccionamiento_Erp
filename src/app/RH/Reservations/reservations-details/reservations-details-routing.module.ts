import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsDetailsComponent } from './reservations-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsDetailsRoutingModule { }