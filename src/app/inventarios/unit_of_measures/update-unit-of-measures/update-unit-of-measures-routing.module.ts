import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUnitOfMeasuresComponent } from './update-unit-of-measures.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateUnitOfMeasuresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateUnitOfMeasuresRoutingModule { }