import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateReservationsComponent} from './update-reservations.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateReservationsRoutingModule { }