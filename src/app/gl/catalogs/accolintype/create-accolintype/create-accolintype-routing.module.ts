import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccolintypeComponent} from './create-accolintype.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAccolintypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccolintypeRoutingModule { }