import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateJournalslinComponent} from './create-journalslin.component';

const routes: Routes = [
  {
    path: '',
    component: CreateJournalslinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateJournalslinRoutingModule { }