import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateAccolintypeComponent} from './update-accolintype.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateAccolintypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAccolintypeRoutingModule { }