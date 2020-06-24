import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTenantsComponent} from './create-tenants.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTenantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTenantsRoutingModule { }