import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateLinesComponent} from './update-lines.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateLinesRoutingModule { }