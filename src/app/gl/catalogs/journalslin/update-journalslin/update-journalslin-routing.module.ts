import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateJournalslinComponent} from './update-journalslin.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateJournalslinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateJournalslinRoutingModule { }