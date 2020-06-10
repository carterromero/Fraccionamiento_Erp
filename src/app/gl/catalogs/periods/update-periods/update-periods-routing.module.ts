import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePeriodsComponent} from './update-periods.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePeriodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePeriodsRoutingModule { }