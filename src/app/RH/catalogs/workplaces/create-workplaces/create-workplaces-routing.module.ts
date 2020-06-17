import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateWorkplacesComponent} from './create-workplaces.component';

const routes: Routes = [
  {
    path: '',
    component: CreateWorkplacesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateWorkplacesRoutingModule { }