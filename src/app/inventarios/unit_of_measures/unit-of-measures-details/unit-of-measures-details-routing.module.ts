import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitOfMeasuresDetailsComponent } from './unit-of-measures-details.component';

const routes: Routes = [
  {
    path: '',
    component: UnitOfMeasuresDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitOfMeasuresDetailsRoutingModule { }