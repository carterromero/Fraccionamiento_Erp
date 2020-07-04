import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReservationsComponent } from './create-reservations.component';

const routes: Routes = [
  {
    path: '',
    component: CreateReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReservationsRoutingModule { }