import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateConsiComponent} from './create-consi.component';

const routes: Routes = [
  {
    path: '',
    component: CreateConsiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateConsiRoutingModule { }