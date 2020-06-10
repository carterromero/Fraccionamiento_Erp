import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePeriodsComponent} from './create-periods.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePeriodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePeriodsRoutingModule { }