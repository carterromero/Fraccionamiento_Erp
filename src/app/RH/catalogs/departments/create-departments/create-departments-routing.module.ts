import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateDepartmentsComponent} from './create-departments.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDepartmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDepartmentsRoutingModule { }