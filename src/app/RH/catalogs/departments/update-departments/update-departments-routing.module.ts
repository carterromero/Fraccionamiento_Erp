import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateDepartmentsComponent} from './update-departments.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDepartmentsRoutingModule { }