import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateWorkplacesComponent} from './update-workplaces.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateWorkplacesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateWorkplacesRoutingModule { }