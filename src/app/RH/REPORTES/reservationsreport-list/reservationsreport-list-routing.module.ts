import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsreportListComponent } from './reservationsreport-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsreportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsreportListRoutingModule { }
