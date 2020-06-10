import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeriodsDetailsComponent} from './periods-details.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodsDetailsRoutingModule { }