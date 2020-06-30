import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUnitOfMeasuresComponent } from './create-unit-of-measures.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUnitOfMeasuresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUnitOfMeasuresRoutingModule { }