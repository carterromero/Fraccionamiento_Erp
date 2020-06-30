import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateTenantsComponent} from './update-tenants.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateTenantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTenantsRoutingModule { }