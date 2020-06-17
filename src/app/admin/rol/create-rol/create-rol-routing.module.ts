import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRolComponent } from './create-rol.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRolRoutingModule { }