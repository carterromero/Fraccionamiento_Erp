import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateLinesComponent} from './create-lines.component';

const routes: Routes = [
  {
    path: '',
    component: CreateLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLinesRoutingModule { }